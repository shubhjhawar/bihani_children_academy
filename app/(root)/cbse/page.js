import React from 'react'

import { styles } from '@/styles';
import { cbse } from '@/constants';
import { HistoryContainer } from '@/components';

const Cbse = () => {
  return (
    <div className="h-auto">
      <div className="p-4">
        <h1 className={`${styles.pageHeading}`}>CBSE Curriculum</h1>
        <p className='text-white my-5'>At Bihani Children's Academy, we take pride in offering a comprehensive education program based on the Central Board of Secondary Education (CBSE) curriculum. The CBSE curriculum is renowned for its excellence, and we are committed to delivering its highest standards to our students.</p>
        <div>
          <h2 className='text-white text-lg font-semibold font-serif'>Key Features of the CBSE Curriculum at Bihani Children's Academy:</h2>
          {cbse.map((element, index) => (
            <div className="">
              <HistoryContainer key={index} title={element.title} content={element.content} index={index} />
            </div>
          ))}
        </div>
        <div className='flex flex-col items-center justify-center'>
          <p className="my-5 text-gray-200 text-smpx-2">As you explore Bihani Children's Academy, you will discover our commitment to excellence in education, our experienced faculty, and the vibrant learning community we offer. For specific details about our implementation of the CBSE curriculum or any inquiries, please don't hesitate to reach out to our academic counselors or administration.</p>
          <p className="my-5 text-gray-300 text-sm">We welcome you to join us on this journey of educational excellence and holistic development at Bihani Children's Academy.</p>
        </div>
      </div>
    </div>
  )
}

export default Cbse