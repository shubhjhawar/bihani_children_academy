import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';


const localizer = momentLocalizer(moment);

const events = [
  {
    title: 'Event 1',
    start: new Date(2023, 9, 10),
    end: new Date(2023, 9, 10),
  },
  {
    title: 'Event 2',
    start: new Date(2023, 9, 15),
    end: new Date(2023, 9, 15),
  },
  {
    title: 'Event 3',
    start: new Date(2023, 9, 25),
    end: new Date(2023, 9, 25),
  },
  // Add more events as needed
];

const MyCalendar = () => {
  const [date, setDate] = useState(new Date());

  const handlePrev = () => {
    const newDate = moment(date).subtract(1, 'months').toDate();
    setDate(newDate);
  };

  const handleNext = () => {
    const newDate = moment(date).add(1, 'months').toDate();
    setDate(newDate);
  };

  const customDayPropGetter = (date) => {
    const isToday = moment(date).isSame(new Date(), 'day');
    const hasEvent = events.some((event) =>
      moment(event.start).isSame(date, 'day')
    );
  
    const dayClasses = `relative ${
      hasEvent
        ? 'bg-orange-500 hover:bg-orange-600'
        : isToday
        ? 'bg-red-200'
        : 'hover:bg-gray-200'
    }`;
  
    return {
      className: dayClasses,
    };
  };
  

  return (
    <div>
      <Calendar
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 350, width: '100%' }}
        className="bg-gradient-to-b from-yellow-300 to-orange-400 p-4 rounded-lg shadow-2xl"
        views={['month']}
        date={date}
        onNavigate={(newDate) => setDate(newDate)}
        dayPropGetter={customDayPropGetter}
        components={{
          toolbar: (props) => (
            <div>
                <h1 className='w-full flex justify-center font-semibold uppercase mb-2 italic underline'>Academic Calendar</h1>
                <div className="mb-4 flex items-center justify-between">
                    <button onClick={handlePrev} className="px-2 py-1 rounded bg-blue-500 text-white">
                        Previous
                    </button>
                <div className="text-lg font-semibold">
                    {moment(props.date).format('MMMM YYYY')}
                </div>
                    <button onClick={handleNext} className="px-2 py-1 rounded bg-blue-500 text-white">
                        Next
                    </button>
                </div>
            </div>
          ),
          event: () => null,
        }}
      />
    </div>
  );
};

export default MyCalendar;
