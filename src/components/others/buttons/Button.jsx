import React from "react";

export const ButtonCastom = ({ text, classes, img, location }) => {
  function restart() {
    window.location.href = `${location}`;
  }

  return (
    <>
      <button className={classes} onClick={restart}>
        {img}
        <span>{text}</span>
        <img src="" alt="" />
      </button>
    </>
  );
};
