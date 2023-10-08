import React, { useEffect, useState } from "react";
import PopularCard from "@/components/popularCard";
import { popularProductsData } from "@/mockData/productData";

const PopularProducts = () => {
  const [resultData, setResultData] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/productss", { cache: "no-store" });
        const data = await response.json();
        console.log(data);
        if (data.success) {
          setResultData(data.results);
        } else {
          setResultData([]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setResultData([]); // Handle error by setting an empty array
      }
    };

    getProducts();
  }, []); // Empty dependency array to fetch data once when the component mounts

  return (
    <div >
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





