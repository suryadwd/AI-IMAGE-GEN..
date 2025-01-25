import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import { GiStarSwirl } from "react-icons/gi";
import { motion } from "framer-motion";

const Generate = () => {

  const { login } = useContext(AppContext);
  const { setShow } = useContext(AppContext);
  const navigate = useNavigate();

  const ButtonHandler = () => {
    if(login) navigate('/result')
    else setShow(true)
  }

  return (
    <motion.div 
    
    initial = {{opacity:0.4, y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1, y:0}}
    viewport={{once:true}}

    className='flex flex-col items-center'>
      <h1 className=' font-bold text-3xl py-6'>Want to see some magic. Try now</h1>
 <button onClick={ButtonHandler} className="text-white mb-4 bg-black w-auto mt-6 px-12 py-2 flex items-center gap-4 rounded-full hover:scale-105 transition-all duration-500">
        Generate Images
        <GiStarSwirl className="size-9" />
      </button>
    </motion.div>
  )
}

export default Generate
