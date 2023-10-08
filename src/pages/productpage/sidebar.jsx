import React from 'react';

function Sidebar() {
  return (
    <div className="mobile-filter w-70">
      <div>
        <h4 className="font-semibold text-xl text-lg">Refine By</h4>
      </div>
      <div className="ml-3">
        <h6 className="font-bold">- Gender</h6>
        
        <form>
          
          <div className=" h-10 mx-2.5">
            <input type="checkbox" className="womenFilter" />
            <label htmlFor="womenFilter">Women Styles(40,863)</label>
          </div>
          <hr />
          
        </form>
      </div>
      <div className="py-2 border-bottom ml-3">
        <h6 className="font-bold">Category</h6>
       
        <form >
          <div className=" mx-2.5 ">
            <input type="checkbox" className="shirtFilter" />
            <label htmlFor="shirtFilter">Shirts(3000)</label>
          </div>
          <div className=" mx-2.5">
            <input type="checkbox" className="tshirtFilter" />
            <label htmlFor="tshirtFilter">T-Shirts(12,453)</label>
          </div>
          <div className=" mx-2.5">
            <input type="checkbox" className="jacketFilter" />
            <label htmlFor="jacketFilter">Jackets(500)</label>
          </div>
          <div className=" mx-2.5">
            <input type="checkbox" className="trouserFilter" />
            <label htmlFor="trouserFilter">Trousers(863)</label>
          </div>
          <div className=" mx-2.5">
            <input type="checkbox" className="shortsFilter" />
            <label htmlFor="shortsFilter">Shorts(4589)</label>
          </div>
          <div className=" mx-2.5 ">
            <input type="checkbox" className="topsFilter" />
            <label htmlFor="topsFilter">Tops(3453)</label>
          </div>
          <div className=" mx-2.5">
            <input type="checkbox" className="kurtasFilter" />
            <label htmlFor="kurtasFilter">Kurtas(4545)</label>
          </div>
          <div className=" mx-2.5  h-10">
            <input type="checkbox" className="sareeFilter" />
            <label htmlFor="sareeFilter">Saree(8889)</label>
          </div>
        </form>
      </div>
      <div className="h-10 ml-3 ">
      <hr/>
      <p className="= font-bold">+ Price</p>
      </div>
      <hr />
      <div className="h-10 ml-3" >
      <hr/>
      <p className="= font-bold">+ Brands</p>
      </div>
      <hr />
      <div className="h-10 ml-3">
      <hr/>
      <p className="= font-bold">+ Occasion</p>
      </div>
      <hr />
      <div className="h-10 ml-3">
      <hr/>
      <p className="= font-bold">+ Discount</p>
      </div>
      <hr />
      <div className="h-10 ml-3">
      <hr/>
      <p className="= font-bold">+ Colors</p>
      </div>
      <hr />
      <div className="h-10 ml-3">
      <hr/>
      <p className="= font-bold">+ Size & Fit</p>
      </div>
      <hr />
    </div>
  );
}

export default Sidebar;
