import IconPack from "../../../others/Icons/Icons";
import Logo2 from "../../../others/Logo/Logo";
import { ButtonCastom } from "../../../others/buttons/button";



function NavDefualt() {
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
        <Logo2 clases={"max-w-[110px] w-full max-h-[36px] h-full"}/>
      </div>
      <div className="button-wrapper flex items-center gap-8">
      <ButtonCastom classes={"w-[41px] font-[600]  h-[48px] bg-[transparent] text-[white] text-[14px]"} text={"Login"}/>
      <ButtonCastom location={"http://localhost:5173/signin"} classes={"w-[100px] font-[600] h-[48px] bg-[white] text-[black] text-[14px] rounded-[10px]"} text={"Sigin up"}/>
      </div>
    </nav>
  );
}

export default NavDefualt;
