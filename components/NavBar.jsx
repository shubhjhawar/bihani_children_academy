"use client"
import React, {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation'

import { logo } from '@/assets';
import { styles } from "../styles/index";
import { BiMenu } from 'react-icons/bi';
import { ImCross } from "react-icons/im";

const NavBar = ({toggleRightSidebar}) => {
  const pathname = usePathname()

  const [isToggle, setIsToggle] = useState(false);

  const toggle = () => {
    toggleRightSidebar();
    setIsToggle(prev => !prev)
  } 

  const shouldUnderlineLink = (href) => {
    return pathname === href;
  };

  return (
    <div className="sticky top-0 z-10 bg-yellow-300 backdrop-blur-md rounded-b-lg bg-opacity-75">
      <div className="py-5 flex flex-wrap w-full justify-between">
        <div>
          <Link
            type="button"
            title="home"
            className="flex items-center"
            href="/"
          >
            <Image src={logo} alt="Logo" className='w-20 h-20 max-md:w-10 max-md:h-10' />
            <h1 className="text-2xl max-md:text-lg font-semibold">Bihani Children's Academy</h1>
          </Link>
        </div>

        <div className='flex items-center gap-5 px-2 max-md:hidden block'>
          <Link
            href="/admissions"
          >
            <h1 className={`${styles.navbuttons} ${shouldUnderlineLink('/admissions') && 'border-b-[2px] border-red-600'}`}>Admissions</h1> 
          </Link>
          <Link
            href="/history"
          >
            <h1 className={`${styles.navbuttons} ${shouldUnderlineLink('/history') && 'border-b-[2px] border-red-600'}`}>History</h1>
          </Link>
        </div>

        <button 
        className='max-md:block hidden'
        type="button"
        onClick={toggle}
        >
          {isToggle ?  
            <ImCross className='w-7 h-7 pr-2'/> 
          :
            <BiMenu className='w-10 h-10'/>}
        </button>
      </div>

      <div className='w-full py-2 mb-4 bg-gradient-to-r from-orange-200 via-orange-400 to-orange-200 rounded-xl shadow-xl flex flex-wrap justify-around max-md:hidden block bg-opacity-75 backdrop-blur-md'>
          <Link
            href="/courses"
          >
            <h1 className={`${styles.navbuttons} ${shouldUnderlineLink('/courses') && 'border-b-[2px] border-red-600'}`}>Courses</h1>
          </Link>
          <Link
            href="/faculty"
          >
            <h1 className={`${styles.navbuttons} ${shouldUnderlineLink('/faculty') && 'border-b-[2px] border-red-600'}`}>Faculty</h1>
          </Link>
          <Link
            href="/extra"
          >
            <h1 className={`${styles.navbuttons} ${shouldUnderlineLink('/extra') && 'border-b-[2px] border-red-600'}`}>Extra Curriculars</h1>
          </Link>
      </div>
    </div>
  );
}

export default NavBar;
