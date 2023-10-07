  "use client";
  import { useState } from 'react';
  import '../globals.css'
  import { Inter } from 'next/font/google';

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

    return (
      <html lang="en">
        <head>
          <title>Bihani Children's Academy</title>
        </head>
        <body className={inter.className}>
          <div className='lg:px-24 bg-gradient-to-b from-yellow-300 via-orange-400 to-red-500'>
            <NavBar toggleRightSidebar={toggleRightSidebar}/>
            <main className='flex flex-row justify-center'>
              <section className="w-full">
                  {children}
              </section>
              <section className='fixed right-0 h-screen flex flex-grow z-10'>
                {isRightSidebarOpen && <RightSideBar />}
              </section>
            </main>
            <Footer />
          </div>
        </body>
      </html>
    )
  }