import React, { useContext, useState, useEffect } from 'react';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';

// Create a new context
const CalendarContext = React.createContext();

// Create a provider component that will wrap your app
export function CalendarProvider({ children }) {
  const [calendar, setCalendar] = useState(null);

  useEffect(() => {
    setCalendar(
      <Calendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={[
          { title: 'Event 1', date: '2023-04-01' },
          { title: 'Event 2', date: '2023-04-05' },
        ]}
      />
    );
  }, []);

  return (
    <CalendarContext.Provider value={{ calendar }}>
      {children}
    </CalendarContext.Provider>
  );
}

// Create a custom hook to consume the context
export function useCalendar() {
  const context = useContext(CalendarContext);
  if (!context) {
    throw new Error('useCalendar must be used within a CalendarProvider');
  }
  return context;
}
