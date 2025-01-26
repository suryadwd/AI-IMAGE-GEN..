import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import toast from 'react-hot-toast';
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Result = () => {

  const [image, setImage] = useState("resultImg.gif")
  const [load, setLoad] = useState(false)
  const [prompt, setPrompt] = useState("")
  const navigate = useNavigate(); 

  const {currentUser, setCurrentUser} = useContext(AppContext)

  const handelOnSubmit = async (e) => {
    e.preventDefault();
    
    try {      
      const res = await axios.post('http://localhost:7000/api/image/generateImage', { prompt }, {
        withCredentials: true, 
      });
      if (res.data.success) {
        setImage(res.data.resultImage);
        setLoad(true);
        console.log("Current balance:", currentUser.user.balance);
        
        if (res.data.balance <= 0) { 
          navigate("/buy");
        } else {
          setCurrentUser({
            ...currentUser,
            user: {
              ...currentUser.user,
              balance: res.data.balance, // Update balance from the response
            },
          });
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message);
    }
  
    setPrompt("");
  };
  
  return (
    <motion.div 
    
    initial = {{opacity:0.4, y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1, y:0}}
    viewport={{once:true}}
    
    className="flex flex-col items-center">
      <div className="mt-11">
        <img
          src={image}
          alt=""
          className="max-w-sm rounded h-80"
        />
        
      </div>
      
    {
      !load &&   <form onSubmit={handelOnSubmit} className="flex w-full max-w-xl  border-4 mt-7  rounded-full bg-neutral-500">
      
      
      <input value={prompt} onChange={(e) => setPrompt(e.target.value)} type="text" placeholder="Describe what you want to generate"
      className="flex-1 bg-transparent outline-none ml-8 px-8 py-5 text-xl "
      />
      <button type="submit" className="bg-zinc-900 px-10 text-white py-3 rounded-full">Generate</button>

      

    </form>
    }
     {
      load &&  <div className="flex gap-3  justify-center text-white text-sm mt-10 rounded-full">
      <p className="bg-transparent border border-zinc-950 text-black px-7 py-3 rounded-full cursor-pointer" onClick={(prev) => setLoad(!prev)} >Generate Another</p>
      <a href={image} download className="bg-zinc-900 px-10 py-3 rounded-full cursor-pointer">Download</a>
    </div>
     }
    </motion.div>
  );
};

export default Result;
