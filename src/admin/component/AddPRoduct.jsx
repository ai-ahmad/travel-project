import { useState } from "react";
import Deshboard from "./Deshboard";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const AddProduct = () => {
  const [img, setImg] = useState(""); // Initialize img state variable with an empty string

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    setImg(URL.createObjectURL(selectedFile));
    console.log(selectedFile);
  };

  let [data, setData] = useState({
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

  function postServer() {
    if (
      data.namesity.length > 0 &&
      data.img.img1.length > 0 &&
      data.img.img2.length > 0 &&
      data.img.img3.length > 0 &&
      data.description.length > 0 &&
      data.flights.length > 0 &&
      data.hotels.length > 0 &&
      data.resorts.length > 0
    ) {
      axios
        .post("http://localhost:3000/Product", data)
        .then((datares) => console.log("yes"))
        .catch((err) => console.log(err));
    } else {
      console.log("not value in input");
    }
  }

  return (
    <div className="flex gap-6">
      <Deshboard />
      <div className="flex flex-col justify-center h-screen items-center w-full">
        <form className="border-2 p-3  justify-center flex gap-1 rounded-xl items-center flex-col border-dotted w-[400px] h-[90%]">
          <label className="flex flex-col gap-2">
            <span>PRODUCT IMG 1</span>
            <input
              type="url"
              className="outline-none  border-2  rounded-md w-[300px] p-1"
              onChange={(e) =>
                setData({ ...data, img: { ...data.img, img1: e.target.value } })
              }
            />
          </label>

          <label className="flex flex-col gap-2">
            <span>PRODUCT IMG 2</span>
            <input
              type="url"
              className="outline-none  border-2  rounded-md w-[300px] p-1"
              onChange={(e) =>
                setData({ ...data, img: { ...data.img, img2: e.target.value } })
              }
            />
          </label>
          <label className="flex flex-col gap-2">
            <span>PRODUCT IMG 3</span>
            <input
              type="url"
              className="outline-none  border-2  rounded-md w-[300px] p-1"
              onChange={(e) =>
                setData({ ...data, img: { ...data.img, img3: e.target.value } })
              }
            />
          </label>
          <label className="flex flex-col gap-2">
            <span>PRODUCT NAME</span>
            <input
              type="text"
              className="outline-none  border-2  rounded-md w-[300px] p-1"
              onChange={(e) => setData({ ...data, namesity: e.target.value })}
            />
          </label>
          <label className="flex flex-col gap-2">
            <span>DESCRIPTION PRODUCT</span>
            <input
              type="text"
              className="outline-none  border-2  rounded-md w-[300px] h-[60px] p-1"
              onChange={(e) =>
                setData({ ...data, description: e.target.value })
              }
            />
          </label>
          <label className="flex flex-col gap-2">
            <span>FLIGHTS</span>
            <input
              type="text"
              className="outline-none  border-2  rounded-md w-[300px] p-1"
              onChange={(e) => setData({ ...data, flights: e.target.value })}
            />
          </label>
          <label className="flex flex-col gap-2">
            <span>HOTELS</span>
            <input
              type="text"
              className="outline-none  border-2  rounded-md w-[300px] p-1"
              onChange={(e) => setData({ ...data, hotels: e.target.value })}
            />
          </label>
          <label className="flex flex-col gap-2">
            <span>RESORTS</span>
            <input
              type="text"
              className="outline-none  border-2  rounded-md w-[300px] p-1"
              onChange={(e) => setData({ ...data, resorts: e.target.value })}
            />
          </label>
          <label>
            <button
              type="button"
              onClick={postServer}
              className="mt-2 bg-slate-500 w-[300px] h-[40px] text-white rounded-lg"
            >
              DONE
            </button>
          </label>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
