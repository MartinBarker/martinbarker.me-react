import React from "react"
import Tagger from "./Tagger/Tagger"
import MainSidebar from "./MainSidebar/MainSidebar"
import RenderTune from "./RenderTune/RenderTune"
import ResponsiveMobileView from "./ResponsiveMobileView/ResponsiveMobileView"



import { AuthProvider } from "../Contexts/AuthContext"
import ForgotPassword from "./Auth/ForgotPassword"
import PrivateRoute from './Auth/PrivateRoute'
import UpdateProfile from "./Auth/UpdateProfile"
import Dashboard from "./Auth/Dashboard"
import Signup from "./Auth/Signup"
import Login from "./Auth/Login"

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
          <Route path="/" element={<PrivateRoute> <Dashboard /> </PrivateRoute>} />
          <Route path="/update-profile" element={<PrivateRoute> <UpdateProfile /> </PrivateRoute>} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/forgot-password" element={<ForgotPassword />} />

          <Route exact path="/tagger" element={ <MainSidebar> <Tagger/> </MainSidebar> } />

          <Route exact path="/responsivemobileview" element={<ResponsiveMobileView/> } />

          

          <Route exact path="/rendertune" element={ <MainSidebar> <RenderTune/> </MainSidebar> } />
    

      
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
