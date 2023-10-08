import React from 'react';

import { ActivityCard } from '@/components';
import { annualfunction } from '@/constants';

const AnnualFunction = () => {
  return (
    <div className="h-auto">
      {annualfunction.map((func, index)=>(
        <ActivityCard key={index} title={func.title} desc={func.desc} image={func.image} index={index}/>
      ))}
    </div>
  )
} 

export default AnnualFunction