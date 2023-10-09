import React from "react";
import { Carousel } from "react-responsive-carousel";

function fun1() {
  return (
    <div>
      <Carousel showThumbs={false}>
        <div className="flex ">
          <div className=" relative group overflow-hidden">
            <img
              src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-22092023-BigTicketBrands-M&S-Upto70.jpg"
              alt=""
              className="transition-transform transform scale-100 group-hover:scale-105"
            />
          </div>

          <div className="  relative group overflow-hidden">
            <img
              src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-22092023-TopBrandsTile-Leewrangler-min50.jpg"
              alt=""
              className="transition-transform transform scale-100 group-hover:scale-105"
            />
          </div>
          <div className=" relative group overflow-hidden">
            <img
              src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-22092023-BigTicketBrands-GAP-Upto50.jpg"
              alt=""
              className="transition-transform transform scale-100 group-hover:scale-105"
            />
          </div>
          <div className=" relative group overflow-hidden">
            <img
              src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-22092023-BigTicketBrands-Snitch-Min60.jpg"
              alt=""
              className="transition-transform transform scale-100 group-hover:scale-105"
            />
          </div>
        </div>
        <div className="flex ">
          <div className=" relative group overflow-hidden">
            <img
              src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-22092023-BigTicketBrands-Styli-Upto60.jpg"
              alt=""
              className="transition-transform transform scale-100 group-hover:scale-105"
            />
          </div>
          <div className=" relative group overflow-hidden">
            <img
              src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-22092023-BigTicketBrands-performax-upto50.jpg"
              alt=""
              className="transition-transform transform scale-100 group-hover:scale-105"
            />
          </div>
          <div className=" relative group overflow-hidden">
            <img
              src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-22092023-BigTicketBrands-Rangita_Min50.jpg"
              alt=""
              className="transition-transform transform scale-100 group-hover:scale-105"
            />
          </div>
          <div className=" relative group overflow-hidden">
            <img
              src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-22092023-BigTicketBrands-DNMX-Superdry-upto50%20(1).jpg"
              alt=""
              className="transition-transform transform scale-100 group-hover:scale-105"
            />
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default fun1;
