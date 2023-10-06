"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'


import { styles } from '@/styles';

const RightSideBar = () => {
  const pathname = usePathname()

  const shouldUnderlineLink = (href) => {
    return pathname === href;
  };

  return (
    <div className="relative sticky top-0 z-10 hidden max-md:block bg-red-500 h-full p-10 flex flex-col text-white">
          <Link
            href="/admissions"
          >
            <h1 className={`${styles.rightbuttons} ${shouldUnderlineLink('/admissions') && 'text-black underline'}`}>Admissions</h1> 
          </Link>
          <Link
            href="/history"
          >
            <h1 className={`${styles.rightbuttons} ${shouldUnderlineLink('/history') && 'text-black underline'}`}>History</h1>
          </Link>
          <Link
            href="/courses"
          >
            <h1 className={`${styles.rightsubbuttons} ${shouldUnderlineLink('/courses') && 'text-black underline'}`}>Courses</h1>
          </Link>
          <Link
            href="/faculty"
          >
            <h1 className={`${styles.rightsubbuttons} ${shouldUnderlineLink('/faculty') && 'text-black underline'}`}>Faculty</h1>
          </Link>
          <Link
            href="/extra"
          >
            <h1 className={`${styles.rightsubbuttons} ${shouldUnderlineLink('/extra') && 'text-black underline'}`}>Extra Curriculars</h1>
          </Link>
    </div>
  )
}

export default RightSideBar