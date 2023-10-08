"use client";
import Image from 'next/image'

import { About, Awards, Banner, MyCalendar, Notices, Testimonial } from '@/components'

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <Banner/>
      <div className='w-full flex flex-col md:flex-row gap-2 px-4 py-6 border-[1px] border-gray-100 rounded-xl shadow-xl'>
        <div className='md:w-2/3'>
          <Notices />
        </div>
        <div className='md:w-1/3'>
          <MyCalendar />
        </div>
      </div>
      <div className='mt-5 border-gray-100 rounded-xl'>
        <About />
        <Testimonial />
        <Awards />
      </div>

    </main>
  )
}
