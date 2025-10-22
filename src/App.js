import './App.css'
import Alert from './Components/Alert'
import Navbar from './Components/Navbar'
import TextForm from './Components/TextForm'
import About from './Components/About'
import react, { useState } from 'react'
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";


const App = () => {

  const [mode, setMode] = useState('light')   // Whether darkmode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#052c65'
      showAlert(" Dark Mode has been enabled...!", "success")
      // setInterval(() => {
      //   document.title = "STK | Utils Dark Mode"
      // }, 1500)
      // setInterval(() => {
      //   document.title = "STK | Utils Light Mode"
      // }, 2000)
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode has been enabled...!", "success")
      // document.title = "STK | Utils Light Mode"
    }
  }
  return (
    <>
      {/* <Navbar/> */}
      {/* <Navbar title="STK_Utils" mode={mode} toggleMode={toggleMode} /> */}
      <Router>
        <Navbar title="STK_Utils" aboutText="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className='container-3'>
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<TextForm heading="Enter The Text Here To Analyze" mode={mode} showAlert={showAlert} />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}
export default App