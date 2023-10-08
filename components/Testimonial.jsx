import React from 'react';
import Image from 'next/image';

import { principal } from '@/assets';
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa"

const Testimonial = () => {
  return (
    <div className="bg-red-300 max-md:m-4 border-[2px] border-zinx-900 hover:border-white p-4 rounded-3xl shadow-md text-white">
        <div className=" grid grid-cols-4 max-md:grid-cols-1">
            <div className='px-2 py-10 flex flex-col items-center justify-center'>
                <Image src={principal} alt="principal" className='w-[120px] h-[120px] object-cover rounded-full'/>
                <p className='mt-1 font-serif font-semibold'>Name of the principal</p>
            </div>
            <div className='col-span-3 p-4 flex flex-col items-center justify-center gap-2'>
                <h1 className='text-2xl flex justify-start w-full'><FaQuoteLeft/></h1>
                <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur porttitor.</p>
                <h1 className='text-2xl  flex justify-end w-full'><FaQuoteRight /></h1>
            </div>
        </div>
        <h2 className='flex justify-end italic text-md'>-a message from the principal</h2>
    </div>
  )
}

export default Testimonial