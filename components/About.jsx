import React from 'react';
import Image from 'next/image';

import { one } from '@/assets'

const About = () => {
  return (
    <div className="font-sans grid grid-cols-2 max-md:grid-cols-1 p-2">
      <div className="h-auto ">
        <div className=''>
          <h1 className="p-4 text-3xl md:text-2xl text-white font-semibold tracking-wide ">Bihani Children's Academy</h1>
          <div className='w-[150px] h-[5px] rounded-3xl bg-yellow-300 -mt-3 ml-4'/>
        </div>
        <p className="p-4 text-sm lg:leading-7  leading-4 tracking-wide text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi malesuada velit quis felis varius, sit amet hendrerit metus ornare. Curabitur sollicitudin nulla ante, sed efficitur arcu ultricies sit amet. Nam placerat felis eget nunc suscipit, sit amet consequat turpis varius. Maecenas sapien dui, maximus ut porta et, posuere ut urna. </p>
        <div className="p-4">
         <a href="/about">
         <button
            type="button"
            className='p-2 text-lg rounded-full bg-gray-100 text-red-500 hover:bg-transparent hover:border-white hover:border-[1px] hover:text-white shadow-lg hover:shadow-xl w-1/4 transition-all duration-300 ease-in-out'
          >
            More...
          </button>
         </a>
        </div>
      </div>
      <div className="p-6 ">
        <div className="hover:scale-105 transition ease-in-out duration-300">
          <Image
            src={one}
            className='w-full h-full rounded-2xl shadow-2xl'
          />
        </div>
      </div>
    </div>
  )
}

export default About