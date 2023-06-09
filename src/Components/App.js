import React from "react"
import Signup from "./Signup"
import { Container } from 'react-bootstrap'
import { AuthProvider } from "../Contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./Navbar"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile";
//this is a new change
import Plans from "./Plans"
//import {MyCalendar as Calendar} from "./Calendar"
import DemoApp from "./DemoApp"
//import { App as Calendar } from "@jc-calendar/src/components/App";
import Profile from "./Profile"
import Dashboard from "./Dashboard";
//import NewPlan from "./NewPlan"
import FormDB from "./FormDB"
//import {ReminderContainer as NewPlan} from "@jc-calendar";

//import Navbar from "./Components/Dashboard";

// was line21= <PrivateRoute exact path = "/" element={<Dashboard/>} />

function App() {
  return (
    <>
     {/* <Container className= "d-flex align-items-center justify-content-center"
       style={{ minHeight: "100vh"}}    
     > */}
    <Container > 
        {/* <div className="w-100" style={{ maxWidth: '400px'}}> */}
        <div>
          <Router>
            <AuthProvider>
              <Navbar style={{position: "relative"}}/>
            <Routes>
                <Route path ='/'
                element ={
                  <PrivateRoute>
                    <Dashboard/>
                  </PrivateRoute>
                }>
                </Route>
                  <Route path ='/plans'
                  element ={
                    <PrivateRoute>
                      <Plans/>
                    </PrivateRoute>
                  }></Route>

                  <Route path ='/calendar'
                  element ={
                    <PrivateRoute>
                      {/* <Calendar/> */}
                      <DemoApp />
                    </PrivateRoute>
                  }></Route>

                  <Route path ='/profile'
                  element ={
                    <PrivateRoute>
                      <Profile/>
                    </PrivateRoute>
                  }></Route>

                <Route path ='/update-profile'
                element ={
                  <PrivateRoute>
                    <UpdateProfile/>
                  </PrivateRoute>
                }></Route>

                <Route path ='/new-plan'
                element ={
                  <PrivateRoute>
                    {/* <NewPlan/> */}
                    <FormDB/>
                  </PrivateRoute>
                }></Route>

                <Route path = "/signup" element={<Signup/>} />
                <Route path = "/login" element={<Login/>} />
                <Route path = "/forgot-password" element={<ForgotPassword/>} />
              </Routes>
              {/* <React.Fragment>
                <Navbar/>
              </React.Fragment> */}
            </AuthProvider>
          </Router>

        </div>
    </Container>
    </>
  )
}

export default App;
