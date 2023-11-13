import React from "react";
import IconPack from "../../others/Icons/Icons";
import FooterShow from "../../component/FooterShow/FooterShow";
import ReactDOM from "react-dom"; // Add this line
import { t } from "i18next";

const Footer = () => {
  return ReactDOM.createPortal(
    <footer className="w-full h-[422px] bg-[#8DD3BB] flex  flex-col mt-[250px] justify-center relative">
      <FooterShow
        classes={
          "absolute max-w-[80%] w-full max-h-[302px] bg-[#CDEAE1] p-3 rounded-xl top-[-30%] left-[10%] mb-[40px] flex gap-[200px] items-center "
        }
      />
      <div className="wrapper flex h-full justify-center gap-[10%] items-center mt-[160px] max-w:">
        <div className="1 flex  flex-col gap-7">
          <h1 className="text-center mb-3">{t('logo-in-web')}</h1>
          <div className="flex items-center gap-3 justify-center">
            <IconPack name={"fa-feceback"} fill={"blue"} size={"24px"} />
            <IconPack name={"fa-twiter"} fill={"blue"} size={"24px"} />
            <IconPack name={"fa-instagram"} fill={"blue"} size={"24px"} />
          </div>
        </div>

        <ul className="w-[120px] h-[100px] ">
          <li>
            <h4 className="text-[15px] font-[500]">{t('our-destinations')}</h4>
          </li>
          <li className="text-[#535050]">{t('canada')}</li>
          <li className="text-[#535050]">{t('alaksa')}</li>
          <li className="text-[#535050]">{t('france')}</li>
          <li className="text-[#535050]">{t('iceland')}</li>
        </ul>
        <ul className="w-[120px] h-[100px] ">
          <li>
            <h4 className="text-[15px] font-[500]">{t('our-activities')}</h4>
          </li>
          <li className="text-[#535050]">{t('northern-lights')}</li>
          <li className="text-[#535050]">{t('cruising-and-sailing')}</li>
          <li className="text-[#535050]">{t('multi-activities')}</li>
          <li className="text-[#535050]">{t('kayaing')}</li>
        </ul>
        <ul className="w-[120px] h-[100px] ">
          <li>
            <h4 className="text-[15px] font-[500]">{t('travel-blogs')}</h4>
          </li>
          <li className="text-[#535050]">{t('bali-travel-guide')}</li>
          <li className="text-[#535050]">{t('sri-lanks-travel-guide')}</li>
          <li className="text-[#535050]">{t('peru-travel-guide')}</li>
          <li className="text-[#535050]">{t('bali-travel-guide-0')}</li>
        </ul>
        <ul className="w-[120px] h-[100px] ">
          <li>
            <h4 className="text-[15px] font-[500]">{t('about-us')}</h4>
          </li>
          <li className="text-[#535050]">{t('our-story')}</li>
          <li className="text-[#535050]">{t('work-with-us')}</li>
        </ul>
        <ul className="w-[120px] h-[100px] ">
          <li>
            <h4 className="text-[15px] font-[500]">{t('contact-us')}</h4>
          </li>
          <li className="text-[#535050]">Our Story</li>
          <li className="text-[#535050]">Work with us</li>
        </ul>
      </div>
    </footer>,
    document.body
  );
};

export default Footer;
