import axios from "axios";
import { Modal } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FormModal from "../../others/FormModal/FormModal";

const CardPage = () => {
  const [product, setProduct] = useState([]);
  const [isMatch, setIsMatch] = useState(false);
  const [matchingProduct, setMatchingProduct] = useState(null);
  let [imgCount, setImg] = useState(1);
  let [modal, setModal] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:3000/Product")
      .then((response) => {
        setProduct(response.data); // Store the fetched data in state
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    const path = window.location.pathname;
    const foundProduct = product.find((item) => path === `/card/${item.id}`);
    setMatchingProduct(foundProduct);
    setIsMatch(!!foundProduct);
  }, [product]);

  return (
    <div>
      {isMatch ? (
        <div className="card w-full h-screen flex max-w-6xl mx-auto items-center gap-10">
          <div className="right w-2/4 my-10">
            {matchingProduct && (
              <img
                src={matchingProduct.img[`img${imgCount}`]}
                className="w-full rounded-xl"
                alt=""
              />
            )}
            <div className="image-group flex w-full justify-between mt-10">
              <img
                src={matchingProduct.img.img1}
                className="w-1/4 rounded-lg"
                alt=""
                onClick={() => setImg(1)}
              />
              <img
                src={matchingProduct.img.img2}
                className="w-1/4 rounded-lg"
                alt=""
                onClick={() => setImg(2)}
              />
              <img
                src={matchingProduct.img.img3}
                className="w-1/4 rounded-lg"
                alt=""
                onClick={() => setImg(3)}
              />
            </div>
          </div>
          <div className="left flex flex-col py-10 w-2/4 ">
            <p className="text-[#697b69] font-[700] mb-5">
              {matchingProduct && matchingProduct.namesity}
            </p>
            <ul className="flex gap-8">
              <li className="font-[700]">
                {matchingProduct && matchingProduct.flights}
              </li>
              <li className="list-disc font-[700]">
                {matchingProduct && matchingProduct.hotels}
              </li>
              <li className="list-disc font-[700]">
                {matchingProduct && matchingProduct.resorts}
              </li>
            </ul>
            <div className="description">
              <p className="text-sm text-gray-500 opacity-80 mt-8">
                {matchingProduct && matchingProduct.description}
              </p>
            </div>
            <div className="buttos mt-16 flex items-center gap-5">
              <Link
                to="/"
                className=" text-md min-w-[130px] font-semibold text-gray-800 p-4 bg-[#A5EBD3] rounded-lg"
              >
                HOME PAGES
              </Link>
              <button
                className=" text-md font-semibold min-w-[130px]  text-gray-800 p-4 bg-[#A5EBD3] rounded-lg"
                onClick={() => setModal(true)}
              >
                BUY
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p>false</p>
      )}

      {modal && <FormModal />}
    </div>
  );
};

export default CardPage;
