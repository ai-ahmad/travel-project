import React from "react";
import IconPack from "../../others/Icons/Icons";
import FooterShow from "../../component/FooterShow/FooterShow";
import ReactDOM from "react-dom"; // Add this line

const Footer = () => {
  return ReactDOM.createPortal( (
    <footer className="w-full h-[422px] bg-[#8DD3BB] flex  flex-col mt-[250px]  justify-center relative">
    <FooterShow classes={"absolute max-w-[1232px] w-full max-h-[302px] bg-[#CDEAE1] p-3 rounded-xl top-[-30%] left-[10%] mb-[40px] flex gap-[200px] items-center "}/>
      <div className="wrapper flex   h-full justify-center gap-[10%] items-center mt-[160px]">
        
          <div className="1 flex  flex-col gap-7">
            <h1 className="text-center mb-3">LOGO IN WEB</h1>
            <div className="flex items-center gap-3 justify-center">
            <IconPack name={"fa-feceback"} fill={"blue"} size={"24px"} />
            <IconPack name={"fa-twiter"} fill={"blue"} size={"24px"} />
            <IconPack name={"fa-instagram"} fill={"blue"} size={"24px"} />
            </div>
          </div>

          <ul className="w-[120px] h-[100px] ">
            <li>
              <h4 className="text-[15px] font-[500]">Our Destinations</h4>
            </li>
            <li className="text-[#535050]">Canada</li>
            <li className="text-[#535050]">Alaksa</li>
            <li className="text-[#535050]">France</li>
            <li className="text-[#535050]">Iceland</li>
          </ul>
          <ul className="w-[120px] h-[100px] ">
            <li>
              <h4 className="text-[15px] font-[500]">Our Activities</h4>
            </li>
            <li className="text-[#535050]">Northern Lights</li>
            <li className="text-[#535050]">Cruising & sailing</li>
            <li className="text-[#535050]">Multi-activities</li>
            <li className="text-[#535050]">Kayaing</li>
          </ul>
          <ul className="w-[120px] h-[100px] ">
            <li>
              <h4 className="text-[15px] font-[500]">Travel Blogs</h4>
            </li>
            <li className="text-[#535050]">Bali Travel Guide</li>
            <li className="text-[#535050]">Sri Lanks Travel Guide</li>
            <li className="text-[#535050]">Peru Travel Guide</li>
            <li className="text-[#535050]">Bali Travel Guide</li>
          </ul>
          <ul className="w-[120px] h-[100px] ">
            <li>
              <h4 className="text-[15px] font-[500]">About Us</h4>
            </li>
            <li className="text-[#535050]">Our Story</li>
            <li className="text-[#535050]">Work with us</li>
          </ul>
          <ul className="w-[120px] h-[100px] ">
            <li>
              <h4 className="text-[15px] font-[500]">Contact Us</h4>
            </li>
            <li className="text-[#535050]">Our Story</li>
            <li className="text-[#535050]">Work with us</li>
          </ul>
        </div>
    </footer> 
  ), document.body);
};

export default Footer;
