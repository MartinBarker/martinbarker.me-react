import React from "react"
import Signup from "./Signup"
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

          <Route exact path="/signup" element={<Signup/>}/>

          


        </Routes>

      </AuthProvider>
    </Router>



  );
}

export default App;
