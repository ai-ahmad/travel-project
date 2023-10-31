import { useEffect, useState } from "react";
import IconPack from "../../../others/Icons/Icons";
import Logo2 from "../../../others/Logo/Logo";
import { ButtonCastom } from "../../../others/buttons/button"; // Corrected import
import { useAdminContext } from "../../../context/TestLogin";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from 'i18next'; // Import i18n separately


function NavDefault() {
  const { t } = useTranslation(); // Use 't' for translation, not 'i18n'

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  let [showButton, setShowButton] = useState(false);

  useEffect(() => {
    localStorage.setItem("accaunt_info", JSON.stringify({}));
  }, []);

  const info = localStorage.getItem("accaunt_info");
  const infoValue = JSON.parse(info) || {}; // Provide a default value if info is null

  return (
    <nav className="flex items-center justify-between w-full h-14">
      <div className="flex gap-8">
        <div className="one-icon flex gap-2">
          <IconPack name={"fa-airplane-right"} fill={"blue"} size={"24px"} />
          <p className="text-[white]">{t('find-flight-2')}</p>
        </div>
        <div className="two-icon flex gap-2">
          <IconPack name={"fa-bad-left"} fill={"blue"} size={"24px"} />
          <p className="text-[white]">{t('book-flight-2')}</p>
        </div>
      </div>
      <div className="logo-wrapper">
        <Logo2 classes={"max-w-[110px] w-full max-h-[36px] h-full"} />
      </div>
      <div className="button-wrapper flex items-center gap-8">
        <>
          <Link
            to="/login"
            className="w-[41px] font-[600] h-[48px] bg-[transparent] text-[white] flex justify-center items-center  text-[14px]"
          >
            {t('login-2')}
          </Link>
          <Link
            to="/sign-up"
            className="w-[100px] font-[600] h-[48px] bg-[white] text-[black]   flex justify-center items-center text-[14px] rounded-[10px]"
          >
            Sign-up
          </Link>
          <div className="flex gap-5 text-white">
            <button onClick={() => changeLanguage("en")}>English</button>
            <button onClick={() => changeLanguage("uz")}>Uzbek</button>
            {/* Add more language options as needed */}
          </div>
        </>
      </div>
    </nav>
  );
}


export default NavDefault;
