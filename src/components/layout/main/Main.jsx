import React from "react";
import Wrapper2 from "../../component/WrapperCardLayout/Wrapper";
import BigCardWrapper from "../../component/BigCardWrapper/BigCardWrapper";
import SwiperWrapper from "../../component/SwiperWrapper/SwiperWrapper";

const Main = ({ event }) => {
  return (
    <main className="mt-[150px] container">
      <Wrapper2 event={event} />
      <BigCardWrapper />
      <SwiperWrapper />
    </main>
  );
};

export default Main;
