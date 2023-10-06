import React from 'react'

import { styles } from '@/styles';

const NoticeCard = ({date, title}) => {
const dateParts = date.split(' ');
  return (
    <div className="font-raleway border-[1px] border-white bg-orange-100 rounded-lg p-2 m-2 shadow-lg hover:scale-105">
        <div className="flex gap-2 cursor-pointer">
            <div className="w-1/4 border-[2px] border-green-600 flex flex-col justify-center px-1">
                <p className={`${styles.dates}`}>{dateParts[0]}</p>
                <p className={`${styles.dates}`}>{dateParts[1]}</p>
            </div>
            <div className="w-3/4">{title}</div>
        </div>
    </div>
  )
}

export default NoticeCard