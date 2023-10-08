import React from 'react'
import Image from 'next/image'

const FacultyCard = ({faculty}) => {
  return (
    <div className="">
        <div className="flex flex-col items-center justify-center p-2 border-[1px] m-2 rounded-lg shadow-lg">
            <Image src={faculty.image} alt="staff" className="rounded-lg" />
            <h2 className='text-white text-lg mt-2'>{faculty.name}</h2>
            <p className='text-xs text-white italic mb-2'>{faculty.designation}</p>
        </div>
    </div>
  )
}

export default FacultyCard