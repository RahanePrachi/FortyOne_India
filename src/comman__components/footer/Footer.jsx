import React from 'react'
import { RiFacebookBoxFill } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io5";
import { ImTwitter } from "react-icons/im";
import { BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <div className='text-white bg-blue-950  '>
      {/* upper part */}
      <div className='flex flex-col w-11/12 items-center justify-evenly lg:gap-10 lg:flex-row '>
        {/* left side */}
        <div className='my-12 flex lg:w-[40%] flex-col gap-3'>
          {/* Logo image */}
          {/* <img src="" alt="" /> */}
          <p>Get In Touch</p>
          <p>the quick for jumps over the lazy dog</p>
          <div className='flex gap-2'>
            <RiFacebookBoxFill className='text-blue-500 bg-transparent'/>
            <IoLogoInstagram className='text-red-500 bg-transparent'/>
            <ImTwitter className='text-blue-400'/>
            <BsYoutube className='text-red-500'/>
          </div>
          


        </div>

        {/* right side */}
        <div className='my-12 flex lg:w-[40%] flex-col gap-3'>
            <p>Company Info</p>
            <p>about us</p>
        </div>
      </div>

      <div className='text-center bg-blue-900'>© 2024 | 41 India | Made By M.A.D.</div>
    </div>
  )
}

export default Footer