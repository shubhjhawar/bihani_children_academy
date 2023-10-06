"use client";
import React, {useState, useEffect} from 'react';
import Image from 'next/image';

import {one, two, three, four, five, six} from "@/assets";
import {AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";

const images = [one, two, three, four, five, six]

const Banner = () => {
  const [img, setImg] = useState(0);  

  useEffect(() => {
    const changeImageRandomly = () => {
      const newIndex = Math.floor(Math.random() * images.length);
      setImg(newIndex);
    };

    const intervalId = setInterval(changeImageRandomly, 3500);

    return () => clearInterval(intervalId);
  }, [img])

  const handleChange = ({direction}) => {
    if(direction == 'left' && img > 1)
    {
      setImg(img - 1);
    }

    if(direction == 'right' && img < images.length-1)
    {
      setImg(img + 1);
    }

  }

  console.log(img)
  
  return (
    <div className='w-full'>
      <Image
        src={images[img]}
        alt="school"
        className='w-full object-cover rounded-lg shadow-2xl'
      />
       <div className='max-md:hidden block relative transform -translate-y-[400px] flex justify-between w-full'>
        <button
          type="button"
          onClick={() => handleChange({ direction: 'left' })}
        >
          <AiFillLeftCircle className='text-gray-300 text-5xl cursor-pointer' />
        </button>
        <button
          type="button"
          onClick={() => handleChange({ direction: 'right' })}
         
        >
          <AiFillRightCircle className='text-gray-300 text-5xl cursor-pointer' />
        </button>
      </div>
    </div>
  )
}

export default Banner