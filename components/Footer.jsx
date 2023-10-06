import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { logo } from '@/assets';
import { SiGooglemaps } from "react-icons/si";
import { AiFillInstagram, AiOutlineMail, AiFillFacebook } from "react-icons/ai";
import { MdCall } from "react-icons/md";
import { RiTwitterXFill } from "react-icons/ri"

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top smoothly
  };

  return (
    <div>
      <div className="max-sm:text-xs text-sm bg-gradient-to-b from-yellow-300 via-orange-400 to-red-500 rounded-t-lg mt-10 py-4 flex justify-around items-center">
        <div className='flex flex-col gap-2'>
          <div className='flex items-center gap-1'>
            <SiGooglemaps />
            <p>WV8J+X2R, Gagan Path, Sri Ganganagar</p>
          </div>
          <div className="flex items-center gap-1">
            <SiGooglemaps />
            <p>Rajasthan, India.  335001</p>
          </div>
          <div className='flex items-center gap-1'>
            <MdCall />
            <p>+91 154 248 0607</p>
          </div>
          <div className='flex items-center gap-1'>
            <AiOutlineMail />
            <a href="mailto:bihanisgnr_001@yahoo.com">bihanisgnr_001@yahoo.com</a>
          </div>
        </div>
        <div className='cursor-pointer'>
          <Image src={logo} alt="logo" title="move to top" className='w-20 h-20 max-sm:w-10 max-sm:h-10' onClick={scrollToTop}/>
        </div>
        <div>
          <h2 className='w-full flex justify-center mb-1 font-semibold underline'>Socials</h2>
          <div className='flex items-center gap-3'>
            <Link href="https://www.facebook.com/bcasgnr?mibextid=LQQJ4d" target="_blank">
              <AiFillFacebook className='w-5 h-5 cursor-pointer' />
            </Link>
            <Link href="https://www.instagram.com/bihani_childrens_academy/?hl=en" target="_blank">
              <AiFillInstagram className='w-5 h-5 cursor-pointer' />
            </Link>
            <div>
              <RiTwitterXFill className='w-5 h-5 cursor-pointer'  />
            </div>
          </div>
        </div>
      </div>
      <h3 className='w-full flex justify-center pb-2'>Copyright ©2023 All rights reserved</h3>
    </div>
  )
}

export default Footer