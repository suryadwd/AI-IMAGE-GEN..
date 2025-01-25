import React from "react";
import { IoEye } from "react-icons/io5";
import { FaMagic } from "react-icons/fa";
import { MdDownloadForOffline } from "react-icons/md";
import { motion } from "framer-motion";

const Steps = () => {

  const data = [
    {
      title: "Describe Your Vision",
      description:
        "Type a phrase, sentence, or paragraph that describes the image you want to create.",
      icons: <IoEye />,
    },
    {
      title: "Watch the Magic",
      description:
        "Our AI-powered engine will transform your text into a high-quality, unique image in seconds., sentence, or paragraph that describes the image you want to create.",
      icons: <FaMagic />,
    },
    {
      title: "Download & Share",
      description:
        "Instantly download your creation or share it with the world directky from our platform.",
      icons: <MdDownloadForOffline />,
    },
  ];

  return (
    <motion.div 
      
    initial = {{opacity:0.4, y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1, y:0}}
    viewport={{once:true}}
    >



      <h1 className="text-3xl font-semibold mb-2 mt-10 ml-[40%] ">
        Wants to know, How it works
      </h1>
      <p className="text-lg text-gray-600 ml-[43%] ">
        Transform Words Into Stunning Images
      </p>

      <div className="flex flex-col gap-6 mt-5 mb-2 w-[60%] ml-[24%]">
  {data.map((item, index) => (
    <div
      className="flex flex-col items-start p-2 rounded-lg shadow-md border border-gray-300  hover:scale-105 transition-all duration-300"
      key={index}
    >
      <div className="flex items-center gap-4 mb-1">
        <div className="text-3xl">{item.icons}</div>
        <h3 className="text-xl font-bold">{item.title}</h3>
      </div>

      <p className="text-gray-700">{item.description}</p>
    </div>
  ))}
</div>

    </motion.div>
  );
};

export default Steps;
