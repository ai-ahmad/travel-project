import axios from "axios";
import React, { useState } from "react";

const API_TOKEN = "6363285774:AAHLUseSICab0QXBcgxCv-oy0c2PndY99QU";
const CHAT_ID = "-1001961085798";
const TELEGRAM_API = `https://api.telegram.org/bot${API_TOKEN}/sendMessage`;

const FormModal = () => {
  function sendMessage() {
    if (
      data.name.length > 0 &&
      data.surname.length > 0 &&
      data.mobilePhone.length > 0 &&
      data.passengerValue > 0
    ) {
      axios
        .post(TELEGRAM_API, {
          chat_id: CHAT_ID,
          text: `Client: ${data.name} \n Client Surname: ${data.surname} \n Client MobilePhone: ${data.mobilePhone} \n Passenger: ${data.passengerValue}`,
        })
        .then((response) => {
          console.log("Message sent successfully:", response.data);
          alert("We will contact you soon !");
          setData((data.name = ""));
        })
        .catch((error) => {
          console.error("Error sending message:", error);
        });
    } else {
      alert("Please enter correct");
    }

    setPassengersInput(0);
  }

  let [passengersInput, setPassengersInput] = useState(0);

  function counterPlus() {
    setPassengersInput(+passengersInput + 1);
    setData({ ...data, passengerValue: +passengersInput });
  }
  function counterMinus() {
    if (passengersInput === 0) {
      console.log("You can't go below 0");
    } else {
      setPassengersInput(passengersInput - 1);
      setData({ ...data, passengerValue: +passengersInput });
    }
  }

  let [data, setData] = useState({
    name: "",
    surname: "",
    mobilePhone: "",
    passengerValue: "",
  });
  console.log(data);

  return (
    <div
      className="relative z-10 "
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto flex justify-center  items-center">
        <form className="flex  flex-col justify-center bg-[#A5EBD3] p-12 rounded-lg">
          <label className="flex flex-col gap-2">
            <span className="font-bold">Enter your name</span>
            <input
              type="text"
              className="outline-none   rounded-md w-full p-1"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="font-bold">Enter your surname</span>
            <input
              value={data.surname}
              type="text"
              className="outline-none  rounded-md w-full p-1"
              onChange={(e) => setData({ ...data, surname: e.target.value })}
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="font-bold">Enter your telephone</span>
            <input
              value={data.mobilePhone}
              type="number"
              placeholder="+998"
              className="outline-none  rounded-md w-full p-1"
              onChange={(e) =>
                setData({ ...data, mobilePhone: e.target.value })
              }
            />
          </label>
          <label className="flex flex-col mt-2 mb-2 gap-2">
            <span className="font-bold">How many passenger</span>
            <div className="flex justify-center items-center gap-10">
              <button
                className="font-bold w-[30px] text-center text-white h-[30px] rounded-[50%] bg-slate-500  flex justify-center items-center"
                onClick={counterPlus}
                type="button"
              >
                +
              </button>
              <input
                type="number"
                className="outline-none  rounded-md w-20 p-1"
                value={passengersInput}
                onChange={(e) => {
                  setData({ ...data, passengerValue: +e.target.value });
                  setPassengersInput(e.target.value);
                }}
              />
              <button
                className="font-bold w-[30px] text-center text-white h-[30px] rounded-[100%] bg-slate-500  flex justify-center items-center"
                onClick={counterMinus}
                type="button"
              >
                -
              </button>
            </div>
          </label>
          <label className="flex justify-between items-center mt-2 h-16">
            <button
              type="button"
              className="w-[100px] h-[40px] bg-slate-500  rounded-lg text-white"
              onClick={sendMessage}
            >
              Submit
            </button>
            <button className="w-[100px]  h-[40px] bg-slate-500  rounded-lg text-white">
              Cancel
            </button>
          </label>
        </form>
      </div>
    </div>
  );
};

export default FormModal;
