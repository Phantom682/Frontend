import "./Components/Navbar/Navbar.css";
import "./Components/Footer/Footer.css";
import "./Components/Profile/Profile.css";
import "./Components/Login/Login.css";
import Footer from "./Components/Footer/Footer.js";
import ResetPassword from "./Components/Forget/ResetPassword.js";
import Profile from "./Components/Profile/Profile.js";
import Login from "./Components/Login/Login.js";
import Navbar from "./Components/Navbar/Navbar.js";
import Steppers from "./Components/Stepper/Stepper.js";
import Otp from "./Components/Otp/Otp.js";
import VerifyOtp from "./Components/Forget/VerifyOtp.js";
import VerifyEmail from "./Components/Forget/VerifyEmail.js";
import { OtpContext } from "./Components/Signup/context.js";
import { EmailContext } from "./Components/Signup/context.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";

function App() {
  const [userId, setUserId] = useState({
    userId: "",
  });
  const [email, setEmail] = useState({
    email: "",
  });

  return (
    <>
      <OtpContext.Provider value={{ userId, setUserId }}>
        <EmailContext.Provider value={{ email, setEmail }}>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Steppers />} />
              <Route path="/vemail" element={<VerifyEmail />} />
              <Route path="/login" element={<Login />} />
              <Route exact path="/otpvr" element={<Otp />} />
              <Route exact path="/votp" element={<VerifyOtp />} />
              <Route exact path="/newpass" element={<ResetPassword />} />
              <Route exact path="/profile" element={<Profile />} />
            </Routes>
            <Footer />
          </Router>
        </EmailContext.Provider>
      </OtpContext.Provider>
    </>
  );
}

export default App;
