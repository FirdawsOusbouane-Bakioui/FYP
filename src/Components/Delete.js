// import React from 'react'

//  export default function Calendar() {
//    return (
//      <div>Calendar</div>
//    )
//  }

// import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import React, { Component } from 'react';
import { Calendar } from '@fullcalendar/core';

const eventData = {
  title: document.getElementById('title').value,
  data: document.getElementById('date').value,
  location: document.getElementById('location').value,
};

// /// const events = [
// ///   { title: 'Meeting', start: new Date() }
// /// ]

// export function DemoApp() {
//   return (
//     <div>
//       <h1>Demo App</h1>
//       <FullCalendar
//         plugins={[dayGridPlugin]}
//         initialView='dayGridMonth'
//         weekends={false}
//         //events={events}
//         events={[]} // Pass the events as a prop or fetch them from a server
//         eventContent={renderEventContent}
//       />
//     </div>
//   )
// }

// // a custom render function
// function renderEventContent(eventInfo) {
//   return (
//     <>
//       <b>{eventInfo.timeText}</b>
//       <i>{eventInfo.event.title}</i>
//     </>
//   )
// }




function MyCalendar() {
  return (
    <div>
      <h1>My Calendar</h1>
      <Calendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={eventData}
      />
    </div>
  );
}


export default MyCalendar;


