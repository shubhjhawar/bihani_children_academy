import React from 'react';

import { notices } from '@/constants';
import { NoticeCard } from '.';

const Notices = () => {
  return (
    <div className="p-4 bg-orange-300 rounded-lg shadow-xl">
        <h1 className='w-full flex justify-center font-semibold uppercase mb-2 italic underline'>NOTICES</h1>
        <div className="p-4 h-full grid grid-cols-2">
            {notices.map((notice, index) => (
            <NoticeCard key={index} date={notice.date} title={notice.title} />
            ))}
        </div>
    </div>
  )
}

export default Notices