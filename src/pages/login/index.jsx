import React from "react";
import Link from "next/link";
import Navbar from "@/components/headerfooter/header";
import Footer from "@/components/headerfooter/Footer";
function Signup() {
  return (
    <div>
    <Navbar/>
    <div className=" bg-white  min-h-screen items-center justify-center flex w-full">
      <div className="  w-96 bg-white shadow-2xl p-4 overflow-hidden">
        <h1 className="font-Assistant  text-2xl font-semibold mt-4 justify-center flex mb-6">
          Sign Up
        </h1>
        <form>
          <div className="justify-center flex">
            <input
              className="border border-gray-300 text-sm py-2 w-80 leading-6 text-gray-700"
              type="email"
              id="exampleInputEmail"
              placeholder="Enter Your Email"
              required
            />
          </div>
          <div className="justify-center flex mt-4">
            <input
              className="border border-gray-300 text-sm py-2 w-80 leading-6 text-gray-700"
              type="password"
              id="exampleInputPassword"
              placeholder="Enter Your Password"
              required
            />
          </div>
          <div className="justify-center flex">
           <Link href={"/"}> <button
              type="submit"
              className="cursor-pointer mt-2 bg-yellow-400 w-44 text-center rounded py-3 px-4 text-white font-semibold text-base"
            >
              Login
            </button></Link>
          </div>
          <p className="py-3 text-sm text-stone-400 flex justify-center">
            Do not have an account?{" "}
            <Link href={"/Register"}><button className="text-blue-400 font-bold">Continue</button></Link>
          </p>
        </form>
       
      </div>
    </div>
    <div><Footer/></div>
   
    </div>
  );
}

export default Signup;
