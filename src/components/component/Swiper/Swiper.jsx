import React, { useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./Swiper.css";
import { FreeMode, Pagination } from "swiper/modules";
import { ButtonCastom } from "../../others/buttons/button";
import IconPack from "../../others/Icons/Icons";
import axios from "axios";
// import required modules

const SwiperComponent = () => {
  const [data, setData] = useState([]);
  const URL = "http://localhost:3000/Card";
  useEffect(() => {
    axios.get(URL).then((data) => setData(data.data));
  }, [URL]);

  return (
    <div className="container relative left-[6%] mt-4  pr-[135px] ">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper "
      >
        {data.map((item) => (
          <SwiperSlide key={item.id} className="p-3 ">
            <div className="card-wrapper max-w-[425px] p-6 w-full max-h-[584px] h-full rounded-md shadow-md  bg-[white]">
              <div className="title flex flex-col gap-2">
                <h2 className="text-[24px] font-[500]">{item.title}</h2>
                <p className="text-[12px]   w-full ]">{item.about}</p>
                <small className="font-[700] text-right">{item.vivemore}</small>
              </div>
              <div className="starts flex gap-3">
                <IconPack name={"fa-start"} fill={"blue"} size={"24px"} />
                <IconPack name={"fa-start"} fill={"blue"} size={"24px"} />
                <IconPack name={"fa-start"} fill={"blue"} size={"24px"} />
                <IconPack name={"fa-start"} fill={"blue"} size={"24px"} />
                <IconPack name={"fa-start"} fill={"blue"} size={"24px"} />
              </div>

              <div className="mt-3">
                <h6 className="font-[630] mb-2">{item.name}</h6>
                <p className="text-[14px] text-[#999090] mb-2">{item.toname}</p>
                <div className="icon flex gap-2 items-center">
                  <IconPack name={"fa-google"} fill={"blue"} size={"24px"} />
                  <span className="text-[#999090] text-[14px]">Google</span>
                </div>
              </div>
              <div className="image mt-3">
                <img
                  src={item.img}
                  alt=""
                  className="max-h-[200px] w-full h-full rounded-lg"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
