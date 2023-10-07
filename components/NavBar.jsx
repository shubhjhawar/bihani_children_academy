"use client"
import React, {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation'

import { logo } from '@/assets';
import { styles } from "../styles/index";
import { BiMenu } from 'react-icons/bi';
import { ImCross } from "react-icons/im";
import { AiOutlineDown } from "react-icons/ai";

const NavBar = ({toggleRightSidebar}) => {
  const pathname = usePathname()

  const [isToggle, setIsToggle] = useState(false);
  const [isAcademicsHovered, setIsAcademicsHovered] = useState(false);
  const [isActivitiesHovered, setIsActivitiesHovered] = useState(false);

  const toggle = () => {
    toggleRightSidebar();
    setIsToggle(prev => !prev)
  } 

  const shouldUnderlineLink = (href) => {
    return pathname.startsWith(href);
  };

  const handleAcademicsMouseEnter = () => {
    setIsAcademicsHovered(true);
  };

  const handleAcademicsMouseLeave = () => {
    setIsAcademicsHovered(false);
  };

  const handleActivitiesMouseEnter = () => {
    setIsActivitiesHovered(true);
  };

  const handleActivitiesMouseLeave = () => {
    setIsActivitiesHovered(false);
  };


  return (
    <div className="sticky top-0 z-50 bg-yellow-300 backdrop-blur-md rounded-b-lg bg-opacity-75">
      <div className="py-5 flex flex-wrap w-full justify-between">
        <div>
          <Link
            type="button"
            title="home"
            className="flex items-center"
            href="/"
          >
            <Image src={logo} alt="Logo" className='w-20 h-20 max-md:w-10 max-md:h-10' />
            <h1 className="text-2xl max-md:text-lg font-semibold hover:text-red-600">Bihani Children's Academy</h1>
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
            href="/cbse"
          >
            <h1 className={`${styles.navbuttons} ${shouldUnderlineLink('/cbse') && 'border-b-[2px] border-red-600'}`}>CBSE curriculum</h1>
          </Link>
          <div
            className={`relative flex items-center `}
            onMouseEnter={handleAcademicsMouseEnter}
            onMouseLeave={handleAcademicsMouseLeave}
          >
          <h1
            className={`${shouldUnderlineLink('/academics/') && 'border-b-[2px] border-red-600'} ${styles.navbuttons} cursor-pointer flex items-center`}
          >
            Academics <AiOutlineDown />
          </h1>
          {isAcademicsHovered && (
            <div className={`${styles.dropDownMenuContainer}`}>
              <Link href="/academics/syllabus">
                <p className={`${styles.dropDownMenuItem}`}>Syllabus Breakup</p>
              </Link>
              <Link href="/academics/fees">
                <p className={`${styles.dropDownMenuItem}`}>Fees Structure</p>
              </Link>
            </div>
          )}
        </div>
          <Link
            href="/faculty"
          >
            <h1 className={`${styles.navbuttons} ${shouldUnderlineLink('/faculty') && 'border-b-[2px] border-red-600'}`}>Faculty</h1>
          </Link>
          <div
            className={`relative flex items-center `}
            onMouseEnter={handleActivitiesMouseEnter}
            onMouseLeave={handleActivitiesMouseLeave}
          >
          <h1
            className={`${shouldUnderlineLink('/activities') && 'border-b-[2px] border-red-600'} ${styles.navbuttons} cursor-pointer flex items-center`}
          >
            Activities <AiOutlineDown />
          </h1>
          {isActivitiesHovered && (
            <div className={`${styles.dropDownMenuContainer}`}>
              <Link href="/activities/annualfunction">
                <p className={`${styles.dropDownMenuItem}`}>Annual Celebration</p>
              </Link>
              <Link href="/activities/cocurricular">
                <p className={`${styles.dropDownMenuItem}`}>Co Curricular</p>
              </Link>
              <Link href="/activities/cultural">
                <p className={`${styles.dropDownMenuItem}`}>Cultural</p>
              </Link>
              <Link href="/activities/extra">
                <p className={`${styles.dropDownMenuItem}`}>Extra Curricular</p>
              </Link>
              <Link href="/activities/awards">
                <p className={`${styles.dropDownMenuItem}`}>Awards</p>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
