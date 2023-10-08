import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { logo } from '@/assets';
import { SiGooglemaps } from "react-icons/si";
import { AiFillInstagram, AiOutlineMail, AiFillFacebook } from "react-icons/ai";
import { MdCall } from "react-icons/md";
import { RiTwitterXFill } from "react-icons/ri"

import { styles } from "@/styles";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top smoothly
  };

  return (
    <div className="pt-2 pb-2 bg-gradient-to-b from-red-500 to-orange-400 ">
      <div className="rounded-t-lg mt-10 py-4 grid grid-cols-3 max-sm:grid-cols-2">
        <div className='flex flex-col gap-2 max-sm:hidden block pl-12'>
          <div className='flex items-center gap-1'>
            <SiGooglemaps />
            <p className={`${styles.footertext}`}>WV8J+X2R, Gagan Path, Sri Ganganagar</p>
          </div>
          <div className="flex items-center gap-1">
            <SiGooglemaps />
            <p className={`${styles.footertext}`}>Rajasthan, India.  335001</p>
          </div>
          <div className='flex items-center gap-1'>
            <MdCall />
            <p className={`${styles.footertext}`}>+91 154 248 0607</p>
          </div>
          <div className='flex items-center gap-1'>
            <AiOutlineMail />
            <a href="mailto:bihanisgnr_001@yahoo.com" className={`${styles.footertext}`}>bihanisgnr_001@yahoo.com</a>
          </div>
        </div>
        <div className='flex w-full justify-center cursor-pointer '>
          <Image src={logo} alt="logo" title="move to top" className='w-20 h-20 max-sm:w-10 max-sm:h-10' onClick={scrollToTop}/>
        </div>
        <div className=' w-full flex lg:justify-end max-md:justify-center'>
          <div className="mr-12 mt-2 mb-2 w-1/4 flex flex-col justify-center ">
            <h2 className='h-1/2 font-semibold underline flex w-full justify-center items-center'>Socials</h2>
            <div className='h-1/2 flex gap-2'>
              <Link href="https://www.facebook.com/bcasgnr?mibextid=LQQJ4d" target="_blank">
                <AiFillFacebook className={`${styles.footericon}`} />
              </Link>
              <Link href="https://www.instagram.com/bihani_childrens_academy/?hl=en" target="_blank">
                <AiFillInstagram className={`${styles.footericon}`} />
              </Link>
              <div>
                <RiTwitterXFill className={`${styles.footericon}`}  />
              </div>
            </div>
          </div>
        </div>
      </div>
      <h3 className='w-full flex justify-center pb-2'>Copyright ©2023 All rights reserved</h3>
    </div>
  )
}

export default Footer