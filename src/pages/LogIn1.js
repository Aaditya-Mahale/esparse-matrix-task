import React, { useState } from "react";
import axios from "axios"; // Import Axios
import ButtonPrimaryHoverNo from "../components/ButtonPrimaryHoverNo";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "./LogIn1.css";

const LogIn1 = () => {
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

    console.log(
      "Form submitted! Email/Phone:",
      emailOrPhone,
      "Password:",
      password
    );

    axios
      .post("/api/v1/userlogin", { emailOrPhone, password })
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
    axios
      .post("/api/v1/change-password-User", { emailOrPhone })
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
            <div className="frame-parent15">
              <div className="log-in-to-startup-idea-parent">
                <div className="log-in-to">Forgot Password?</div>
                <div className="enter-your-details">
                  Please enter the email address associated with your account.
                  We'll send you a secure link to reset your password.
                </div>
              </div>
              <div className="frame-parent16">
                <div className="email-or-phone-number-parent">
                  <input
                    type="text"
                    name="emailOrPhone"
                    placeholder="Email "
                    value={emailOrPhone}
                    onChange={handleEmailOrPhoneChange}
                  />
                </div>
                
              </div>
            </div>
            <div className="frame-parent17">
              <div className="button-wrapper">
              <Link to="/log-in2">
  <ButtonPrimaryHoverNo
    viewAllProducts="Continue"
    buttonPrimaryHoverNoPosition="unset"
    buttonPrimaryHoverNoTop="unset"
    buttonPrimaryHoverNoLeft="unset"
    buttonPrimaryHoverNoBackgroundColor="#db4444"
    buttonPrimaryHoverNoPadding="var(--padding-base) var(--padding-29xl)"
    type="submit"
    className="no-underline"
  />
</Link>
              </div>
            </div>
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

export default LogIn1;
