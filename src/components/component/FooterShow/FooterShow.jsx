import React from "react";
import IconPack from "../../others/Icons/Icons";
import { ButtonCastom } from "../../others/buttons/button";

const FooterShow = ({ classes }) => {
  return (
    <div className={classes}>
      <div className="flex flex-col gap-2 ">
        <h2 className="text-[44px] font-[600] max-w-[364px]">Subscribe Newsletter</h2>
        <h3 className="text-[20px] font-[400] text-[#887d7d]">The Travel</h3>
        <p className="text-[16px] text-[#887d7d]">
          Get inspired! Receive travel discounts, tips and behind the scenes
          stories.
        </p>
        <div className="forms flex gap-4">
          <input type="text" placeholder="Your email address" className="max-w-[593px] max-h-[56px] w-full h-full bg-[white] rounded-lg p-3 outline-none"/>
          <ButtonCastom
            text={"Subscribe"}
            classes={
              "max-w-[104px] w-full max-h-[45px] h-full  flex justify-center items-center bg-[black] p-3 rounded-lg text-[white]"
            }
          />
        </div>
      </div>
      <div>
        <img src="/dataimg/ahmad.png" alt="" />
      </div>
    </div>
  );
};

export default FooterShow;
