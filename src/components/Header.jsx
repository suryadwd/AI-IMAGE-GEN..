import React, { useContext } from "react";
import { FaStar } from "react-icons/fa";
import { GiStarSwirl } from "react-icons/gi";
import { motion } from "framer-motion";
import { AppContext } from "../context/AppContext";
import {  useNavigate } from "react-router-dom";

const Header = () => {

  const imagesArray = [
    "https://png.pngtree.com/png-vector/20230321/ourmid/pngtree-artificial-intelligence-blue-illustration-png-image_6654955.png",
    "https://static.thenounproject.com/png/5553355-200.png",
    "https://static.vecteezy.com/system/resources/previews/047/073/067/non_2x/ninja-face-black-stencil-iconic-design-for-mysterious-projects-ai-generated-free-png.png",
    "https://png.pngtree.com/png-clipart/20231003/original/pngtree-alien-png-with-ai-generated-png-image_13244992.png",
  ];

  const { login } = useContext(AppContext);
  const { setShow } = useContext(AppContext);
  const navigate = useNavigate();

  const ButtonHandler = () => {
    if(login) navigate('/result')
    else setShow(true)
  }

  return (
    <motion.div
      className="mt-2 flex flex-col justify-center items-center"
      initial={{ opacity: 0.3, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <motion.div
        initial={{ opacity: 0, y: -200 }}
        transition={{ duration: 1, delay: 0.4 }}
        animate={{ opacity: 1, y: 0 }}
        className=" mt-2 text-stone-600 inline-flex text-center gap-2 bg-white px-9 py-1 rounded-full border border-neutral-700"
      >
        <p className="text-xs mt-[.9%]">TEXT TO IMAGE CONVERSION! </p>
        <FaStar className="size-5" />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, x: -500 }}
        transition={{ duration: 1, delay: 0.6 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-8xl font-semibold max-w-[850px] mx-auto mt-10 text-center"
      >
        Turn any text to <span className="text-blue-500">image</span>, in
        seconds.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, x: 500 }}
        transition={{ duration: 1, delay: 0.8 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-center max-w-xl mx-auto mt-6"
      >
        Unleash your creative potential with the power of AI! Transform your
        imagination into stunning visual art within seconds. Simply type your
        idea, and let the magic Unfold before your eyes—bringing your visions to
        life like never before.
      </motion.p>

      <button onClick={ButtonHandler} className="text-white bg-black w-auto mt-6 px-12 py-2 flex items-center gap-4 rounded-full hover:scale-110 transition-all duration-500">
        Generate Images
        <GiStarSwirl className="size-9" />
      </button>

      <div className="broder-2 flex items-center justify-between  ">
        {imagesArray.map((item, index) => (
          <img key={index} src={item} alt={``} className="w-32 h-32 m-7 " />
        ))}
      </div>
      <p className="mt-1 text-sm font-light">
        Generated images from IMGGEN.. platform{" "}
      </p>
    </motion.div>
  );
};

export default Header;
