import React from "react";
import { Carousel } from "react-responsive-carousel";

function fun3() {
  return (
    <div>
      <Carousel showThumbs={false}>
        <div className="flex ">
          <div className=" relative group overflow-hidden">
            <img
              src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-22092023-Trends-Avaasa-DNMX-Netplay-Upto70.jpg"
              alt=""
              className="transition-transform transform scale-100 group-hover:scale-105"
            />
          </div>

          <div className="  relative group overflow-hidden">
            <img
              src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-22092023-Trends-Budajeans-Fyrerose-Acai-Upto60.jpg"
              alt=""
              className="transition-transform transform scale-100 group-hover:scale-105"
            />
          </div>
          <div className=" relative group overflow-hidden">
            <img
              src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-22092023-Trends-Altheory-Outryt-Min50.jpg"
              alt=""
              className="transition-transform transform scale-100 group-hover:scale-105"
            />
          </div>
        </div>
        <div className="flex ">
          <div className=" relative group overflow-hidden">
            <img
              src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-22092023-Trends-Avaasa-Siyahi-Fusion-Upto70.jpg"
              alt=""
              className="transition-transform transform scale-100 group-hover:scale-105"
            />
          </div>
          <div className=" relative group overflow-hidden">
            <img
              src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-22092023-Trends-Yousta-Under999.jpg"
              alt=""
              className="transition-transform transform scale-100 group-hover:scale-105"
            />
          </div>
          <div className=" relative group overflow-hidden">
            <img
              src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-22092023-Trends-Performax-Leecooper-Menswear-4070.jpg"
              alt=""
              className="transition-transform transform scale-100 group-hover:scale-105"
            />
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default fun3;
