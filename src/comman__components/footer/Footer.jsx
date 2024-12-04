import React from "react";
import { RiFacebookBoxFill } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io5";
import { ImTwitter } from "react-icons/im";
import { BsYoutube } from "react-icons/bs";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="text-white bg-[#252B42]  ">
      <div className=" mx-auto flex w-10/12 max-w-maxContent flex-col justify-between gap-10 relative  py-[60px]">
        {/* upper part */}
        <div className="flex flex-col lg:gap-10 lg:flex-row justify-between">
          {/* left side */}
          <div className="my-12 flex lg:w-[40%] flex-col gap-6 md:w[35%] ">
            {/* Logo image */}
            <div className="flex items-center gap-4 bg-white text-[#1C1C1C] justify-center w-full  max-w-xs py-2">
              <img src={logo} alt="logo" className="w-[60%] max-w-[150px] h-auto object-contain"/>
              {/* <p className="text-xl font-semibold font-montserrat">41 India</p> */}
            </div>
            <div className="w-[45%] flex flex-col gap-6">
              <h3 className="font-montserrat font-bold leading-6 text-2xl">
                Get In Touch
              </h3>
              <p className="font-montserrat text-sm font-medium">
                the quick for jumps over the lazy dog
              </p>
            </div>
            <div className="flex gap-x-5 h-6">
              <RiFacebookBoxFill className="text-blue-500 bg-transparent  w-6 h-full" />
              <IoLogoInstagram className="text-red-500 bg-transparent w-6 h-full" />
              <ImTwitter className="text-blue-400 w-6 h-full" />
              <BsYoutube className="text-red-500 w-6 h-full" />
            </div>
          </div>

          {/* right side */}
          <div className="my-12 flex lg:w-[40%] flex-col gap-2.5">
            <h3 className="font-montserrat font-bold leading-6 text-2xl">Company Info</h3>
            <p className="font-montserrat font-semibold text-sm ">About Us</p>
          </div>
        </div>
      </div>

      <div className="text-center bg-[#384163] py-[25px] pb-[25px] ">
        <h6 className="text-[#BDBDBD] leading-6 text-sm font-semibold font-montserrat">
        ©️ 2024 | 41 India | ️Made By M.A.D
        </h6>
      </div>
    </div>
  );
};

export default Footer;
