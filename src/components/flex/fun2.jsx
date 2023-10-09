import React from "react";
import { Carousel } from "react-responsive-carousel";

function fun2() {
  return (
    <div>
      <Carousel showThumbs={false}>
        <div className="flex ">
          <div className=" relative group overflow-hidden">
            <img
              src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-22092023-Bestsellers-1-Mens-Upto80.jpg"
              alt=""
              className="transition-transform transform scale-100 group-hover:scale-105"
            />
          </div>

          <div className="  relative group overflow-hidden">
            <img
              src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-22092023-Bestsellers-2-WomenWesternwear-Upto80.jpg"
              alt=""
              className="transition-transform transform scale-100 group-hover:scale-105"
            />
          </div>
          <div className=" relative group overflow-hidden">
            <img
              src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-22092023-Bestsellers-3-WomenEthnicwear-Starting249.jpg"
              alt=""
              className="transition-transform transform scale-100 group-hover:scale-105"
            />
          </div>
        </div>
        <div className="flex ">
          <div className=" relative group overflow-hidden">
            <img
              src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-22092023-Bestsellers-4-TrendingFootwear-Upto70.jpg"
              alt=""
              className="transition-transform transform scale-100 group-hover:scale-105"
            />
          </div>
          <div className=" relative group overflow-hidden">
            <img
              src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-22092023-Bestsellers-5-CuteKidswear-Starting249.jpg"
              alt=""
              className="transition-transform transform scale-100 group-hover:scale-105"
            />
          </div>
          <div className=" relative group overflow-hidden">
            <img
              src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-22092023-Bestsellers-6-Accessories-Upto80.jpg"
              alt=""
              className="transition-transform transform scale-100 group-hover:scale-105"
            />
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default fun2;
