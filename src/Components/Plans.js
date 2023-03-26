import React from 'react'
import { Card } from 'react-bootstrap'
import { Link} from "react-router-dom"

export default function Plans() {
    return (
    <>
    <Card style={{position: "unset"}}>
        <Card.Body>
            <h2 className="text-center mb-4">Plans</h2>
            <Link to="/new-plan" className="btn btn-primary w-100 mt-3">New Plan</Link>

            <strong>My Plans</strong>
            <br></br>
            <div> {'\n'} [Currently no upcoming plans]</div>
        </Card.Body>

    </Card>

    
    </>

  )
}
