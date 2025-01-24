import React, { useContext } from "react";
import {AppContext} from "../context/AppContext"
const Buy = () => {
  const data = [
    {
      id: "Basic",
      price: 10,
      credits: 100,
      desc: "Best for personal use.",
    },
    {
      id: "Advanced",
      price: 50,
      credits: 500,
      desc: "Best for business use.",
    },
    {
      id: "Business",
      price: 250,
      credits: 5000,
      desc: "Best for enterprise use.",
    },
  ];

  const {login} = useContext(AppContext)

  return (
    <div className="min-h-[60vh] text-center mt-4  ">
      <button className="border border-gray-500 px-10 py-2 rounded-full mb-6">
        Our Plans
      </button>
      <h3 className="text-center text-3xl font-medium mb-6">Choose the plan</h3>

      <div className="flex flex-wrap justify-center gap-6 text-left">
        {data.map((item, index) => (
          <div key={index} className="bg-white drop-shadow-lg border rounded-lg py-10 px-8 text-gray-500 hover:scale-105 transition-all duration-500" >
            <img src="nav.png" alt="" className="w-32 p-2 mb-5" />
            <p className="mt-2 mb-1 font-semibold ">{item.id}</p>
            <p className="text-lg">{item.desc}</p>
            <p className="mt-4"><span className="text-3xl font-medium">${item.price} </span>/ {item.credits} credits</p>
            <button className=" px-12 py-1 mt-5 text-white bg-gray-800 rounded-md">{login ? "Purchase" : "Get Started"}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Buy;
