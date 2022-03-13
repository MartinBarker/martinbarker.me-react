import React from "react"
import Signup from "./Signup"
import Login from "./Login"

import PrivateRoute from './PrivateRoute'

import Dashboard from "./Dashboard"
import { AuthProvider } from "../Contexts/AuthContext"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  return (
    <Router>
      <AuthProvider>

        <Routes>

          <Route exact path="/" element={<Dashboard/>}/> 

          {/* <PrivateRoute exact path="/" component={Dashboard} /> */}


          <Route exact path="/signup" element={<Signup/>}/> 
          <Route exact path="/login" element={<Login/>}/>

        </Routes>

      </AuthProvider>
    </Router>



  );
}

export default App;
