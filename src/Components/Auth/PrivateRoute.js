import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../../Contexts/AuthContext'

const PrivateRoute = ({ children }) => {

  // Add your own authentication on the below line.
  //const isLoggedIn = AuthService.isLoggedIn()

  const { currentUser } = useAuth()
  console.log('PrivateRoute currentUser = ', currentUser)

  return (
    <>
      {
      currentUser ? (
          children
        ) : (
          //redirect to /login if user is not signed in
          <Navigate to={{ pathname: '/login'}} />
        )
      }
    </>
  )
}

export default PrivateRoute