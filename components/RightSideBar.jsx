"use client";
import React, {useState} from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import { styles } from '@/styles';

import { AiOutlineDown } from "react-icons/ai";

const RightSideBar = () => {
  const pathname = usePathname()  

  const [isAcademicsClicked, setIsAcademicsClicked] = useState(false);
  const [isActivitiesClicked, setIsActivitiesClicked] = useState(false);

  const handleAcademicsMouseClick = () => {
    setIsAcademicsClicked((prev) => !prev);
  };
  
  const handleActivitiesMouseClick = () => {
    setIsActivitiesClicked((prev) => !prev);
  };
  

  const shouldUnderlineLink = (href) => {
    return pathname.startsWith(href);
  };

  return (
    <div  className="lg:hidden bg-red-500 h-full p-10 flex flex-col text-white max-md:block backdrop-blur-lg bg-opacity-75">
      <Link href="/admissions">
        <h1 className={`${styles.rightbuttons} ${shouldUnderlineLink('/admissions') && 'text-black underline'}`}>Admissions</h1>
      </Link>
      <Link href="/history">
        <h1 className={`${styles.rightbuttons} ${shouldUnderlineLink('/history') && 'text-black underline'}`}>History</h1>
      </Link>
      <Link href="/courses">
        <h1 className={`${styles.rightsubbuttons} ${shouldUnderlineLink('/courses') && 'text-black underline'}`}>Courses</h1>
      </Link>
      <Link href="/cbse">
        <h1 className={`${styles.rightsubbuttons} ${shouldUnderlineLink('/cbse') && 'text-black underline'}`}>Cbse Curriculum</h1>
      </Link>
      <button 
        className='flex items-center gap-2'
        type="button"
        onClick={handleAcademicsMouseClick}
      >
        <h1 className={`${styles.rightsubbuttons} ${shouldUnderlineLink('/academics/') && 'text-black underline'}`}>Academics</h1>
        <AiOutlineDown />
      </button>
      {isAcademicsClicked && (
        <div className='gap-2 my-1 py-1'>
          <Link href="/academics/syllabus">
            <p className={`${styles.rightDropDownItem}`}>Syllabus Breakup</p>
          </Link>
          <Link href="/academics/fees">
            <p className={`${styles.rightDropDownItem}`}>Fees Structure</p>
          </Link>
        </div>
      )}
      <Link href="/faculty">
        <h1 className={`${styles.rightsubbuttons} ${shouldUnderlineLink('/faculty') && 'text-black underline'}`}>Faculty</h1>
      </Link>
      <button 
        className='flex items-center gap-2'
        type="button"
        onClick={handleActivitiesMouseClick}
      >
        <h1 className={`${styles.rightsubbuttons} ${shouldUnderlineLink('/activities/') && 'text-black underline'}`}>Activities</h1>
        <AiOutlineDown />
      </button>
      {isActivitiesClicked && (
        <div className='gap-2 my-1 py-1'>
          <Link href="/activities/annualfunction">
            <p className={`${styles.rightDropDownItem}`}>Annual Celebration</p>
          </Link>
          <Link href="/activities/cocurricular">
            <p className={`${styles.rightDropDownItem}`}>Co Curricular</p>
          </Link>
          <Link href="/activities/cultural">
            <p className={`${styles.rightDropDownItem}`}>Cultural</p>
          </Link>
          <Link href="/activities/extra">
            <p className={`${styles.rightDropDownItem}`}>Extra Curricular</p>
          </Link>
          <Link href="/activities/awards">
            <p className={`${styles.rightDropDownItem}`}>Awards</p>
          </Link>
        </div>
      )}
    </div>
  )
}

export default RightSideBar;
