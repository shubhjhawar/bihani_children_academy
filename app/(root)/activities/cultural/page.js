import React from 'react';

import { ActivityCard } from '@/components';
import { cultural } from '@/constants';

const Cultural = () => {
  return (
    <div className="h-auto">
      {cultural.map((func, index)=>(
        <ActivityCard key={index} title={func.title} desc={func.desc} image={func.image} index={index}/>
      ))}
    </div>
  )
}

export default Cultural