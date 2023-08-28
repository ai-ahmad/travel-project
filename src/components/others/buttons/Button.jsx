import React from "react";

export const ButtonCastom = ({ text, classes, img, location, func }) => {
  function restart() {
    window.location.href = `${location}`;
  }

  return (
    <>
      <button className={classes} onClick={func || restart}>
        {img}
        <span>{text}</span>
        <img src="" alt="" />
      </button>
    </>
  );
};
