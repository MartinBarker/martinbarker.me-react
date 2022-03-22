import React from "react"
import Signup from "./Signup"
import Login from "./Login"
import Tagger from "./Tagger"
import ForgotPassword from "./ForgotPassword"
import PrivateRoute from './PrivateRoute'
import UpdateProfile from "./UpdateProfile"
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

        <Route path="/" element={ <PrivateRoute> <Dashboard /> </PrivateRoute> } />
        <Route path="/update-profile" element={ <PrivateRoute> <UpdateProfile /> </PrivateRoute> } />


          <Route exact path="/signup" element={<Signup/>}/> 
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/forgot-password" element={<ForgotPassword/>}/>
          <Route exact path="/tagger" element={<Tagger/>}/>

        </Routes>

      </AuthProvider>
    </Router>



  );
}

export default App;
