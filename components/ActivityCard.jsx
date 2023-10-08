import React from 'react'
import Image from 'next/image'

import { one } from '@/assets'

const ActivityCard = ({title, desc, image, index}) => {
  return (
    <div className={`font-sans flex max-md:flex-col  p-2 ${index%2==0 ? "flex-row" :  "flex-row-reverse"}`}>
    <div className=" w-1/2 max-md:w-full">
      <div className=''>
        <h1 className="p-4 text-3xl md:text-2xl text-white font-semibold tracking-wide ">{title}</h1>
        <div className='w-[150px] h-[5px] rounded-3xl bg-yellow-300 -mt-3 ml-4'/>
      </div>
      <p className="p-4 text-sm lg:leading-7  leading-4 tracking-wide text-white">{desc}</p>
    </div>
    <div className="p-6 w-1/2 max-md:w-full">
      <div className="hover:scale-105 transition ease-in-out duration-300 flex items-center justify-center">
        <Image
          src={image}
          className=' w-4/5 h-4/5 rounded-2xl shadow-2xl'
        />
      </div>
    </div>
  </div>
  )
}

export default ActivityCard