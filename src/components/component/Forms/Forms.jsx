import React, { useState } from "react";
import IconPack from "../../others/Icons/Icons";
import { ButtonCastom } from "../../others/buttons/button";
import { useTranslation } from "react-i18next";

const Forms = ({ classes }) => {
  const { t } = useTranslation(); // Use 't' for translation, not 'i18n'

  const [openModal, setOpenModal] = useState(false);

  function OpenModal() {
    setOpenModal(true);
    console.log(openModal);
  }
  return (
    <div className={classes}>
      <div className="top flex gap-16 w-full">
        <div className="border-b-[5px] rounded border-solid border-[#D7E2EE]  flex  gap-3  items-center p-3">
          <IconPack
            name={"fa-black-airplaner-left"}
            fill={"black"}
            size={"24px"}
          />
          <p>{t('flights')}</p>
        </div>
        <div className="border-l-2 border-solid border-[#D7E2EE] p-3 flex  gap-3  items-center">
          <IconPack name={"fa-black-bad-right"} fill={"white"} size={"24px"} />
          <p>{t("stays")}</p>
        </div>
      </div>
      <div className="bottom mt-7">
        <div className="input-wrapper flex gap-6">
          <label className="flex flex-col items-left relative">
            <span className="absolute top-[-12px] left-4 z-[999] text-sm bg-[white] font-[500]">
             {t('From-to')}
            </span>
            <input
              type="text"
              placeholder={t('Lahone-karachi')}
              className="w-[324px] h-[53px] p-3 outline-none border-2 border-solid border-[#b4aeae] rounded-md"
            />
          </label>
          <label className="flex flex-col items-left relative">
            <span className="absolute top-[-12px] left-4 z-[999] text-sm bg-[white] font-[500]">
            {t('trip')}
            </span>
            <select className="w-[130px]  border-2 border-solid border-[#b4aeae] rounded-md p-3 outline-none">
              <option value="Tashkent">Tashkent</option>
              <option value="Andijon">Andijon</option>
              <option value="Qashqa-Datyo">Qashqadaryo</option>
            </select>
          </label>
          <label className="flex flex-col items-left relative">
            <span className="absolute top-[-12px] left-4 z-[999] text-sm bg-[white] font-[500]">
              {t("depart-return")}
            </span>
            <input
              type="date"
              className="w-[324px]  border-2 border-solid border-[#b4aeae] rounded-md p-3 outline-none"
            />
          </label>
          <label className="flex flex-col items-left relative">
            <span className="absolute top-[-12px] left-4 z-[999] text-sm bg-[white] font-[500]">
              {t("passenger-class")}
            </span>
            <input
              type="text"
              placeholder={t("1-passenger-economy")}
              className="w-[324px] border-2 border-solid border-[#b4aeae] rounded-md p-3 outline-none"
            />
          </label>
        </div>
      </div>
      <div className="buttons flex w-full items-center h-[80px] p-6  justify-end">
        <ButtonCastom
          img={<IconPack name={"fa-plus-left"} fill={"black"} size={"24px"} />}
          text={t("add-promo-code")}
          classes={
            "flex gap-[5px] items-center rounded-lg font-[500] text-[14px] max-w-[180px] p-3  w-full bg-[transparent]"
          }
          func={OpenModal}
        />
        <ButtonCastom
          img={
            <IconPack name={"fa-telegram-left"} fill={"black"} size={"24px"} />
          }
          text={t("show-filghts")}
          classes={
            " text-[white] flex gap-[5px] items-center rounded-lg font-[500] text-[14px] max-w-[140px] p-3  w-full bg-[#8DD3BB] "
          }
        />
        <ButtonCastom />
      </div>
    </div>
  );
};

export default Forms;
