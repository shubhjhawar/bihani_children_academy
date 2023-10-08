import React from 'react';

import { HistoryContainer } from '@/components';
import { history } from '@/constants';

const History = () => {
  return (
    <div className="h-auto">
      {history.map((element, index) => (
        <HistoryContainer key={index} title={element.title} content={element.content} index={index} />
      ))}
    </div>
  )
}

export default History