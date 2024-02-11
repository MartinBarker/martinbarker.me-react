import React from "react"
import Tagger from "./Tagger/Tagger"
import Home from "./Home"
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
import Sidebar from "./Sidebar"
import ColorTest from './ColorTest'
import NavBar from './NavBar'

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route exact path="/" element={ <MainSidebar> <Home/> </MainSidebar> } />
          <Route exact path="/nav" element={ <NavBar> CONTENT </NavBar> } />
          <Route exact path="/ColorTest" element={<ColorTest />} />
          <Route exact path="/responsivemobileview" element={<ResponsiveMobileView/> } />
          <Route exact path="/rendertune" element={ <MainSidebar> <RenderTune/> </MainSidebar> } />
          <Route exact path="/tagger" element={ <MainSidebar> <Tagger/> </MainSidebar> } />
          <Route exact path="/sidebar" element={ <Sidebar> "here is mainsidebar content" </Sidebar> } />

          {/* Auth */}
          <Route path="/profile" element={<MainSidebar>  <PrivateRoute> <Dashboard /> </PrivateRoute> </MainSidebar>} />           
          <Route path="/update-profile" element={<MainSidebar><PrivateRoute> <UpdateProfile /> </PrivateRoute></MainSidebar>} />
          <Route exact path="/signup" element={<MainSidebar><Signup/></MainSidebar>} />
          <Route exact path="/login" element={<MainSidebar><Login/></MainSidebar>} />
          <Route exact path="/forgot-password" element={<MainSidebar> <ForgotPassword/> </MainSidebar>  } />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
