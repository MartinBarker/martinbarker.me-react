import React from "react"
import Signup from "./Signup"
import { AuthProvider } from "../Contexts/AuthContext"

function App() {
  return (
    <AuthProvider>
      <div className="App">
        Hello World!

        <Signup/>
      </div>
    </AuthProvider>


  );
}

export default App;
