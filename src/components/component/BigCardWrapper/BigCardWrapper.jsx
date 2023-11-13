import React from "react";
import BigCard from "../BIgCard/BigCard";
import { ButtonCastom } from "../../others/buttons/button";
import IconPack from "../../others/Icons/Icons";
import { useTranslation } from "react-i18next";

const BigCardWrapper = () => {
  const { t } = useTranslation(); // Use 't' for translation, not 'i18n'

  return (
    <section className="flex justify-center gap-[2%] items-center h-[600px] flex-wrap">
      <BigCard
        img={"/img/BirCardImg1.png"}
        title={"Flights"}
        about={t('search-flights-and-places-hire-to-our-most-popular-destinations')}
        button={
          <ButtonCastom
            img={
              <IconPack
                name={"fa-telegram-left"}
                fill={"black"}
                size={"24px"}
              />
            }
            text={t('show-filghts-1')}
            classes={
              " text-[white] flex gap-[5px] items-center rounded-lg font-[500] text-[14px] max-w-[140px] p-3  w-full bg-[#8DD3BB] "
            }
          />
        }
      />
      <BigCard
        img={"/img/BirCardImg2.png"}
        button={
          <ButtonCastom
            img={
              <IconPack
                name={"fa-telegram-left"}
                fill={"black"}
                size={"24px"}
              />
            }
            text={t("show-filghts-0")}
            classes={
              " text-[white] flex gap-[5px] items-center rounded-lg font-[500] text-[14px] max-w-[140px] p-3  w-full bg-[#8DD3BB] "
            }
          />
        }
        about={t('search-hotels-and-places-hire-to-our-most-popular-destinations')}
        title={t('hotels')}
      />
    </section>
  );
};

export default BigCardWrapper;
