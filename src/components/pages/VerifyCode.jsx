import React, { useContext, useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Logo2 from "../others/Logo/Logo";
import { ButtonCastom } from "../others/buttons/button";
import axios from "axios";
import { useAuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

export default function VerifyCode() {
  const { login } = useAuthContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSignUp = async () => {
    try {
      const response = await axios.get("http://localhost:3000/Accounts");
      console.log(response);
      const users = response.data;
      const user = users.find(
        (u) => u.email === email && u.password === password
      );

      if (user) {
        login(user, rememberMe);
        if (user.admin) {
          window.location.href = "/dashboard/addProduct";
        } else {
          window.location.href = "/";
        }
      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className="verify flex justify-around items-center h-screen">
        <div className="w-full flex     justify-center flex-[1] items-center">
          <div className="flex flex-col max-w-[500px] gap-8 w-screen">
            <div>
              <img src="Logo.png" alt="" />
            </div>

            <div>
              <Link to={"/login"}>Back to login</Link>
              <h1 className="text-[40px] font-[600]">Verify code</h1>
              <p className="text-[16px] text-[#776b6b]">
                An authentication code has been sent to your email.
              </p>
            </div>

            <form className="flex flex-col gap-6">
              <label className="flex flex-col relative">
                <span className="absolute top-[-15px] left-[10px] bg-[white] ">
                  Enter Code
                </span>
                <input
                  type="email"
                  className="outline-none border-2 border-solid border-[#bdbcbf] rounded-lg p-2 max-w-[500px] w-full max-h-[56px] h-full"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
            </form>
            <div>
              <button
                className="max-w-[512px] w-full max-h-[48px] rounded-lg h-full
          text-center bg-[#8DD3BB] p-2 font-semibold"
                onClick={handleSignUp}
              >
                Verify
              </button>
            </div>
          </div>
        </div>
        <div className="flex-[1]">
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            spaceBetween={30}
            modules={[Pagination]}
            className="mySwiper w-full"
          >
            <SwiperSlide className="w-full">
              <img src="/dataimg/sigin-ing.png" alt="" className="w-full" />
            </SwiperSlide>
            <SwiperSlide className="w-full">
              <img src="/dataimg/sigin-ing.png" alt="" className="w-full" />
            </SwiperSlide>
            <SwiperSlide className="w-full">
              <img src="/dataimg/sigin-ing.png" alt="" className="w-full" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
