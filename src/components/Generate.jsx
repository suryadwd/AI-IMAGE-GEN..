import React from 'react'
import { GiStarSwirl } from "react-icons/gi";

const Generate = () => {
  return (
    <div className='flex flex-col items-center'>
      <h1 className=' font-bold text-3xl py-6'>Want to see some magic. Try now</h1>
 <button className="text-white mb-4 bg-black w-auto mt-6 px-12 py-2 flex items-center gap-4 rounded-full hover:scale-105 transition-all duration-500">
        Generate Images
        <GiStarSwirl className="size-9" />
      </button>
    </div>
  )
}

export default Generate
