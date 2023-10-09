import React from "react";
import HoverEffect from "@/imageline/HoverEffect.js";

function Line3() {
  const images = [
    {
      src: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-22092023-DiscoverOnlineStores-10-UpcomingBrands.jpg",
      alt: "Image 1",
    },
    {
      src: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-22092023-DiscoverOnlineStores-11-Wedding.jpg",
      alt: "Image 2",
    },
    {
      src: "https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-22092023-DiscoverOnlineStores-12-Watches.jpg",
      alt: "Image 3",
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

export default Line3;
