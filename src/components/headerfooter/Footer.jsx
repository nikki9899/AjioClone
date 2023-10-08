import React from 'react';

function Footer() {
  return (
    <footer className="footer bg-gray-800 text-gray-300 text-xs uppercase py-14 px-14 text-justify">
      <div className="row flex ">
        <div className=" footer-col w-full  " >
          <h4 className="text-lg ">Ajio</h4>
          <ul>
            <li><a href="#" className="text-white">Who We Are</a></li>
            <li><a href="#" className=" text-white ">Join Our Team</a></li>
            <li><a href="#" className="text-white ">Terms and Conditions</a></li>
            <li><a href="#" className=" text-white ">We respect your privacy</a></li>
          </ul>
        </div>
        <div className=" w-full " >
          <h4 className="text-lg  font-bold ">Help</h4>
          <ul>
            <li><a href="#" className="text-white text-sm  ">Track Your Order</a></li>
            <li><a href="#" className=" text-white ">Frequently Asked Questions</a></li>
    
          </ul>
        </div>
        <div className=" w-full  ">
          <h4 className="text-lg font-bold ">Shop by</h4>
          <ul>
            <li><a href="#" className="text-white">Men</a></li>
            <li><a href="#" className="text-white">Women</a></li>
         
          </ul>
        </div>
        <div className=" w-full ">
          <h4 className="text-lg ">Follow us</h4>
          <ul>
            <li><a href="#" className="text-white">Facebook</a></li>
            <li><a href="#" className="text-white">Instagram=AJIOlife</a></li>
         
          </ul>
        </div>
      </div>
    
    </footer>
  );
}

export default Footer;



