import React from 'react'

import { ActivityCard } from '@/components';
import { cocurricular } from '@/constants';

const CoCurricular = () => {
  return (
    <div className="h-auto">
    {cocurricular.map((func, index)=>(
      <ActivityCard key={index} title={func.title} desc={func.desc} image={func.image} index={index}/>
    ))}
  </div>
  )
}

export default CoCurricular