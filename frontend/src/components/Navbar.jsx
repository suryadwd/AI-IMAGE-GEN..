import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdStars } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import {AppContext} from "../context/AppContext"
import toast from 'react-hot-toast';
import axios from "axios"

const Navbar = () => {

  const{login,setLogin} = useContext(AppContext)
  const {show, setShow} = useContext(AppContext)
  const {setCurrentUser,currentUser} = useContext(AppContext)
  const navigate = useNavigate()

  const handel = async() => {
    try {
      const res = await axios.post("http://localhost:7000/api/user/logout")
      if(res.data.success) {
        setCurrentUser(null)
        setLogin(false)
        navigate('/')
      }
    } catch (error) {
      console.log(error)
      toast.error(error.response?.data?.message )
    }
  }

  return (
    <div className="flex items-center justify-between">
      <Link to="/"><img
       src="nav.png"
        alt=""
        className="w-32 p-2"
      /></Link>

      <div >
        
      {!login ?
       <div className=" flex items-center gap-3 justify-between">
        <Link to='/buy'><p className="cursor-pointer">Prices</p></Link>
        <button className="bg-zinc-900 text-white rounded-lg px-6 py-2" onClick={() => setShow(true)} >Login</button>
      </div>
      : 
      <div className="flex items-center justify-between gap-3"> 
        <button className="flex items-center gap-1  bg-blue-400 px-4 py-1 rounded-lg hover:scale-105 transition-transform duration-300"> <MdStars className="size-5" /> Credits left : {currentUser?.existingUser?.balance}</button>
        <h1 className="font-semibold text-gray-700">Hi, {currentUser?.existingUser?.name}</h1>
        <div className="relative group ">
          <div ><CgProfile className="size-7" /> </div>
          <div className="absolute hidden group-hover:block top-0 -right-5 z-10 to-black rounded pt-11" >
            <ul className="list-none m-0 p-2 bg-white rounded-lg border text-sm">
              <li onClick={handel} className="py-1 px-3 cursor-pointer ">Logout</li>
            </ul>
          </div>
        </div>
      </div> 
      
      }

   
    

      </div>

    </div>
  );
};

export default Navbar;
