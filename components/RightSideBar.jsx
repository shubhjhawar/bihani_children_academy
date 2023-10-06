"use client";
import React from 'react';
import Link from 'next/link';

import { styles } from '@/styles';

const RightSideBar = () => {
  return (
    <div className="hidden max-md:block bg-red-400 h-screen p-10 flex flex-col text-white">
          <Link
            href="/admissions"
          >
            <h1 className={styles.rightbuttons}>Admissions</h1> 
          </Link>
          <Link
            href="/history"
          >
            <h1 className={styles.rightbuttons}>History</h1>
          </Link>
          <Link
            href="/courses"
          >
            <h1 className={styles.rightsubbuttons}>Courses</h1>
          </Link>
          <Link
            href="/faculty"
          >
            <h1 className={styles.rightsubbuttons}>Faculty</h1>
          </Link>
          <Link
            href="/extra"
          >
            <h1 className={styles.rightsubbuttons}>Extra Curriculars</h1>
          </Link>
    </div>
  )
}

export default RightSideBar