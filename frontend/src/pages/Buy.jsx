import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { motion } from "framer-motion";
import Login from "../components/Login"; // Import the Login component
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


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

  const { login, setShow ,currentUser, setCurrentUser } = useContext(AppContext);

  const navigate = useNavigate();

  const initPay = async (order) => {
    const options = {
      key: "rzp_test_TsPgXNRXVx6anD",
      amount: order.amount,
      currency: "INR",  
      name:"Credit amount",
      description: "Credits amount for you",  
      order_id: order.id,
      handler: async ({ razorpay_payment_id, razorpay_order_id, razorpay_signature }) => {
        try {
         
          const res = await axios.post(
            "http://localhost:7000/api/user/verify-pay",
            { razorpay_order_id, razorpay_payment_id, razorpay_signature },
            { withCredentials: true }
          );
      
          if (res.data.success) {
            toast.success("Credit Added");
            // Update currentUser state with the new balance
            setCurrentUser({
              ...currentUser,
              user: {
                ...currentUser.user,
                balance: currentUser.user.balance + parseInt(res.data.message.split(": ")[1]), // Extract and add the new credits
              },
            });
            navigate("/");
          }
        } catch (error) {
          console.log("Error verifying payment:", error);
        }
      }
      
    }

    const rzp = new window.Razorpay(options)
    rzp.open()    

  }


  const paymentRazorpay = async (planId) => {

    console.log("pay 5")

    try {
      if (!login) {
        setShow(true);
      } 
      
      const res = await axios.post("http://localhost:7000/api/user/pay", { planId },{
        withCredentials: true,
      });

      if(res.data.success){
        initPay(res.data.order)
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0.4, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="min-h-[60vh] text-center mt-4"
    >
      <button className="border border-gray-500 px-10 py-2 rounded-full mb-6">
        Our Plans
      </button>
      <h3 className="text-center text-3xl font-medium mb-6">Choose the plan</h3>

      <div className="flex flex-wrap justify-center gap-6 text-left">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white drop-shadow-lg border rounded-lg py-10 px-8 text-gray-500 hover:scale-105 transition-all duration-500"
          >
            <img src="nav.png" alt="" className="w-32 p-2 mb-5" />
            <p className="mt-2 mb-1 font-semibold ">{item.id}</p>
            <p className="text-lg">{item.desc}</p>
            <p className="mt-4">
              <span className="text-3xl font-medium">${item.price} </span>/{" "}
              {item.credits} credits
            </p>
            <button
              onClick={() => paymentRazorpay(item.id)}
              className="px-12 py-1 mt-5 text-white bg-gray-800 rounded-md"
            >
              {login ? "Purchase" : "Get Started"}
            </button>
          </div>
        ))}
      </div>

      {!login && <Login />} {/* Conditionally render the Login component */}
    </motion.div>
  );
};

export default Buy;
