import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LayoutCard = () => {
  const URL = "http://localhost:3000/Product";
  const [card, setCard] = useState([]);

  useEffect(() => {
    axios.get(URL).then((response) => {
      setCard(response.data);
    });
  }, []);

  return (
    <div className="flex flex-wrap justify-center items-center gap-8">
      {card.map((item) => (
        <Link to={`/card/${item.id}`} key={item.id}>
          <div className="card shadow-md max-w-[389px] w-full max-h-[122px] h-full rounded-md flex items-center justify-center gap-6 p-3 relative">
            <div className="right">
              {item.img?.img1 && (
                <img
                  src={item.img.img1}
                  className="rounded-lg w-[123px] h-[87px]"
                  alt=""
                />
              )}
            </div>
            <div className="left flex flex-col gap-2">
              <p className="text-[#697b69] font-[700]">{item.namesity}</p>
              <ul className="flex gap-8">
                <li className="font-[700]">{item.flights}</li>
                <li className="list-disc font-[700]">{item.hotels}</li>
                <li className="list-disc font-[700]">{item.resorts}</li>
              </ul>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default LayoutCard;
