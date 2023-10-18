import React from "react";
import LayoutCard from "../LayoutCard/LayoutCard";
import { ButtonCastom } from "../../others/buttons/button";

const Wrapper2 = ({ event }) => {
  return (
    <section className="container">
      <div className="flex  justify-center gap-[45%] items-center h-[100px]">
        <div>
          <h2 className="text-[32px] font-[700]">plan-your-perfect-trip</h2>
          <p className="text-base text-[#999090]">
            search-flights-and-places-hire-to-our-most-popular-destinations
          </p>
        </div>
        <div className="buttons">
          <ButtonCastom
            text={"See more places"}
            classes={"w-full max-w-[149px]  h-[40px] p-3 flex justify-center items-center border-2  rounded-lg "}
          />
        </div>
      </div>
      <LayoutCard event={event} />
    </section>
  );
};

export default Wrapper2;
