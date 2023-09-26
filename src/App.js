import React from "react"
import Tagger from "./Tagger"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/tagger" element={ <Tagger/> } />
        </Routes>
    </Router>
  );
}

export default App;