import Link from 'next/link';
import React from 'react'

const AcademicsTable = ({heading, content}) => {
  return (
    <div className="w-full border-[1px] rounded-lg shadow-lg p-2">
        <div className="flex justify-center bg-orange-500 text-white">
            <div className='w-1/2 flex justify-center border-[1px] p-4'>Class</div>
            <div className='w-1/2 flex justify-center border-[1px] p-4'>{heading}</div>
        </div>
        {content.map((element, index) => (
            <div key={index} className='flex w-full justify-center'>
                <div className='w-1/2 flex justify-center border-r-[1px] border-b-[1px] p-2 font-bold'>{element.class}</div>
                <div className='w-1/2 flex justify-center border-b-[1px] p-2 cursor-pointer '>
                <Link
                    href="https://www.youtube.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=' '
                    >
                    <p className='border-[1px] py-1 px-5 bg-transparent hover:bg-gray-100 rounded-full transition-all duration-300 ease-in-out hover:text-red-500 shadow-md'>{element.file}</p>
                </Link>
                {/* pdf file not rendering */}
                </div>
            </div>
        ))}
    </div>
  )
}

export default AcademicsTable