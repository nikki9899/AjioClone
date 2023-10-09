import React from "react";

function HoverEffect({ src, alt }) {
  return (
    <div className="flex justify-center items-center transition-transform transform scale-100 hover:scale-105">
      <img src={src} alt={alt} />
    </div>
  );
}

export default HoverEffect;
