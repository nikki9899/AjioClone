import React from 'react';
import Link from 'next/link';

function Navbar() {
  return (
    <div className="h-[100px]   w-full flex border-t-[3px] border-t-[rgb(47,66,84)] border-solid">
      <div className="h-16 w-1/4 border border-transparent ml-20">
        <img className="h-full w-35 mt-5 ml-27" src="https://assets.ajio.com/static/img/Ajio-Logo.svg" alt="" />
      </div>
      <div className="h-full w-3/5 border border-transparent mx-4">
        <div className="h-1/2 w-full border border-transparent flex justify-end space-x-5 items-center hover:cursor-pointer">
          <Link href="/login">
            <p className="text-xs text-gray-600 font-sans">Sign In / Join AJIO</p>
          </Link>
          <p href="" className="text-xs text-gray-600 font-sans">Customer Care</p>
          <Link href="/your-destination-page" >
            <p className="h-full bg-black text-white text-xs font-sans  mr-4 cursor-pointer">
              Visit AJIOLUXE
            </p>
          </Link>
        </div>
        <div className="h-1/2 w-full border border-transparent flex justify-between items-center font-sans text-sm text-gray-600 mt-1">
          <p className="hover:font-bold hover:cursor-pointer">MEN</p>
         <Link href={"/productpage"}> <p className="hover:font-bold hover:cursor-pointer">WOMEN</p></Link>
          <p className="hover:font-bold hover:cursor-pointer">KIDS</p>
          <p className="hover:font-bold hover:cursor-pointer">INDIE</p>
          <p className="hover:font-bold hover:cursor-pointer">HOME AND KITCHEN</p>
          <input className="rounded-lg w-64 h-8 border-black" type="text" placeholder="Search AJIO" />
          <div className="flex">
            <img className="h-8 w-8 cursor-pointer bg-white-500 text-white" src="https://assets.ajio.com/static/img/wishlistIcon.svg" alt="" />
            <img className="h-8 w-8 cursor-pointer bg-white-500 text-white"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjHuCTCHiz7-sR9YwmlVHDZ0UXU-tcjDRIzmGlub9of64k0gsAJXe29kR-9Bpfj1f_YAg&usqp=CAU" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;


