import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
const Card = ({ id, image, bio, club, area, mob, name, email }) => {
  return (
    <div className="border-[#DCDCDC] border-2 text-center w-[300px] ">
      <div className="w-full h-[280px] flex items-center justify-center overflow-hidden border-b-2 border-[#DCDCDC]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className=" p-2 ">
        <p className="text-[#282828] font-poppins font-semibold text-lg">
          {name}
        </p>
        <p className="text-[#124F92] font-montserrat font-bold text-xm">
          {bio}
        </p>
        <div className="flex flex-row gap-2 items-center justify-center">
          <div className="flex flex-row">
            <p className="text-[#124F92]">Clubs: </p>
            <p>{club}</p>
          </div>
          <div className="flex flex-row items-center gap-1 m-2">
            <div className="bg-[#124F92] h-2 w-2 rounded-full"></div>
            <p className="text-[#124F92]">Area:</p>
            <p>{area}</p>
          </div>
        </div>
        <div>
          <div className="flex flex-row gap-2 m-2 items-center justify-center">
            {/* icon */}
            <div className="bg-black text-white rounded-full w-6 h-6 flex items-center justify-center gap-2">
              <IoCallOutline />
            </div>

            <p>{mob}</p>
          </div>
        </div>
        <div>
          <div className="flex flex-row gap-2 mt-2 justify-center items-center">
            {/* icon */}
            <div className="bg-black text-white rounded-full w-6 h-6 flex items-center justify-center">
              <MdOutlineEmail />
            </div>

            <p>{email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
