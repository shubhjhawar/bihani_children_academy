"use client";
import { one } from '@/assets';
import Image from 'next/image';
import React from 'react'

const Admissions = () => {
  return (
    <div className="h-auto">
      <div className="p-4">
        <h1 className='flex justify-center text-5xl font-sans text-white font-semibold tracking-wide'>Admissions</h1>
          <div className="font-sans grid grid-cols-2 max-md:grid-cols-1 p-2">
            <div className="h-auto ">
              <div className=''>
                <h1 className="p-4 text-3xl md:text-2xl text-white font-semibold tracking-wide ">Admission Process</h1>
                <div className='w-[150px] h-[5px] rounded-3xl bg-yellow-300 -mt-3 ml-4'/>
              </div>
              <p className="p-4 text-sm lg:leading-7  leading-4 tracking-wide text-white">At BCA, we are dedicated to fostering a diverse and inclusive learning environment where students can excel academically and personally. Our commitment to equity and inclusion extends to all aspects of our educational community, ensuring that every student feels valued and supported on their educational journey.</p>
              <div className="p-4">
              <a href="/about">
              <button
                  type="button"
                  className='px-4 py-2 text-lg rounded-full bg-gray-100 text-red-500 hover:bg-transparent hover:border-white hover:border-[1px] hover:text-white shadow-lg hover:shadow-xl w-auto transition-all duration-300 ease-in-out'
                >
                  Download Admission Form
                </button>
              </a>
              </div>
            </div>
            <div className="p-6 ">
              <div className="hover:scale-105 transition ease-in-out duration-300">
                <Image
                  src={one}
                  alt="img"
                  className='w-full h-full rounded-2xl shadow-2xl'
                />
              </div>
            </div>
          </div>
        <div className='mt-4 border-[1px] bg-orange-400 rounded-lg shadow-lg'>
          <div className='p-4 w-full flex flex-row max-md:flex-col gap-2'>
            <div className='w-full flex flex-col justify-start pl-4 py-2'>
              <h2 className='text-xl text-white font-semibold tracking-wide underline'>Admission Guidelines</h2>
              <div className='mt-2'>
                <p className='text-zinc-800 text-sm'>To ensure a fair and transparent admission process, please review the following guidelines carefully:</p>
                <div className='pl-2 text-md mt-2 flex flex-col gap-2 text-white'>
                  <p>Apply before the deadline</p>
                  <p>Ensure all required documents are submitted with your application.</p>
                  <p>Pay any applicable application fees on time.</p>
                </div>
              </div>
            </div>
            <div className='w-full flex justify-end'>
              <div className='flex flex-col pl-4 '>
                <div className='h-auto '>
                  <h2 className='text-lg font-semibold text-gray-200'>For Admission, tests are conducted for following subjects:</h2>
                  <div className='bg-yellow-300  flex rounded-md mt-2'>
                    <p className='text-gray-900 text-md p-1'>Class I to IX - English, Maths and Science</p>
                  </div>
                </div>
                <div className='h-auto'>
                  <h2 className='font-semibold text-gray-200 py-2'>The student desiring admission should score minimum 80% in Xth Boards in respective subjects.</h2>
                  <div className='bg-yellow-300  flex rounded-md mt-2'>
                    <p className='text-gray-900 text-sm p-1'>Class XI (Science) -	English,Physics & Chemistry,Maths/ Biology</p>
                  </div>
                  <div className='bg-yellow-300  flex rounded-md mt-2'>
                    <p className='text-gray-900 text-sm p-1'>Class XI (Commerce) - English and Maths</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Admissions