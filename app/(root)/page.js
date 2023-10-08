"use client";
import Image from 'next/image'

import { Banner, MyCalendar, Notices } from '@/components'

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <Banner/>
      <div className='w-full flex flex-col md:flex-row gap-2 p-2 border-[1px] border-gray-100 rounded-xl shadow-lg'>
        <div className='md:w-2/3'>
          <Notices />
        </div>
        <div className='md:w-1/3'>
          <MyCalendar />
        </div>
      </div>
      <div className='border-[1px] border-gray-100 rounded-xl shadow-lg mt-2'>
        something
      </div>

    </main>
  )
}
