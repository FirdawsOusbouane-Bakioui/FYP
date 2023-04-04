import { useRef } from "react"
import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";     //Fa = Font Awesome
import "../Styles/main.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../Contexts/AuthContext';
import { Alert } from 'react-bootstrap'



function Navbar() {
    const navRef = useRef();        //refers to the below nav tag
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")       //so each time this function is called, this classname "" is either removed or added from the classlist
    }

    const [error, setError] = useState("")
    const { logout } = useAuth()
    const navigate = useNavigate()

    async function handleLogout() {
        setError('')
        try {
            await logout()
            navigate('/login')

        } catch {
            setError('Failed to Log Out')
        }
    }
    return (
        <>
            <header>
                <h3>Whats the Plan?</h3>
                {error && <Alert variant="danger">{error}</Alert>}
                <nav  ref={navRef}>          {/*added onClick to all elements so navbad closes once clicked*/}
                    <Link to="/" onClick={showNavbar}>Dashboard</Link>
                    <Link to="/plans" onClick={showNavbar}>Plans</Link>
                    <Link to="/calendar" onClick={showNavbar}>Calendar</Link>
                    <Link to="/profile" onClick={showNavbar}>Profile</Link>
                    <div className="w-100 text-center mt-2">
                        <Link variant="link" onClick={handleLogout}>Log Out</Link>
                    </div>
                    <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                        <FaTimes />
                    </button>
                </nav>
                <button className="nav-btn" onClick={showNavbar}>   {/*can have the same onClick on both buttons cuz they arent shown at the same time */}
                    <FaBars />
                </button>
            </header>
        </>

    );
}

export default Navbar;