import React from "react";
import HoverEffect from "@/imageline/HoverEffect.js";

function Line2() {
  const images = [
    {
      src: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-22092023-DiscoverOnlineStores-6-Accessories.jpg",
      alt: "Image 1",
    },
    {
      src: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-22092023-DiscoverOnlineStores-7-Home.jpg",
      alt: "Image 2",
    },
    {
      src: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-22092023-DiscoverOnlineStores-8-Sportswear.jpg",
      alt: "Image 3",
    },
    {
      src: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-22092023-DiscoverOnlineStores-9-Snekerhood.jpg",
      alt: "Image 4",
    },
  ];

  return (
    <div className="flex">
      {images.map((image, index) => (
        <HoverEffect key={index} src={image.src} alt={image.alt} />
      ))}
    </div>
  );
}

export default Line2;
