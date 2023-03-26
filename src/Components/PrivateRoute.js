import React from 'react'
//import { Route, Navigate, Routes } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../Contexts/AuthContext'


// export default function PrivateRoute({component: Component, ...rest}) {
//     const { currentUser } = useAuth()
//     return (
//         <Routes>
//         <Route
//             {...rest}
//             render = {props => {
//                 return currentUser ? <Component {...props} /> : <Navigate to ="/login" />

//             }}
//         >
//         </Route>
//         </Routes>
//     )
// }

export default function PrivateRoute({children}) {
    const { currentUser } = useAuth()
    return currentUser ? children : <Navigate to ="/login" />
}
