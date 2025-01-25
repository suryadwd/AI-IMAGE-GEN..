import React, { useContext, useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { TbLockPassword } from "react-icons/tb";
import { HiOutlineMail } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { AppContext } from "../context/AppContext";

const Login = () => {

  const [state, setState] = useState("Login")

  const {show, setShow} = useContext(AppContext)

  useEffect(() => {
   document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'visible';
    };
  },[show])

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/20 flex justify-center items-center">
      <form className="relative bg-white p-10 rounded-xl text-slate-500">
        <h1 className="text-center text-2xl text-neutral-700 font-medium">
          {state}
        </h1>
        <p className="font-light mt-2">
          Welcome back! Please fill you crenditials
        </p>

       {state != "Login" &&  <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-5">
          <FaUser />
          <input
            className="outline-none text-sm"
            type="text"
            placeholder="Full Name"
            required
          />
        </div>} 

        <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-5">
          <TbLockPassword />
          <input
            className="outline-none text-sm"
            type="email"
            placeholder="Email id"
            required
          />
        </div>

        <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-5">
          <HiOutlineMail />
          <input
            className="outline-none text-sm"
            type="password"
            placeholder="Password"
            required
          />
        </div>

        <p className="text-sm text-blue-600 my-4 cursor-pointer ml-4">
          Forgot password?
        </p>

        <button className="bg-blue-500 w-full text-white py-2 rounded-full">
          {state !== 'Login' ? "Create account" : "Login"}
        </button>

      { state === "Login" && <p className="mt-5 text-center">
        Don't have an account?{" "}
        <span className="text-blue-600 cursor-pointer"onClick={() => setState("Signup")}>Signup</span>
      </p>}

        { state !=="Login" && <p className="mt-5 text-center">
          Already have an account?{" "}
          <span className="text-blue-600 cursor-pointer" onClick={() => setState("Login")}>Login</span>
        </p>}

        <RxCross2 onClick={() => setShow(false)}  className="size-6 absolute top-3 right-3" />
      </form>
    </div>
  );
};

export default Login;
