import React from 'react';

import { FacultyCard } from '@/components';
import { faculties } from '@/constants';

import { styles } from '@/styles';


const Faculty = () => {
  return (
    <div className="h-auto">
      <div className='p-4'>
        <h1 className={`${styles.pageHeading}`}>Faculty</h1>
        <div className='p-4 grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1'>
          {faculties.map((faculty, index) => (
            <FacultyCard key={index} faculty={faculty}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Faculty