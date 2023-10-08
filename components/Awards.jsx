import React from 'react';
import Image from 'next/image';

import { styles } from '@/styles';
import { awards } from '@/constants';

const Awards = () => {
  return (
    <div className="mt-4 p-4 border-[1px] max-md:border-none  rounded-xl">
        <div className="p-4 bg-orange-400 rounded-xl border-[1px] shadow-xl text-white ">
            <div className="flex justify-center font-serif text-2xl max-md:text-xl mb-2">Awards & Accomplishments</div>
            <div className='p-2 mt-2'>
                <marquee className="">
                    <div className="flex gap-4">
                        {awards.map((image, index)=> (
                            <Image src={image} alt={`image + ${index}`} className={`${styles.marqueePictures}`}/>
                        ))}
                    </div>
                </marquee>
            </div>
        </div>
    </div>
  )
}

export default Awards