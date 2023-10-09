import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "@/components/redux/wishListSlice";
import Navbar from "@/components/headerfooter/header";

function WishList() {
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);
  const dispatch = useDispatch();
  console.log(wishlistItems)

  const handleRemoveFromWishlist = (itemId) => {
    dispatch(removeFromWishlist(itemId));
    
  };

  return (
    <div className=" flex flex-wrap justify-center">
      <Navbar />
      {wishlistItems.length === 0 ? (
        <p className="flex text-xl py-44 justify-center">0 Item in wishlist</p>
      ) : (
        <div>
          {wishlistItems.map((item) => (
            <div key={item._id} className="mt-20 w-80 mb-4 ml-5 p-4 border  ">
              <div className="bg-slate-300 p-10">
                <div className="flex items-center justify-center">
                  <img
                    src={item.productImage}
                    alt={item.productTitle}
                    className="h-50"
                  />
                </div>
                <div className="text-center mt-2">
                  <span className="text-xl font-semibold">
                    {item.productTitle}
                  </span>
                  <span className="text-blue-500 text-lg font-semibold block mt-2">
                    {item.productPrice}
                  </span>
                  <span className="text-gray-500 text-sm">
                    {item.productType}
                  </span>
                </div>
                <div className="flex justify-center">
                  <button
                    className="text-black mt-2 text-sm py-2 px-4 border-blue-600 border-2 rounded-full text-center"
                    onClick={() => handleRemoveFromWishlist(item.productType)} // Pass the item._id to the handler
                  >
                    Remove from Wishlist
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default WishList;
