import React from "react";
import Navbar from "@/components/headerfooter/header";
import Sidebar from "./sidebar.jsx";
import PopularProducts from "@/components/organisms/productGrid.jsx";

function Products() {
  return (
    <div>
      <div className="shadow-2xl relative">
        <Navbar />
      </div>
      <div className=" absolute ">
        <Sidebar />
      </div>
      <div className="ml-10">
        <div className="flex justify-center">
          <h2 className="text-slate-500 text-lg font-style-italic ">Women's</h2>
        </div>
        <div className="mt-4 text-4xl flex justify-center">
          <h3 className="font-style-italic text-bold">Kurtas</h3>
        </div>
        <div className="mt-4  ml-52 text-sm  flex justify-center">
          <h3 className="font-style-italic text-bold">
            Ethnic elegance, a fusion of hues and a whirlwind of styles from
            much-loved ethnic wear brands – go ahead and explore all <br /> the
            women’s kurtas on AJIO! The collection comprises of all the latest
            trends – from asymmetric hems to traditional Ikat
            <br /> prints. +
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Products;
