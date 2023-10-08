import React from 'react';

import { HistoryContainer } from '@/components';
import { history } from '@/constants';
import { styles } from '@/styles';

const History = () => {
  return (
    <div className="h-auto">
      <h1 className={`${styles.pageHeading}`}>History</h1>
      {history.map((element, index) => (
        <div className="">
          <HistoryContainer key={index} title={element.title} content={element.content} index={index} />
        </div>
      ))}
    </div>
  )
}

export default History