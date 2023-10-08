import React from 'react';

import { AcademicsTable } from "@/components";
import { syllabus } from '@/constants';

const Syllabus = () => {
  return (
    <div className="h-auto flex flex-col">
      <h1 className='flex justify-center item-center text-4xl text-white mt-5 font-sans tracking-wide'>Syllabus Breakup</h1>
      <div className='flex justify-center item-center mt-5'>
        <AcademicsTable heading="Syllabus" content={syllabus}/>  
      </div>
    </div>
  )
}

export default Syllabus