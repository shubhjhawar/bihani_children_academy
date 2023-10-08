import React from 'react'

import { ActivityCard } from '@/components';
import { extracurricular } from '@/constants';

const Extra = () => {
  return (
    <div className="h-auto">
      {extracurricular.map((func, index)=>(
        <ActivityCard key={index} title={func.title} desc={func.desc} image={func.image} index={index}/>
      ))}
    </div>
  )
}

export default Extra