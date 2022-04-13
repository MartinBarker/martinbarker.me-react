import React from "react"
import SidebarColorsTemplate from "./SidebarColorsTemplate"
import Signup from "./Signup"
import Login from "./Login"
import Tagger from "./Tagger"
import RenderTune from "./RenderTune"
import SidebarCss from "./SidebarCss"
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

          <Route path="/" element={<PrivateRoute> <Dashboard /> </PrivateRoute>} />
          <Route path="/update-profile" element={<PrivateRoute> <UpdateProfile /> </PrivateRoute>} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/forgot-password" element={<ForgotPassword />} />
          <Route exact path="/tagger" element={<Tagger />} />
          <Route exact path="/rendertune" element={ <SidebarColorsTemplate> <RenderTune/> </SidebarColorsTemplate> } />
          <Route exact path="/SidebarColorsTemplate" element={ <SidebarColorsTemplate></SidebarColorsTemplate> } />

          <Route exact path="/SidebarCss" element={<SidebarCss></SidebarCss>}/>


        </Routes>

      </AuthProvider>
    </Router>



  );
}

export default App;
