import React, { useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { Link, useNavigate } from "react-router-dom";


export default function NewPlan() {

    //const emailRef = useRef()
    //const passwordRef = useRef()
    //const passwordConfirmRef = useRef()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()

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
            <Card>
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
                        <Form.Group id="location">
                            <Form.Label>Location</Form.Label>
                            <Form.Control type="location"
                                placeholder="Leave blank to decide later" />
                        </Form.Group>
                        <Button disabled={loading} className="w-100" style={{ marginTop: 30, backgroundColor: "#35416d", borderColor: "#35416d"}} type="submit">
                            Create Plan
                        </Button>
                    </Form>

                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                <Link to="/plans">Cancel</Link>
            </div>

        </>
    )
}
