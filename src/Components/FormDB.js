import React, { useState, useEffect } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { Link, useNavigate } from "react-router-dom";

//import AddToCalendar from '@culturehq/add-to-calendar';
//import "@culturehq/add-to-calendar/dist/styles.css";
// query, limit,
import { collection, doc, setDoc, deleteDoc, onSnapshot, updateDoc } from 'firebase/firestore';
import { db } from '../Firebase';
import { v4 as uuidv4 } from 'uuid';


export default function FormDB() {
    const calEvents = collection(db, 'events');

    const [plans, setPlans] = useState([]);
    const [loading, setLoading] = useState(false);

    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [location, setLocation] = useState('');

    const [error, setError] = useState('')
    const navigate = useNavigate()

    //WHAT HAPPENS ON SUBMIT
    async function handleSubmit(e) {
        e.preventDefault()

        // const eventData = {
        //     title: document.getElementById('title').value,
        //     start: document.getElementById('date').value,
        //     location: document.getElementById('location').value,
        // };
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

    //READ EVENTS DB
    useEffect(() => {
        // const q = query(
        //     calEvents,
        //     limit(10)
        // );

        setLoading(true);
        // const unsub = onSnapshot(q, (querySnapshot) => {
        const unsub = onSnapshot(calEvents, (querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                items.push(doc.data());
            });
            setPlans(items);
            setLoading(false);
        });
        return () => {
            unsub();
        };

        // eslint-disable-next-line
    }, []);

    //ADD NEW EVENT
    async function addEvent() {
        const newEvent = {
            id: uuidv4(),
            title,
            date,
            time,
            location,
        };

        try {
            const eventRef = doc(calEvents, newEvent.id);
            await setDoc(eventRef, newEvent);
        } catch (error) {
            console.error(error);
        }
    }

    //DELETE EVENT
    async function deleteEvent(event) {
        try {
            const eventRef = doc(calEvents, event.id);
            await deleteDoc(eventRef, eventRef);
        } catch (error) {
            console.error(error);
        }
    }

    // UPDATE EVENT
    async function updateEvent(event) {
        const updatedEvent = {
            title: "newTitle",

        };

        try {
            const eventRef = doc(calEvents, event.id);
            updateDoc(eventRef, updatedEvent);
        } catch (error) {
            console.error(error);
        }
    }

    //READ DB
    // async function readDB(event) {
    //     plans.map((event) => (
    //         <div className="event" key={event.id}>
    //             <h2>{event.title}</h2>
    //             <p>{event.date}</p>
    //             <p>{event.time}</p>
    //             <p>{event.location}</p>
    //             <div>
    //                 <button onClick={() => deleteEvent(event)}>X</button>
    //                 <button onClick={() => updateEvent(event)}>Edit Event</button>
    //             </div>
    //         </div>
    //     ))
    // }

    return (
        <>
            <Card style={{ position: "unset" }}>
                <Card.Body>
                    <h2 className="text-center mb-4">The New New Plan</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="title">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="title" value={title} required
                                onChange={(e) => setTitle(e.target.value)} />
                        </Form.Group>
                        <Form.Group id="date">
                            <Form.Label>Date</Form.Label>
                            <Form.Control type="date" value={date}
                                onChange={(e) => setDate(e.target.value)} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Time</Form.Label>
                            <Form.Control type="time" value={time}
                                onChange={(e) => setTime(e.target.value)} />
                        </Form.Group>
                        <Form.Group id="location">
                            <Form.Label>Location</Form.Label>
                            <Form.Control type="location" value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                placeholder="Leave blank to decide later" />
                        </Form.Group>
                        <Button disabled={loading} className="w-100" style={{ marginTop: 30, backgroundColor: "#35416d", borderColor: "#35416d" }} type="submit"
                            onClick={() => addEvent()}>
                            Create Plan
                            {/* <FullCalendar
                                events={events}
                            /> */}
                        </Button>
                    </Form>
                    {plans.map((event) => (
                        <div className="event" key={event.id}>
                            <h2>{event.title}</h2>
                            <p>{event.date}</p>
                            <p>{event.time}</p>
                            <p>{event.location}</p>
                            <div>
                                <button onClick={() => deleteEvent(event)}>X</button>
                                <button onClick={() => updateEvent(event)}>Edit Event</button>
                            </div>
                        </div>
                    ))}
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                <Link to="/plans">Cancel</Link>
            </div>

        </>
    )
}
