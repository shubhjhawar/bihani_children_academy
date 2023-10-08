import React from 'react';

const HistoryContainer = ({title, content, index}) => {
  return (
    <div className={`p-4 my-4 border-[1px] rounded-lg flex flex-col shadow-lg`}>
        <h2 className={`text-white text-xl font-sans font-semibold underline tracking-wide`}>{title}</h2>
        <p className={`text-zinc-700 font-sans`}>{content}</p>
    </div>
  )
}

export default HistoryContainer