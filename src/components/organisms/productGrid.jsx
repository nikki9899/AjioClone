import React, { useEffect, useState } from "react";
import PopularCard from "@/components/popularCard";


const PopularProducts = () => {
  const [resultData, setResultData] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch(
          "https://backend-liard-eight.vercel.app/api/productss",
          { cache: "no-store" }
        );
        const data = await response.json();
        console.log(data.result);
        if (data.success) {
          setResultData(data.result);
        } else {
          setResultData([]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setResultData([]);
      }
    };

    getProducts();
  }, []);

  return (
    <div>
      <div className="ml-[280px] grid grid-cols-3">
        {resultData.map(({ _id, name, type, price, src }) => (
          <div key={_id} className="">
            <PopularCard
              productTitle={name}
              productType={type}
              productPrice={price}
              productImage={src}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
