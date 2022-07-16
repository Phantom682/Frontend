import "./Components/Navbar/Navbar.css";
import "./Components/Footer/Footer.css";
import "./Components/Signup/Signup.css";
import "./Components/Profile/Profile.css";
import Footer from "./Components/Footer/Footer.js";
import Signup from "./Components/Signup/Signup.js";
import Profile from "./Components/Profile/Profile.js";
import Login from "./Components/Login/Login.js";
import Navbar from "./Components/Navbar/Navbar.js";
import Steppers from "./Components/Stepper/Stepper.js";
import OTP from "./Components/Otp/Otp.js";
import {OtpContext} from "./Components/Signup/context.js";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import React, { useState } from 'react';

function App() {


  const [userId, setUserId] = useState({
    userId: ''
  });
  
  return (
    <>
    
  
    <OtpContext.Provider value={{userId, setUserId}}>
      <Router>
      
        <Navbar/>
        <Routes>
          
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />}/>
          <Route exact path="/otpvr" element={<OTP />} />
          <Route exact path="/profile" element={<Profile />} />
          
          
        </Routes>

        <Steppers/>

        <Footer />
      </Router>
      </OtpContext.Provider>

      

    </>
  );
}

export default App;
