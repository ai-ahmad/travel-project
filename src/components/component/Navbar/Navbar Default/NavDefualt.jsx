import { useEffect, useState } from "react";
import IconPack from "../../../others/Icons/Icons";
import Logo2 from "../../../others/Logo/Logo";
import { ButtonCastom } from "../../../others/buttons/button"; // Corrected import
import { useAdminContext } from "../../../context/TestLogin";
import { Link } from "react-router-dom";

function NavDefault() {
  let [showButton, setShowButton] = useState(false);

  useEffect(() => {
    localStorage.setItem("accaunt_info", JSON.stringify({}));
  }, []);

  const info = localStorage.getItem("accaunt_info");
  const infoValue = JSON.parse(info); // Provide a default value if info is null
  // const loginVerify =
  // infoValue.email.length > 0 && infoValue.password.length > 0;

  return (
    <nav className="flex items-center justify-between w-full h-14">
      <div className="flex gap-8">
        <div className="one-icon flex gap-2">
          <IconPack name={"fa-airplane-right"} fill={"blue"} size={"24px"} />
          <p className="text-[white]">Find Flight</p>
        </div>
        <div className="two-icon flex gap-2">
          <IconPack name={"fa-bad-left"} fill={"blue"} size={"24px"} />
          <p className="text-[white]">Book Flight</p>
        </div>
      </div>
      <div className="logo-wrapper">
        <Logo2 classes={"max-w-[110px] w-full max-h-[36px] h-full"} />
      </div>
      <div className="button-wrapper flex items-center gap-8">
        {/* {loginVerify ? ( */}
        <>
          <Link
            to="/login"
            className="w-[41px] font-[600] h-[48px] bg-[transparent] text-[white] flex justify-center items-center  text-[14px]"
          >
            Login
          </Link>
          <Link
            to="sign-up"
            className="w-[100px] font-[600] h-[48px] bg-[white] text-[black]   flex justify-center items-center text-[14px] rounded-[10px]"
          >
            Sign Up
          </Link>
        </>
        {/* ) : (
          <p>Bekzod krasavchik</p>
        )} */}
      </div>
    </nav>
  );
}

export default NavDefault;
