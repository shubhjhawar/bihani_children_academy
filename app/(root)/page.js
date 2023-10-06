"use client";
import Image from 'next/image'

import { Banner, MyCalendar, Notices } from '@/components'

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <Banner/>
      <div className='w-full flex flex-col md:flex-row gap-2'>
        <div className='md:w-2/3'>
          <Notices />
        </div>
        <div className='md:w-1/3'>
          <MyCalendar />
        </div>
      </div>

    </main>
  )
}
