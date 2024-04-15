import React, { useState } from "react";
import axios from "axios"; // Import Axios
import img1 from '../components/images/Frame 766.png';
import Footer from "../components/Footer";
import "./LogIn3.css";

const LogIn3 = () => {
  const [emailOrPhone, setEmailOrPhone] = useState(""); // State for email/phone number
  const [password, setPassword] = useState(""); // State for password

  const handleEmailOrPhoneChange = (event) => {
    setEmailOrPhone(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    console.log("Form submitted! Email/Phone:", emailOrPhone, "Password:", password);

    axios.post("/api/v1/userlogin", { emailOrPhone, password })
      .then((response) => {
        console.log("Login successful!", response.data);
        // Redirect logic here, like history.push('/dashboard')
      })
      .catch((error) => {
        console.error("Login failed.", error.response.data);
        // Display an error message to the user, or handle the error as needed
      });
  };

  const handleForgotPasswordClick = () => {
    axios.post("/api/v1/change-password-User", { emailOrPhone })
      .then((response) => {
        // Handle successful response
      })
      .catch((error) => {
        // Handle error
      });
  };

  // Hardcoded sample login credentials for testing
  const sampleEmail = "arrowcon@gmail.com";
  const samplePassword = "1234";

  return (
    <div className="log-in">
      <form onSubmit={handleSubmit}>
        <div className="side-image-parent">
          <div className="side-image">
            <img
              className="dlbeatsnoop-1-icon"
              alt=""
              src="/dlbeatsnoop-1@2x.png"
            />
          </div>
          <div className="frame-parent14">
          <img src={img1} alt="My Image" />
          </div>
        </div>
      </form>
      <Footer
        exclusive="STARTUP IDEA"
        footerPosition="absolute"
        footerTop="1121px"
        footerLeft="0px"
      />
    </div>
  );
};

export default LogIn3;
