import React from "react";
import Wrapper2 from "../../component/WrapperCardLayout/Wrapper";
import BigCardWrapper from "../../component/BigCardWrapper/BigCardWrapper";
import SwiperWrapper from "../../component/SwiperWrapper/SwiperWrapper";
import WorldMap from "../../component/WorldMap/WorldMap";
const Main = ({ event }) => {
  return (
    <main className="mt-[150px] container mx-auto">
      <Wrapper2 event={event} />
      <BigCardWrapper />
      <WorldMap />
      <SwiperWrapper />
    </main>
  );
};

export default Main;
