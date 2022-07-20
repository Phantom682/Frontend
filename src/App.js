import "./Components/Navbar/Navbar.css";
import "./Components/Footer/Footer.css";
import "./Components/Profile/Profile.css";
import "./Components/Login/Login.css";
import "./Components/Navbar/Navbar2.css";
import Footer from "./Components/Footer/Footer.js";
import ResetPassword from "./Components/Forget/ResetPassword.js"
import Profile from "./Components/Profile/Profile.js";
import Login from "./Components/Login/Login.js";
import Navbar from "./Components/Navbar/Navbar.js";
import Steppers from "./Components/Stepper/Stepper.js";
import Otp from "./Components/Otp/Otp.js";
import VerifyOtp from "./Components/Forget/VerifyOtp.js";
import VerifyEmail from "./Components/Forget/VerifyEmail.js";
import Navbar2 from "./Components/Navbar/Navbar2.js";
import {OtpContext} from "./Components/Signup/context.js";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import React, { useState } from 'react';
import Stepper2 from "./Components/Stepper/Stepper2";

function App() {


  const [userId, setUserId] = useState({
    userId: ''
  });
  
  return (
    <>
    
  
    <OtpContext.Provider value={{userId, setUserId}}>
      <Router>
        
        <Navbar/>
        <Navbar2/>
        <Routes>
          
          <Route path="/" element={<Steppers />} /> 
          <Route path="/vemail" element={<VerifyEmail />} />             
          <Route path="/login" element={<Login />}/>
          <Route exact path="/otpvr" element={<Otp/>} />
          <Route exact path="/step" element={<Stepper2/>} />
          <Route exact path="/votp" element={<VerifyOtp />} />
          <Route exact path="/newpass" element={<ResetPassword />} />
          <Route exact path="/profile" element={<Profile />} />
          
          
        </Routes>

        

        <Footer />
      </Router>
      </OtpContext.Provider>

      

    </>
  );
}

export default App;
