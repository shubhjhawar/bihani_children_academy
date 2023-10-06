"use client"
import React, {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { logo } from '@/assets';
import { styles } from "../styles/index";
import { BiMenu } from 'react-icons/bi';
import { ImCross } from "react-icons/im";

const NavBar = ({toggleRightSidebar}) => {
  const [isToggle, setIsToggle] = useState(false);

  const toggle = () => {
    toggleRightSidebar();
    setIsToggle(prev => !prev)
  } 
  return (
    <div>
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
            <h1 className={styles.navbuttons}>Admissions</h1> 
          </Link>
          <Link
            href="/history"
          >
            <h1 className={styles.navbuttons}>History</h1>
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

      <div className='w-full py-2 mb-4 bg-gradient-to-r from-orange-200 via-orange-400 to-orange-200 rounded-xl shadow-xl flex flex-wrap justify-around max-md:hidden block'>
          <Link
            href="/courses"
          >
            <h1 className={styles.navbuttons}>Courses</h1>
          </Link>
          <Link
            href="/faculty"
          >
            <h1 className={styles.navbuttons}>Faculty</h1>
          </Link>
          <Link
            href="/extra"
          >
            <h1 className={styles.navbuttons}>Extra Curriculars</h1>
          </Link>
      </div>
    </div>
  );
}

export default NavBar;
