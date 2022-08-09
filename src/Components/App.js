import React from "react"
import Signup from "./Signup"
import About from "./About/About"
import Login from "./Login"
import Tagger from "./tagger.site/Tagger"
import SidebarLayout from "./sidebar/SidebarLayout"
import MainSidebar from "./MainSidebar"
import RenderTune from "./RenderTune"
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
          {/* Default home path */}
          <Route path="/" element={ <SidebarLayout> <About /> </SidebarLayout> } />
          <Route path="/profile" element={ <SidebarLayout> <PrivateRoute> <Dashboard /> </PrivateRoute> </SidebarLayout>} />
          <Route path="/update-profile" element={<SidebarLayout> <PrivateRoute> <UpdateProfile /> </PrivateRoute></SidebarLayout>} />
          <Route exact path="/signup" element={ <SidebarLayout><Signup /></SidebarLayout>} />
          <Route exact path="/login" element={ <SidebarLayout> <Login /> </SidebarLayout>} />
          <Route exact path="/forgot-password" element={<ForgotPassword />} />
          <Route exact path="/tagger" element={ <SidebarLayout> <Tagger/> </SidebarLayout> } />
          <Route exact path="/rendertune" element={ <MainSidebar> <RenderTune/> </MainSidebar> } />

      
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
