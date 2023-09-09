import React, { useEffect, useState } from "react";
import Deshboard from "./Deshboard";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { data } from "autoprefixer";

const RanemeProduct = () => {
  const URL = " http://localhost:3000/Product/";
  let [product, setProduct] = useState([]);
  let [modal, setModal] = useState(false);
  let [information, setInformation] = useState("");

  let [newData, setNewData] = useState({
    id: uuidv4(),
    namesity: "",
    img: {
      img1: "",
      img2: "",
      img3: "",
    },
    description: "",
    flights: "",
    hotels: "",
    resorts: "",
  });

  function upDate() {
    console.log("yes");
    axios
      .put(`http://localhost:3000/Product/${information.id}`, newData)
      .then((res) => {
        console.log(res);
        setModal(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    axios.get(URL).then((res) => {
      setProduct(res.data);
    });
  }, [URL]);

  function openModal(e) {
    setModal(true);
    setInformation(e);
  }

  function closedModal() {
    setModal(false);
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
                  className="font-bold bg-gray-700 max-w-[180px] rounded-lg p-2 w-full h-[40px]"
                  onClick={() => openModal(item)}
                >
                  RENAME PRODUCT
                </button>
              </div>
            </div>
          );
        })}
        {modal && (
          <div
            className="relative z-10 "
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto flex justify-center  items-center">
              <form class="flex flex-col justify-center w-[500px] bg-[#A5EBD3] p-12 rounded-lg">
                <label class="flex flex-col gap-2">
                  <span class="font-bold">Enter your name city</span>
                  <input
                    type="text"
                    class="outline-none rounded-md w-full p-1"
                    onChange={(e) =>
                      setNewData({ ...newData, namesity: e.target.value })
                    }
                  />
                </label>
                <label class="flex flex-col gap-2">
                  <span class="font-bold">Enter your URL in Img 1</span>
                  <input
                    type="text"
                    class="outline-none rounded-md w-full p-1"
                    onChange={(e) =>
                      setNewData({
                        ...newData,
                        img: {
                          ...newData.img,
                          img1: e.target.value,
                        },
                      })
                    }
                  />
                </label>
                <label class="flex flex-col gap-2">
                  <span class="font-bold">Enter your URL in Img 2</span>
                  <input
                    type="text"
                    class="outline-none rounded-md w-full p-1"
                    onChange={(e) =>
                      setNewData({
                        ...newData,
                        img: {
                          ...newData.img,
                          img2: e.target.value,
                        },
                      })
                    }
                  />
                </label>
                <label class="flex flex-col gap-2">
                  <span class="font-bold">Enter your URL in Img 3</span>
                  <input
                    type="text"
                    class="outline-none rounded-md w-full p-1"
                    onChange={(e) =>
                      setNewData({
                        ...newData,
                        img: {
                          ...newData.img,
                          img3: e.target.value,
                        },
                      })
                    }
                  />
                </label>
                <label class="flex flex-col gap-2">
                  <span class="font-bold">Enter your description</span>
                  <input
                    type="text"
                    class="outline-none rounded-md w-full p-1"
                    onChange={(e) =>
                      setNewData({
                        ...newData,
                        description: e.target.value,
                      })
                    }
                  />
                </label>
                <label class="flex flex-col mt-2 mb-2 gap-2">
                  <span class="font-bold">How many hotels</span>
                  <input
                    type="text"
                    class="outline-none rounded-md w-full p-1"
                    onChange={(e) =>
                      setNewData({
                        ...newData,
                        flights: e.target.value,
                      })
                    }
                  />
                </label>
                <label class="flex flex-col mt-2 mb-2 gap-2">
                  <span class="font-bold">How many flights</span>
                  <input
                    type="text"
                    class="outline-none rounded-md w-full p-1"
                    onChange={(e) =>
                      setNewData({
                        ...newData,
                        flights: e.target.value,
                      })
                    }
                  />
                </label>
                <label class="flex flex-col mt-2 mb-2 gap-2">
                  <span class="font-bold">How many resorts</span>
                  <input
                    type="text"
                    class="outline-none rounded-md w-full p-1"
                    onChange={(e) =>
                      setNewData({
                        ...newData,
                        resorts: e.target.value,
                      })
                    }
                  />
                </label>
                <label class="flex justify-between items-center mt-2 h-16">
                  <button
                    type="button"
                    class="w-[100px] h-[40px] bg-slate-500 rounded-lg text-white"
                    onClick={upDate}
                  >
                    Submit
                  </button>
                  <button
                    onClick={closedModal}
                    class="w-[100px] h-[40px] bg-slate-500 rounded-lg text-white"
                  >
                    Cancel
                  </button>
                </label>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RanemeProduct;
