import React, { useState } from "react";

const Result = () => {

  const [image, setImage] = useState("resultImg.gif")
  const [load, setLoad] = useState(false)
  const [input, setInput] = useState("")

  const handelOnSubmit =  async (e) => {

    e.preventDefault()

    console.log(input)

    setInput("")


  }

  return (
    <div className="flex flex-col items-center">
      <div className="mt-11">
        <img
          src={image}
          alt=""
          className="max-w-sm rounded h-80"
        />
        
      </div>
      
    {
      !load &&   <form onSubmit={handelOnSubmit} className="flex w-full max-w-xl  border-4 mt-4  rounded-full bg-neutral-500">
      
      
      <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="Describe what you want to generate"
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
    </div>
  );
};

export default Result;
