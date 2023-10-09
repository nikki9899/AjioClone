import React from "react";
import { Carousel } from "react-responsive-carousel";

function fun4() {
  return (
    <div>
      <Carousel showThumbs={false}>
        <div className="flex ">
          <div className=" relative group overflow-hidden">
            <img
              src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-22092023-CelebritySectionTiles-levis-min50.jpg"
              alt=""
              className="transition-transform transform scale-100 group-hover:scale-105"
            />
          </div>

          <div className="  relative group overflow-hidden">
            <img
              src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-22092023-CelebritySectionTiles1-arrow-upto50.jpg"
              alt=""
              className="transition-transform transform scale-100 group-hover:scale-105"
            />
          </div>
          <div className=" relative group overflow-hidden">
            <img
              src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-22092023-CelebritySectionTiles-puma-min50.jpg"
              alt=""
              className="transition-transform transform scale-100 group-hover:scale-105"
            />
          </div>
        </div>
        <div className="flex ">
          <div className=" relative group overflow-hidden">
            <img
              src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-22092023-CelebritySectionTiles-adidas-4060.jpg"
              alt=""
              className="transition-transform transform scale-100 group-hover:scale-105"
            />
          </div>
          <div className=" relative group overflow-hidden">
            <img
              src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-22092023-CelebritySectionTiles-tigc-min60.jpg"
              alt=""
              className="transition-transform transform scale-100 group-hover:scale-105"
            />
          </div>
          <div className=" relative group overflow-hidden">
            <img
              src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-22092023-CelebritySectionTiles-johnplayers-upto50.jpg"
              alt=""
              className="transition-transform transform scale-100 group-hover:scale-105"
            />
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default fun4;
