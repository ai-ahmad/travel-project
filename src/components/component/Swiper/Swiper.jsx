import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";
import "swiper/css";
import "swiper/css/pagination";
import "./Swiper.css";
import { FreeMode, Pagination } from "swiper/modules";
import axios from "axios";

const StarIcon = () => (
  <span role="img" aria-label="star">
    ⭐
  </span>
);

const Tick = `
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 48 48">
    <path fill="#43A047" d="M40.6 12.1L17 35.7 7.4 26.1 4.6 29 17 41.3 43.4 14.9z"></path>
  </svg>
`;

const notAvailable = `
<svg fill="red" height="15" width="15" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 460.775 460.775" xml:space="preserve">
<path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55
	c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55
	c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505
	c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55
	l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719
	c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"/>
</svg>
`;

const SwiperComponent = () => {
  const { t } = useTranslation();
  const [data, setData] = useState([]);
  const URL = "http://localhost:3000/Card";

  useEffect(() => {
    axios.get(URL).then((response) => {
      setData(response.data);
    });
  }, [URL]);

  function renderStatusBadge(dataItem) {
    const { status } = dataItem;
    console.log(status);
    return (
      <div className="flex space-x-2">
        {status && status.hot && (
          <div className="p-2 px-5 bg-yellow-100 text-yellow-800 text-xs font-medium me-2 rounded uppercase dark:bg-yellow-700 dark:text-amber-400">
            Hot
          </div>
        )}
        {status && status.new && (
          <div className="p-2 px-5 bg-blue-100 text-blue-800 text-xs font-medium me-2 rounded uppercase dark:bg-blue-900  dark:text-blue-300">
            New
          </div>
        )}
        {status && status.sale && (
          <div className="p-2 px-5 bg-red-100 text-red-800 text-xs font-medium me-2 rounded uppercase dark:bg-red-900 dark:text-red-300">
            Sale
          </div>
        )}
      </div>
    );
  }

  function handlePayWithPayme(orderId, amount) {
    // Отправьте запрос на создание платежа с указанием orderId и amount
    axios
      .post("https://checkout.paycom.uz/654b5daf41a367e34fca3f6f", {
        orderId: orderId,
        amount: amount,
      })
      .then((response) => {
        // Получите URL для оплаты из ответа
        const paymentUrl = response.data.paymentUrl;

        // Перенаправьте пользователя на страницу оплаты
        window.location.href = paymentUrl;
      })
      .catch((error) => {
        console.error("Ошибка при создании платежа:", error);
      });
  }

  return (
    <div className="container relative left-[6%] mt-4 pr-[135px]">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {data.map((dataItem) => (
          <SwiperSlide
            key={dataItem.id}
            className="p-3 relative rounded-[20px]"
          >
            <div className="bg-white shadow-lg rounded-2xl p-3">
              <div className="relative overflow-hidden">
                <img
                  src={dataItem.img.img1}
                  alt=""
                  className="w-full h-44 object-cover rounded-lg"
                />

                <div className="absolute top-2 right-2  flex items-center gap-2">
                  {renderStatusBadge(dataItem)}
                </div>
                <div className="black absolute bottom-0 left-0 p-4 text-white w-full bg-emerald-900 bg-opacity-70 rounded-xl">
                  <p className="font-semibold text-2xl font-semibold">
                    {dataItem.country}
                  </p>
                  <p className="text-lg font-medium">{dataItem.travelcity}</p>
                </div>
              </div>
              <div className="px-6 py-3 font-medium text-sm">
                <div className="flex flex-col p-2 border-y-2 rounded-lg text-center my-1 mb-3">
                  <p className="text-lg">Travel time:</p>
                  <div className="flex items-center justify-between">
                    <p>Start: {dataItem.travelTimeStart}</p>
                    <p>End: {dataItem.travelTimeEnd}</p>
                  </div>
                </div>
                <div className="flex flex-wrap justify-between py-2">
                  <p className="flex items-center text-sm gap-1 capitalize">
                    Hotel name:
                    <span className="font-normal">{dataItem.hotel}</span>
                  </p>
                  <p className="flex items-center text-sm gap-1 capitalize">
                    Transport:
                    <span className="font-normal">{dataItem.transport}</span>
                  </p>
                </div>
                <div className="flex items-center">
                  <p>Hotel rating:</p>
                  {[...Array(parseInt(dataItem.rating))].map((_, index) => (
                    <StarIcon key={index} />
                  ))}
                </div>
                <div className="flex flex-wrap justify-between mt-4">
                  <span
                    className="flex items-center gap-2"
                    dangerouslySetInnerHTML={{
                      __html: dataItem.food.breakfast
                        ? `Breakfast: ${Tick}`
                        : `Breakfast: ${notAvailable}`,
                    }}
                  ></span>
                  <span
                    className="flex items-center gap-2"
                    dangerouslySetInnerHTML={{
                      __html: dataItem.food.lunch
                        ? `Lunch: ${Tick}`
                        : `Breakfast: ${notAvailable}`,
                    }}
                  ></span>
                  <span
                    className="flex items-center gap-2"
                    dangerouslySetInnerHTML={{
                      __html: dataItem.food.dinner
                        ? `Dinner: ${Tick}`
                        : `Breakfast: ${notAvailable}`,
                    }}
                  ></span>
                </div>
                <div className="py-2 border-t-2 mt-2">
                  <p className="text-lg flex gap-3 uppercase justify-between items-center">
                    <span>Price:</span>
                    <span className="inline-flex font-bold items-center rounded-md bg-amber-400 bg-opacity-80 px-2 py-1 text-lg text-slate-800 ring-1 ring-inset ring-yellow-600/50">
                      {dataItem.price}
                    </span>
                  </p>
                  <div className="btn flex items-center gap-5 mt-4 flex-wrap">
                    <form method="POST" action="https://checkout.paycom.uz">
                      {" "}
                      <input
                        type="hidden"
                        name="merchant"
                        value="654b5daf41a367e34fca3f6f"
                      />{" "}
                      <input type="hidden" name="amount" value="3400" />{" "}
                      <input
                        type="hidden"
                        name="account[Top-Trips]"
                        value="10"
                      />
                      <button
                        className="bg-emerald-600 rounded-lg py-2 px-4 flex-1 text-white h-14 text-lg hover:bg-emerald-300"
                        onClick={() =>
                          handlePayWithPayme(dataItem.id, dataItem.price)
                        }
                      >
                        <img
                          src="https://cdn.paycom.uz/documentation_assets/payme_01.png?target=_blank"
                          width="100%"
                          alt=""
                        />
                      </button>
                    </form>
                    <button className="bg-emerald-600 rounded-lg py-2 px-4 flex-1 text-white h-14 text-lg hover:bg-emerald-300">
                      Consultation
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
