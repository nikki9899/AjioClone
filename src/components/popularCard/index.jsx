import React, { useState } from "react";

const PopularCard = ({ productTitle, productPrice, productType, productImage }) => {
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleButtonClick = () => {
    setButtonClicked(!buttonClicked);
  };

  const buttonStyle = {
    backgroundColor: buttonClicked ? "Red" : "white",
    color: buttonClicked ? "white" : "black",
    border: buttonClicked ? "none" : "2px solid blue",
  };

  return (
    <div className="w-70 mb-4 ml-[5px] p-4 border ">
      <div className="bg-slate-300 p-10">
        <div className="flex items-center justify-center ">
          <img src={productImage} alt={productTitle} className="h-50 " />
        </div>
        <div className="text-center mt-2">
          <span className="text-xl font-semibold">{productTitle}</span>
          <span className="text-blue-500 text-lg font-semibold block mt-2">{productPrice}</span>
          <span className="text-gray-500 text-sm">{productType}</span>
        </div>
        <div className="flex justify-center">
          <button
            className="text-black mt-2 text-sm py-2 px-4 border-blue-600 border-2 rounded-full text-center"
            style={buttonStyle}
            onClick={handleButtonClick}
          >
            {buttonClicked ? "Added to Wishlist" : "Add to Wishlist"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopularCard;





