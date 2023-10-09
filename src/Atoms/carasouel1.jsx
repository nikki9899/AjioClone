import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import CarouselWithTimer from "../components/resuablecomponent/timer.jsx"; // Import the reusable component

function CSR1() {
  const images = [
    {
      src: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-03102023-MainBannerDailyChanging-Z1-P1-Prebuzz-5090r.gif",
      alt: "Image 1",
    },
    {
      src: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-04102023-MainBannerDailyChanging-Z1-P3-NikeCrocs-Min35.jpg",
      alt: "Image 2",
    },
    {
      src: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-04102023-MainBannerDailyChanging-Z1-P4-portico-upto50.jpg",
      alt: "Image 3",
    },
    {
      src: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-04102023-MainBannerDailyChanging-Z1-P7-AllenSollyLouisPhilippe-flat40.jpg",
      alt: "Image 4",
    },
  ];

  return (
    <div>
      <CarouselWithTimer images={images} interval={3000} />
    </div>
  );
}

export default CSR1;
