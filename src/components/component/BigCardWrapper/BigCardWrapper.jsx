import React from "react";
import BigCard from "../BIgCard/BigCard";
import { ButtonCastom } from "../../others/buttons/button";
import IconPack from "../../others/Icons/Icons";

const BigCardWrapper = () => {
  return (
    <section className="flex justify-center gap-[2%] items-center h-[600px] flex-wrap">
      <BigCard
        img={"/img/BirCardImg1.png"}
        title={"Flights"}
        about={"Search Flights & Places Hire to our most popular destinations"}
        button={
          <ButtonCastom
            img={
              <IconPack
                name={"fa-telegram-left"}
                fill={"black"}
                size={"24px"}
              />
            }
            text={"Show Filghts"}
            classes={
              " text-[white] flex gap-[5px] items-center rounded-lg font-[500] text-[14px] max-w-[140px] p-3  w-full bg-[#8DD3BB] "
            }
          />
        }
      />
      <BigCard img={"/img/BirCardImg2.png"} button={ <ButtonCastom
            img={
              <IconPack
                name={"fa-telegram-left"}
                fill={"black"}
                size={"24px"}
              />
            }
            text={"Show Filghts"}
            classes={
              " text-[white] flex gap-[5px] items-center rounded-lg font-[500] text-[14px] max-w-[140px] p-3  w-full bg-[#8DD3BB] "
            }
          />} about={"Search hotels & Places Hire to our most popular destinations"} title={"Hotels"} />
    </section>
  );
};

export default BigCardWrapper;
