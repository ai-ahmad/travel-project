import React from "react";
import Wrapper2 from "../../component/WrapperCardLayout/Wrapper";
import BigCardWrapper from "../../component/BigCardWrapper/BigCardWrapper";
import SwiperWrapper from "../../component/SwiperWrapper/SwiperWrapper";
import TourDirection from "../../component/TourDirections/TourDirection";
const Main = ({ event }) => {
  return (
    <main className="mt-[150px] container mx-auto">
       <SwiperWrapper />
      <Wrapper2 event={event} />
      <BigCardWrapper />
      <TourDirection />
    </main>
  );
};

export default Main;
