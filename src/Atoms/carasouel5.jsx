import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import CarouselWithTimer from "../components/resuablecomponent/timer.jsx"; // Import the reusable component

function CSR5() {
  const images = [
    {
      src: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-05101023-DailyM-z8-vanheusen.jpg",
      alt: "Image 1",
    },
    {
      src: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-05101023-DailyM-z8-crocs.jpg",
      alt: "Image 2",
    },
    {
      src: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-05101023-DailyM-z8-wrangler.jpg",
      alt: "Image 3",
    },
  ];

  return (
    <div>
      <CarouselWithTimer images={images} interval={3000} />
    </div>
  );
}

export default CSR5;
