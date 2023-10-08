import React from 'react';

import { ActivityCard } from '@/components';
import { awardsPage } from '@/constants';

const Awards = () => {
  return (
    <div className="h-auto">
    {awardsPage.map((func, index)=>(
      <ActivityCard key={index} title={func.title} desc={func.desc} image={func.image} index={index}/>
    ))}
  </div>
  )
}

export default Awards