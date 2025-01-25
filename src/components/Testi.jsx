import React from "react";
import { motion } from "framer-motion";

const Testi = () => {

  const data = [
    {
      image:
        "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNi0zOTcucG5n.png",
      name: "Rishi",
      role: "Data Analysis",
      stars: 5,
      text: "I've been using IMGGEN.. for nearly teo years, primarly for Instagram, and it has been incredibly user-friendly, making my work much easier",
    },
    {
      image:
        "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNS0zODUucG5n.png",
      name: "Kushi",
      role: "Frontend Enginnear",
      stars: 4,
      text: "IMGGEN has truly transformed the way I create visuals for social media. The interface is seamless, and  features are both powerful and intuitive.",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhGJPxvhV4u_WpRUlvawm9YpDkbtL0d8D2FlZ6HgC5JcoeHfqR-FmG0eWyeLfbATOv2EU&usqp=CAU",
      name: "Akku",
      role: "Backend Enginnear",
      stars: 5,
      text: "As a backend developer, I appreciate IMGGEN works with APIs and supports automation. It’s reliable, efficient our image processing tasks significantly!",
    },
  ];

  return (
    <motion.div
    initial = {{opacity:0.4, y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1, y:0}}
    viewport={{once:true}}
    className="flex flex-col items-center justify-center my-20 p-6">
      <h1 className="text-3xl font-semibold">Customer testimonials</h1>
      <p className="text-gray-500 mb-8">What Our Users Are Saying</p>
    
      <div className="flex flex-wrap gap-6">
        {
          data.map( (item, index) => (
            <div key={index} className="bg-white/20 p-10 rounded-lg shadow-lg border w-80 m-auto cursor-pointer hover:scale-105 transition-all">
                <div>
                  <img src={item.image} alt=""  className="rounded-full w-14"/>
                  <h2 className="text-xl font-semibold mt-2">{item.name}</h2>
                  <h2 className="text-gray-500 mb-2">{item.role}</h2>
                  <div className="flex mb-4">
                    {
                      Array(5).fill(0).map((_, i) => (
                        <span key={i} className="text-grey-500">
                          {i < item.stars ? '★' : '☆'}
                        </span>
                      ))
                    }
                  </div>
                  <p className=" text-center text-sm text-gray-700">{item.text}</p>
                </div>
            </div>
           ) )
        }
      </div>
    </motion.div>
  );
};

export default Testi;
