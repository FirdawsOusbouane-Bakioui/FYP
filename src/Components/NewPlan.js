import React, { useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { Link, useNavigate } from "react-router-dom";

//import AddToCalendar from '@culturehq/add-to-calendar';
//import "@culturehq/add-to-calendar/dist/styles.css";

import { useRef } from 'react';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
//import { useNavigate } from 'react-router-dom';
//import { useCalendar } from './CalendarContext';


//TRYING FIRESTORE HERE
// import { firestore } from '../Firebase'
// //import "../Styles/main.css";
// import { addDoc, collection } from 'firebase/firestore'
// import DemoApp from './DemoApp';

//export const state =[];
//export const currentEvents =[];

// const calEvents = collection(firestore, 'events');
// const form = []

// async function addNewEvent(form) {
//     const newEvent = await addDoc(calEvents, {
//         form
//     });
//     console.log('Your event was created at {newEvent.path}');
// }


export default function NewPlan() {

    //const emailRef = useRef()
    //const passwordRef = useRef()
    //const passwordConfirmRef = useRef()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    // const [events, setEvents] = useState([]);
    const calendarRef = useRef(null);
    //const { calendar } = useCalendar();

    //const useNavigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault()

        const eventData = {
            title: document.getElementById('title').value,
            start: document.getElementById('date').value,
            location: document.getElementById('location').value,
        };
        // Add the event to the calendar
        //calendar.addEvent(eventData);
        //let calendarApi = e.view.calendar
        //DemoApp.calendarApi.addEvent({ eventData })

        // // Navigate to the calendar page
        // navigate.push('/calendar');




        try {
            setError("")  //resets Error back to nothing for fresh state
            setLoading(true)  //so stops multiple clicks of submit button creating multiple accounts
            //await signup(emailRef.current.value, passwordRef.current.value)
            navigate("/plans")
        } catch {
            setError('Failed to create plan')
        }
        setLoading(false)


    }
    //this is a new change
    return (
        <>
            <Card style={{ position: "unset" }}>
                <Card.Body>
                    <h2 className="text-center mb-4">New Plan</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="title">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="title" required />
                        </Form.Group>
                        <Form.Group id="date">
                            <Form.Label>Date</Form.Label>
                            <Form.Control type="date" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Time</Form.Label>
                            <Form.Control type="time" />
                        </Form.Group>
                        <Form.Group id="location">
                            <Form.Label>Location</Form.Label>
                            <Form.Control type="location"
                                placeholder="Leave blank to decide later" />
                        </Form.Group>
                        <Button disabled={loading} className="w-100" style={{ marginTop: 30, backgroundColor: "#35416d", borderColor: "#35416d" }} type="submit">
                            Create Plan
                            {/* <FullCalendar
                                events={events}
                            /> */}
                        </Button>
                    </Form>
                    {/* <Calendar
                        ref={calendarRef}
                        plugins={[dayGridPlugin]}
                        initialView="dayGridMonth"
                        events={[]}

                    /> */}
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                <Link to="/plans">Cancel</Link>
            </div>

            {/* <AddToCalendar
                event={{
                    name: "Happy Hour",
                    details: "Let's go after work",
                    location: "Boston, MA",
                    startsAt: "2018-12-06T17:00:00-05:00",
                    endsAt: "2018-12-06T18:00:00-05:00"
                }}
            /> */}


        </>
    )
}
