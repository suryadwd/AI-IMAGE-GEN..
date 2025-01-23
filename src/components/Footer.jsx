import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='flex  items-center justify-between gap-4 py-3 mt-20 '>
      <img
       src="nav.png"
        alt=""
        className="w-32 p-2"
      />

      <p className='flex-1 text-sm text-gray-500 '>Copyright @surya__suraj.dev | All right reserved.</p>

      <div className=' flex items-center gap-5 '>
      <FaFacebook className='size-7' />
      <RiInstagramFill className='size-7' />
      <FaTwitter className='size-7' />
      </div>

    </div>
  )
}

export default Footer
