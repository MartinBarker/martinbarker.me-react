// This is used to determine if a user is authenticated and
// if they are allowed to visit the page they navigated to.

// If they are: they proceed to the page
// If not: they are redirected to the login page.
import React from 'react'
import { Navigate, Route } from 'react-router-dom'
import { useAuth } from '../Contexts/AuthContext'

const PrivateRoute = ({ component: Component, ...rest }) => {

  // Add your own authentication on the below line.
  //const isLoggedIn = AuthService.isLoggedIn()

  const { currentUser } = useAuth()
  console.log('PrivateRoute currentUser = ', currentUser)

  return (
    <Route
      {...rest}
      render={props =>
        currentUser ? (
          <Component {...props} />
        ) : (
          //redirect to /login if user is not signed in
          <Navigate to={{ pathname: '/login'}} />
        )
      }
    />
  )
}

export default PrivateRoute