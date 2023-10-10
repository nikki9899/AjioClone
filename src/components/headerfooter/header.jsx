import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";

function Navbar() {
  const totalQuantity = useSelector((state) => state.wishlist.totalQuantity);
  return (
    <div className="  md:h-[100px] h-[100px]  w-full flex border-t-[3px] border-t-[rgb(47,66,84)] border-solid ">
      <div className="  h-16 w-1/4 border border-transparent ml-20 md:h-16 md:ml-20 ">
        <Link href={"/"}>
          <img
            className="h-full w-35 mt-5 ml-27md:ml-20 md:mr-[100px] "
            src="https://assets.ajio.com/static/img/Ajio-Logo.svg"
            alt=""
          />
        </Link>
      </div>
      <div className="h-full w-3/5 border border-transparent mx-4">
        <div className="h-1/2 w-full border border-transparent flex justify-end space-x-5 items-center hover:cursor-pointer">
          <Link href="/Register">
            <p className=" hidden md:flex text-xs text-gray-600 font-sans">
              Sign Up / Join AJIO
            </p>
          </Link>
          <Link href="/login">
            <p className=" hidden md:flex text-xs text-gray-600 font-sans">
              Sign In / Join AJIO
            </p>
          </Link>

          <p href="" className=" hidden md:flex text-xs text-gray-600 font-sans">
            Customer Care
          </p>
          <Link href="/">
            <p className=" hidden md:flex h-full bg-black text-white text-xs font-sans  mr-4 cursor-pointer">
              Visit AJIOLUXE
            </p>
          </Link>
        </div>
        <div className="h-1/2 w-full border border-transparent flex justify-between items-center font-sans text-sm text-gray-600 mt-1">
          
          <p className=" hidden md:flex  block hover:font-bold hover:cursor-pointer">MEN</p>
          <Link href={"/productpage"}>
            {" "}
            <p className=" hidden md:flex hover:font-bold hover:cursor-pointer">WOMEN</p>
          </Link>
          <p className="hidden md:flex hover:font-bold hover:cursor-pointer">KIDS</p>
          <p className=" hidden md:flex hover:font-bold hover:cursor-pointer">INDIE</p>
          <p className="hidden md:flex hover:font-bold hover:cursor-pointer">
            HOME AND KITCHEN
          </p>
          <input
            className="rounded-lg w-64 h-8 border-black"
            type="text"
            placeholder="Search AJIO"
          />
          <div className="flex relative ml-[10px]">
            <Link href={"/wishlist"}>
              <img
                className="h-8 w-8 cursor-pointer bg-white-500 text-white"
                src="https://assets.ajio.com/static/img/wishlistIcon.svg"
                alt=""
              />
            </Link>
            {totalQuantity > 0 && (
              <div className=" absolute -right-2 -top-3 bg-red-500 rounded-full text-center  py-1 px-2 text-white text-xs mr-[30px] font-semibold">
                {totalQuantity}
              </div>
            )}
            <img
              className=" h-8 w-8 cursor-pointer bg-white-500 text-white"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjHuCTCHiz7-sR9YwmlVHDZ0UXU-tcjDRIzmGlub9of64k0gsAJXe29kR-9Bpfj1f_YAg&usqp=CAU"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;