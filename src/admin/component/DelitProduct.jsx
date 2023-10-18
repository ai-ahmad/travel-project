import React, { useEffect, useState } from "react";
import Deshboard from "./Deshboard";
import axios from "axios";

const DelitProduct = () => {
  const URL = " http://localhost:3000/Product/";
  let [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get(URL).then((res) => {
      setProduct(res.data);
    });
  }, [URL]);
  function delitItem(e) {
    axios
      .delete(URL + e.id)
      .then((data) => console.log(data.data))
      .catch((error) => console.log(error));
  }

  return (
    <div className="flex gap-10 p-5">
      <Deshboard />
      <div className=" flex flex-col items-center ml-[300px]  gap-5">
        {product.map((item) => {
          return (
            <div
              key={item.id}
              className=" rounded-xl flex justify-between  items-center p-10 w-[1000px] bg-slate-800 h-[100px] text-white"
            >
              <div className="w-[200px]">
                <h2>{item.namesity}</h2>
              </div>
              <div>
                <img
                  src={item.img.img1}
                  className="w-[120px] h-[80px] rounded-md m-3"
                  alt=""
                />
              </div>
              <div className="w-[200px]">
                <button
                  className="font-bold bg-gray-700 max-w-[150px] rounded-lg w-full h-[40px]"
                  onClick={() => delitItem(item)}
                >
                  DELIT PRODUCT
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DelitProduct;
