import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles

import CarouselWithTimer from "../components/resuablecomponent/timer.jsx";

function CSR2() {
  const images = [
    {
      src: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-05102023-Dailybanner-5-Z7-Bullmer-Ausk-Starting199.jpg",
      alt: "Image 1",
    },
    {
      src: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-05102023-Dailybanner-2-Z7-USPA-Arrow-Flat40.jpg",
      alt: "Image 2",
    },
    {
      src: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-05102023-Dailybanner-2-Z7-USPA-Arrow-Flat40.jpg",
      alt: "Image 3",
    },
    {
      src: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-05102023-Dailybanner-4-Z7-Nike-Adidas-Upto45.jpg",
      alt: "Image4",
    },
  ];

  return (
    <div>
      <CarouselWithTimer images={images} interval={3000} />
    </div>
  );
}

export default CSR2;
