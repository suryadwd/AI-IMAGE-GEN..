import React from 'react'
import { motion } from "framer-motion";

const Description = () => {

  
  

  return (
    <motion.div 
    initial = {{opacity:0.4, y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1, y:0}}
    viewport={{once:true}}
    className='flex flex-col items-center justify-center my-20 p-6'>
      <h1 className='text-3xl font-semibold'>Create AI images through your prompts</h1>
      <p className='text-gray-600 mb-7 mt-2'>Turn your imagination into visuals</p>

      <div className='flex items-center gap-7'>

      <img src="https://static.thenounproject.com/png/5553355-200.png" alt="" className='w-[30%]  rounded-lg' />
      <div >
        <h2 className='font-bold text-3xl -mt-1'>Introducing the AI-Powered Text to Image Generator</h2>
        <p className='font-light mb-2 '>Easily bring your ideas to life with our free AI image generator. Whether you need stunning visuals or unique imagery, our tool transforms your text into eye-catching images with just a few cliccks. Imagine it, describe it, and watch it comw to life instantly. </p>
        <p className='font-light '>Simply type in a text in a text prompt, and our cutting-edge AI will generate high-quality image in seconds. From product visuals to character design and portraits, even concepts that don't yet exist can be visualized effortlessly. Powered by  advanced AI technology, the creative possibilities are limitless!</p>
      </div>
      </div>

    </motion.div>
  )
}

export default Description
