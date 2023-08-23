import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./SiginSwiper.css";
// import required modules
import { Pagination } from "swiper/modules";
import Logo2 from "../../others/Logo/Logo";
import { ButtonCastom } from "../../others/buttons/button";

export default function SiginUp() {
  return (
    <div className="sigin flex justify-around">
      <div className="max-w-[500px] w-full flex flex-col gap-8 justify-center ">
        <div>
        <img src="Logo.png" alt="" />
        </div>

        <div>
          <h1 className="text-[40px] font-[600] font-serif">Login</h1>
          <p className="text-[16px] text-[#776b6b]">
            Login to access your Golobe account
          </p>
        </div>

        <form className="flex flex-col gap-6">
          <label className="flex flex-col relative">
            <span className="absolute top-[-15px] left-[10px] bg-[white] ">Email</span>
            <input type="email"  className="outline-none border-2 border-solid border-[#bdbcbf] rounded-lg p-2 max-w-[500px] w-full max-h-[56px] h-full"/>
          </label>
          <label className="flex flex-col relative">
            <span className="absolute top-[-15px] left-[10px] bg-[white] ">Password</span>
            <input type="password"  className="outline-none border-2 border-solid border-[#bdbcbf] rounded-lg p-2 max-w-[500px] w-full max-h-[56px] h-full"/>
          </label>
          <div className="flex justify-between ">
            <div className="flex gap-3 items-center">
              <input type="checkbox" className="w-[15px] rounded-lg h-[15px]"/>
              <span>Remember me</span>
            </div>
            <div>
              <p className="text-[16px] text-[#776b6b]">Forgot Password</p>
            </div>
          </div>
        </form>
        <div>
          <ButtonCastom
            text={"Login"}
            classes={
              "max-w-[512px] w-full max-h-[48px] rounded-lg h-full text-center bg-[#8DD3BB] p-2"
            }
            location={"/"}
          />
        </div>
        <div className="flex justify-center">
          <p>
            Don’t have an account?<a href="#" className="text-[#746161]"> Sign up</a>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-[35%] h-[1px] border-solid border-[1px] border-[#b9b2b2]"></div>
          <p className="text-[#736969]">Or login with</p>
          <div className="w-[35%] h-[1px] border-solid border-[1px] border-[#b9b2b2]"></div>
        </div>
        <div className="flex gap-[16px] items-center justify-around">
          <ButtonCastom
            text={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M24 12.0733C24 5.40546 18.6274 0 12 0C5.37262 0 0 5.40536 0 12.0733C0 18.0994 4.38825 23.0943 10.125 24V15.5633H7.07812V12.0733H10.125V9.41343C10.125 6.38755 11.9166 4.71615 14.6575 4.71615C15.9705 4.71615 17.3438 4.95195 17.3438 4.95195V7.92313H15.8306C14.3398 7.92313 13.875 8.85381 13.875 9.80864V12.0733H17.2031L16.6711 15.5633H13.875V24C19.6117 23.0943 24 18.0995 24 12.0733Z"
                  fill="#1877F2"
                />
              </svg>
            }
            classes={
              "max-w-[100px] p-2 flex justify-center items-center rounded-lg w-full max-h-[56px] h-full text-center border-2 border-solid border-[#8DD3BB]"
            }
            location={"https://www.facebook.com/"}
          />
          <ButtonCastom
            text={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
                  fill="#FFC107"
                />
                <path
                  d="M3.15234 7.3455L6.43784 9.755C7.32684 7.554 9.47984 6 11.9993 6C13.5288 6 14.9203 6.577 15.9798 7.5195L18.8083 4.691C17.0223 3.0265 14.6333 2 11.9993 2C8.15834 2 4.82734 4.1685 3.15234 7.3455Z"
                  fill="#FF3D00"
                />
                <path
                  d="M12.0002 22C14.5832 22 16.9302 21.0115 18.7047 19.404L15.6097 16.785C14.5719 17.5742 13.3039 18.001 12.0002 18C9.39916 18 7.19066 16.3415 6.35866 14.027L3.09766 16.5395C4.75266 19.778 8.11366 22 12.0002 22Z"
                  fill="#4CAF50"
                />
                <path
                  d="M21.8055 10.0415H21V10H12V14H17.6515C17.2571 15.1082 16.5467 16.0766 15.608 16.7855L15.6095 16.7845L18.7045 19.4035C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
                  fill="#1976D2"
                />
              </svg>
            }
            classes={
              "max-w-[100px] p-2 flex justify-center items-center rounded-lg w-full max-h-[56px] h-full text-center border-2 border-solid border-[#8DD3BB]"
            }
            location={"https://mail.google.com/mail/u/0/#inbox"}
          />
          <ButtonCastom
            text={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M17.5172 12.5555C17.5078 10.957 18.232 9.75234 19.6945 8.86406C18.8766 7.69219 17.6391 7.04766 16.0078 6.92344C14.4633 6.80156 12.7734 7.82344 12.1547 7.82344C11.5008 7.82344 10.0055 6.96563 8.82891 6.96563C6.40078 7.00313 3.82031 8.90156 3.82031 12.7641C3.82031 13.9055 4.02891 15.0844 4.44609 16.2984C5.00391 17.8969 7.01484 21.8133 9.1125 21.75C10.2094 21.7242 10.9852 20.9719 12.4125 20.9719C13.7977 20.9719 14.5148 21.75 15.7383 21.75C17.8547 21.7195 19.6734 18.1594 20.2031 16.5563C17.3648 15.218 17.5172 12.6375 17.5172 12.5555ZM15.0539 5.40703C16.2422 3.99609 16.1344 2.71172 16.0992 2.25C15.0492 2.31094 13.8352 2.96484 13.1437 3.76875C12.382 4.63125 11.9344 5.69766 12.0305 6.9C13.1648 6.98672 14.2008 6.40313 15.0539 5.40703Z"
                  fill="black"
                />
              </svg>
            }
            classes={
              "max-w-[100px] p-2 flex justify-center items-center rounded-lg w-full max-h-[56px] h-full text-center border-2 border-solid border-[#8DD3BB]"
            }
            location={"https://mail.google.com/mail/u/0/#inbox"}
          />
        </div>
      </div>
      <div>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="/dataimg/sigin-ing.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/dataimg/sigin-ing.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/dataimg/sigin-ing.png" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
