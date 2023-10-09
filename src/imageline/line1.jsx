import React from "react";
import HoverEffect from "@/imageline/HoverEffect.js";

function Line1() {
  const images = [
    {
      src: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-22092023-DiscoverOnlineStores-2-Trends.jpg",
      alt: "Image 1",
    },
    {
      src: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-22092023-DiscoverOnlineStores-3-Max.jpg",
      alt: "Image 2",
    },
    {
      src: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-22092023-DiscoverOnlineStores-4-Westernwear.jpg",
      alt: "Image 3",
    },
    {
      src: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-22092023-DiscoverOnlineStores-5-InternationalBrands.jpg",
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

export default Line1;
