"use client";
import { useState } from 'react';
import '../globals.css'
import { Inter } from 'next/font/google'

import { NavBar, LeftSideBar, Footer, RightSideBar } from "@/components";

const inter = Inter({ subsets: ['latin'] })

const metadata = {
  title: 'Bihani Public School',
  description: 'one stop solution for all school needs',
}

export default function RootLayout({ children }) {
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);

  const toggleRightSidebar = () => {
    setIsRightSidebarOpen(prev => !prev);
  };

  console.log(isRightSidebarOpen)

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='lg:px-24 bg-gradient-to-b from-yellow-300 via-orange-400 to-red-500'>
          <NavBar toggleRightSidebar={toggleRightSidebar} />
          <main className='flex flex-row justify-between'>
            {/* <LeftSideBar /> */}
            <section className="w-full">
              <div className="w-full ">
                {children}
              </div>
            </section>
            <section className='z-10 absolute right-0 h-screen'>
              {isRightSidebarOpen && <RightSideBar />}
            </section>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
