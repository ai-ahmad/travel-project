import React from "react";
import AirplaneSVG from "./icon/airplane.svg";
import BadSVG from "./icon/bad.svg";
import BlackAirplaneSVG from "./icon/blackairplane.svg";
import BlackBad from "./icon/badblack.svg";
import Telegram from "./icon/telegram.svg";
import Plus from "./icon/plus.svg";
import Star from "./icon/star.svg";
import Google from "./icon/google.svg";
import Fecebock from "./icon/fecebock.svg";
import Twiter from "./icon/twiter.svg";
import Instagram from "./icon/instagram.svg";

const IconPack = ({ name, fill, size, onClick }) => {
  const Icons = [
    {
      icon: (
        <img
          src={AirplaneSVG}
          alt={name}
          style={{ width: size, height: size, fill }}
        />
      ),
      name: "fa-airplane-right",
    },
    {
      icon: (
        <img
          src={BlackAirplaneSVG}
          alt="Bad"
          onClick={onClick && onClick}
          style={{ width: size, height: size, fill }}
        />
      ),
      name: "fa-black-airplaner-left",
    },
    {
      icon: (
        <img
          src={BlackBad}
          alt={name}
          style={{ width: size, height: size, fill }}
        />
      ),
      name: "fa-black-bad-right",
    },
    {
      icon: (
        <img
          src={Telegram}
          alt={name}
          style={{ width: size, height: size, fill }}
        />
      ),
      name: "fa-telegram-left",
    },
    {
      icon: (
        <img
          src={Plus}
          alt={name}
          style={{ width: size, height: size, fill }}
        />
      ),
      name: "fa-plus-left",
    },
    {
      icon: (
        <img
          src={BadSVG}
          alt={name}
          style={{ width: size, height: size, fill }}
        />
      ),
      name: "fa-bad-left",
    },
    {
      icon: (
        <img
          src={Google}
          alt={name}
          style={{ width: size, height: size, fill }}
        />
      ),
      name: "fa-google",
    },
    {
      icon: (
        <img
          src={Star}
          alt={name}
          style={{ width: size, height: size, fill }}
        />
      ),
      name: "fa-start",
    },
    {
      icon: (
        <img
          src={Fecebock}
          alt={name}
          style={{ width: size, height: size, fill }}
        />
      ),
      name: "fa-feceback",
    },
    {
      icon: (
        <img
          src={Twiter}
          alt={name}
          style={{ width: size, height: size, fill }}
        />
      ),
      name: "fa-twiter",
    },
    {
      icon: (
        <img
          src={Instagram}
          alt={name}
          style={{ width: size, height: size, fill }}
        />
      ),
      name: "fa-instagram",
    },
  ];

  const Icon = Icons.find((item) => item.name === name);
  return <>{Icon?.icon}</>;
};

export default IconPack;
