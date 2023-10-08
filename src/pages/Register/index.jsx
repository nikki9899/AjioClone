import React from "react";
import Link from "next/link";

function RegisterPage() {
  return (
    
    <div className="bg-white min-h-screen flex items-center justify-center">
  
      <div className="mx-auto mt-12 w-96 bg-white shadow-2xl p-4 overflow-hidden">
        <div className="w-88 mx-auto bg-white p-4">
          <h1 className="text-4xl text-black font-sans">Welcome to AJIO</h1>
          <div className="h-25 mt-10">
            <p className="text-lg text-gray-700 leading-tight font-sans">
              Join / Sign In using Email
            </p>
          </div>

          <br />
          <div className="w-72 mx-auto mb-4">
            <p className="text-base text-black font-sans mb-2">Enter Email*</p>
            <input
              type="text"
              className="w-full p-2 border-b border-black focus:outline-none"
            />
          </div>
          <div className="w-72 mx-auto mb-4">
            <p className="text-base text-black font-sans mb-2">
              Enter Password*
            </p>
            <input
              type="text"
              className="w-full p-2 border-b border-black focus:outline-none"
            />
          </div>
          <div className="w-72 mx-auto mb-4">
            <p className="text-base text-black font-sans mb-2">
              Confirm Password*
            </p>
            <input
              type="text"
              className="w-full p-2 border-b border-black focus:outline-none"
            />
          </div>
          <div className="mt-4">
            <Link href={"/"}><button className="bg-yellow-400 text-white w-36 h-10 focus:outline-none hover:bg-yellow-500">
              CONTINUE
            </button></Link>
          </div>
          <div className="flex mt-4 space-x-2.5 text-sm font-sans">
            <p className="text-gray-400">By Signing In, I agree to</p>
            <p className="text-blue-400 font-bold">Terms and Conditions.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
