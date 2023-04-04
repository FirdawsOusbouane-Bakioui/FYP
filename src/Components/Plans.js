import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from "react-router-dom"

// import renderSidebarEvent from "./DemoApp"
//import allEvents from "./DemoApp"
// import state from "./DemoApp"
// import DemoApp from './DemoApp'
// import { currentEvents } from "./DemoApp"

export default function Plans() {
    return (
        <>
            <Card style={{ position: "unset" }}>
                <Card.Body>
                    <h2 className="text-center mb-4">Plans</h2>
                    <Link to="/new-plan" className="btn btn-primary w-100 mt-3" style={{ marginTop: 30, backgroundColor: "#35416d", borderColor: "#35416d" }}>New Plan</Link>

                    {/* <strong>My Plans</strong>
            <br></br>
            <div> {'\n'} [Currently no upcoming plans]</div> */}

                    <br></br>
                    <br></br>
                    <div className='demo-app-sidebar-section'>
                        <h2>My Plans ()</h2>
                        <ul>
                            {/* {allEvents} */}
                            {/* {DemoApp.state.currentEvents.map(renderSidebarEvent)} */}
                            {/* {currentEvents.map(renderSidebarEvent)} */}
                        </ul>
                    </div>



                </Card.Body>

            </Card>


        </>

    )
}
