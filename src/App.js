import { useState } from 'react';
import './App.css';
//import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import React from "react";
/*import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";*/

function App() {
  const [mode, setMode] = useState('light'); // Default mode is light

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    } else {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
    }
  };

  return (
    <>
      {/* <Router> */}
        <Navbar
          title="TextEditor"
          hometext="Home Page"
          Aboutus="About"
          mode={mode}
          toggleMode={toggleMode}
        />
        <div className="container my-3">
          {/* <Routes> */}
            {/* <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<Textform Heading="Enter the text to analyze below" />} /> */}
          {/* </Routes> */}
          <Textform Heading="Enter the text to analyze below" mode={mode} />
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
