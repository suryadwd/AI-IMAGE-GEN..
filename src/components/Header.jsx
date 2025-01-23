import React from "react";
import { FaStar } from "react-icons/fa";
import { GiStarSwirl } from "react-icons/gi";

const Header = () => {
  const imagesArray = [
    "https://png.pngtree.com/png-vector/20230321/ourmid/pngtree-artificial-intelligence-blue-illustration-png-image_6654955.png",
    "https://static.thenounproject.com/png/5553355-200.png",
    "https://static.vecteezy.com/system/resources/previews/047/073/067/non_2x/ninja-face-black-stencil-iconic-design-for-mysterious-projects-ai-generated-free-png.png",
    "https://png.pngtree.com/png-clipart/20231003/original/pngtree-alien-png-with-ai-generated-png-image_13244992.png",
  ];

  return (
    <div className="mt-2 flex flex-col justify-center items-center">
      <div className=" mt-2 text-stone-600 inline-flex text-center gap-2 bg-white px-9 py-1 rounded-full border border-neutral-700">
        <p className="text-xs mt-[.9%]">TEXT TO IMAGE CONVERSION! </p>
        <FaStar className="size-5" />
      </div>

      <h1 className="text-8xl font-semibold max-w-[850px] mx-auto mt-10 text-center">
        Turn any text to <span className="text-blue-500">image</span>, in
        seconds.
      </h1>

      <p className="text-center max-w-xl mx-auto mt-6">
        Unleash your creative potential with the power of{" "}
        AI! Transform your
        imagination into stunning visual art within seconds. Simply type your
        idea, and let the magic Unfold before your eyes—bringing your visions to
        life like never before.
      </p>

      <button className="text-white bg-black w-auto mt-6 px-12 py-2 flex items-center gap-4 rounded-full hover:scale-105 transition-all duration-500">
        Generate Images
        <GiStarSwirl className="size-9" />
      </button>

      <div className="broder-2 flex items-center justify-between  ">
        {imagesArray.map((item, index) => (
          <img key={index} src={item} alt={``} className="w-32 h-32 m-7 " />
        ))}
      </div>
      <p className="mt-1 text-sm font-light">Generated images from IMGGEN.. platform </p>
    </div>
  );
};

export default Header;

// 1 12
