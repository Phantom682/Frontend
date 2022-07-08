import "./Components/Navbar/Navbar.css";
import "./Components/Footer/Footer.css";
import "./Components/Login/Login.css";
import "./Components/Signup/Signup.css";
import "./Components/Profile/Profile.css";
import Footer from "./Components/Footer/Footer.js";
import Login from "./Components/Login/Login.js";
import Signup from "./Components/Signup/Signup.js";
import Profile from "./Components/Profile/Profile.js";
import Navbar from "./Components/Navbar/Navbar.js";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import OTP from "./Components/Otp/Otp.jsx";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route exact path="/otpvr" element={<OTP />} />
          <Route exact path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </Router>

      

    </>
  );
}

export default App;
