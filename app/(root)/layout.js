import '../globals.css'
import { Inter } from 'next/font/google'

import {NavBar, LeftSideBar, Footer, RightSideBar} from "@/components";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bihani Public School',
  description: 'one stop solution for all school needs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <main className='flex flex-row'>
          <LeftSideBar />
          <section className="">
            <div className="w-full max-w-4xl">
                {children}
            </div>
          </section>
          <RightSideBar />
        </main>
        <Footer />
      </body>
    </html>

  )
}
