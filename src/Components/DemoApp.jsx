import React from 'react'
// import React, { useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import { formatDate } from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
//import { INITIAL_EVENTS, createEventId } from './event-utils'
import { createEventId } from './event-utils'

//import { Link } from "react-router-dom";

//import { db, DBevents, firestore } from '../Firebase'
//import { addDoc, collection, setDoc, doc} from 'firebase/firestore'
//import { v4 as uuidv4 } from 'uuid';


import { collection } from 'firebase/firestore'
import { db } from '../Firebase';

//export const state =[];
//export const currentEvents =[];


// const [title, setTitle] = useState('');
// const [start, setDesc] = useState('');
// const [end, setScore] = useState('');
// const [allDay, setAllday] = useState('');

const calEvents = collection(db, 'events');

// async function addNewEvent(details) {
//   setDoc(DBevents,{details});

//   //const newEvent = await addDoc(calEvents, {details});
//   // console.log(`Your event was created at '${newEvent.path}'`)
// }

// async function addNewEvent() {
//   const newEvent = {
//     id: uuidv4(),
//     title,
//     start,
//     end,
//     allDay,
//   };

//   try {
//     const eventRef = doc(calEvents, newEvent.id);
//     await setDoc(eventRef, newEvent);
//   } catch (error) {
//     console.error(error);
//   }
// }

export default class DemoApp extends React.Component {

  state = {
    weekendsVisible: true,
    currentEvents: []
  }

  render() {
    return (
      <div className='demo-app'>
        {this.renderSidebar()}
        {/* <div>
          <Link to="/new-plan" className="btn btn-primary w-50 mt-3" style={{ marginTop: 30, backgroundColor: "#2c3e50", borderColor: "#2c3e50", marginLeft: "0%"}}>New Plan</Link>
        <br></br>
        <br></br>
        </div> */}
        <div className='demo-app-main'>
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }}
            initialView='dayGridMonth'
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={this.state.weekendsVisible}
            //initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
            events={calEvents}
            select={this.handleDateSelect}
            //select={newEvent}
            eventContent={renderEventContent} // custom render function
            eventClick={this.handleEventClick}
            eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
          /* you can update a remote database when these fire:*/
          //eventAdd={addNewEvent}
          // eventChange={function(){}}
          // eventRemove={function(){}}

          />
        </div>
      </div>
    )
  }

  renderSidebar() {
    return (
      <div className='demo-app-sidebar'>
        <div className='demo-app-sidebar-section'>
          {/* <h2>Instructions</h2>
          <ul>
            <li>Select dates and you will be prompted to create a new event</li>
            <li>Drag, drop, and resize events</li>
            <li>Click an event to delete it</li>
          </ul> */}
        </div>
        <div className='demo-app-sidebar-section'>
          {/* <label>
            <input
              type='checkbox'
              checked={this.state.weekendsVisible}
              onChange={this.handleWeekendsToggle}
            ></input>
            toggle weekends
          </label> */}
        </div>
        <div className='demo-app-sidebar-section'>
          <h2>All Events ({this.state.currentEvents.length})</h2>
          <ul>
            {/* {this.state.currentEvents.map(renderSidebarEvent)} */}
            {this.state.currentEvents.map(renderSidebarEvent)}
            {/* <li>{allEvents}</li> */}
          </ul>
        </div>
      </div>
    )
  }

  handleWeekendsToggle = () => {
    this.setState({
      weekendsVisible: !this.state.weekendsVisible
    })
  }

  handleDateSelect = (selectInfo) => {
    let title = prompt('Please enter a new title for your event')
    let calendarApi = selectInfo.view.calendar

    calendarApi.unselect() // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      })
      // setTitle(title)
      // addNewEvent()

      // setDoc(calEvents,{
      //   id: '4543',
      //   title: 'MyEvent',
      //   start: selectInfo.startStr,
      //   end: selectInfo.endStr,
      //   allDay: selectInfo.allDay
      // })
    }


  }

  handleEventClick = (clickInfo) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove()
    }
  }

  handleEvents = (events) => {
    this.setState({
      currentEvents: events
    })
  }

}

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  )
}

function renderSidebarEvent(event) {
  return (
    <li key={event.id}>
      <b>{formatDate(event.start, { year: 'numeric', month: 'short', day: 'numeric' })}</b>
      <i>{event.title}</i>
    </li>
  )
}

// function newEvent() {
//   return (
//     // NewPlan()
//     <Link to="'/new-plan"></Link>
//     // navigate("/new-plan")
//   )
// }

// function allEvents(event){
//     return (
//         this.state.currentEvents.map(renderSidebarEvent)
//     )
// }

