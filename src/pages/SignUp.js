import React, { useState } from "react";
import axios from "axios"; // Import axios for making HTTP requests
import { useNavigate } from "react-router-dom";
import ButtonPrimaryHoverNo from "../components/ButtonPrimaryHoverNo";
import GoogleSIgnUp from "../components/GoogleSIgnUp";
import Footer from "../components/Footer";
import "./SignUp.css";

const SignUp = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validation
    if (!name.trim() || !email.trim() || !password.trim()) {
      setError("Please fill out all fields.");
      return;
    }

    try {
      console.log('Sending data to API:', { name, email, password }); // Log data sent to API

      // Make API call
      const response = await axios.post('/api/v1/CreateUserDetails', {
        name,
        email,
        password
      });

      console.log('API response:', response.data); // Log API response

      // Check if signup was successful
      if (response.status === 200 && response.data && response.data.success) {
        // Navigate to login page if signup is successful
        navigate("/log-in");
      } else {
        setError("Signup failed. Please try again.");
      }
    } catch (error) {
      console.error('API request failed:', error);
      setError("Signup failed. Please try again.");
    }
  };

  const onLogInTextClick = () => {
    navigate("/log-in");
  };

  return (
    <div className="sign-up3">
      <div className="side-image-group">
        <div className="side-image1">
          <img className="dlbeatsnoop-1-icon1" alt="" src="/dlbeatsnoop-1@2x.png" />
        </div>
        <div className="frame-parent18">
          <div className="create-an-account-parent">
            <div className="create-an-account">Create an account</div>
            <div className="enter-your-details1">Enter your details below</div>
          </div>
          <div className="frame-parent19">
            <form onSubmit={handleSubmit}>
              <div className="frame-parent20">
                <div className="name-parent">
                  <input
                    type="text"
                    name="name"
                    placeholder="Email"
                    value={name}
                    onChange={handleNameChange}
                    className="name-input"
                  />
                </div>
                <div className="name-parent">
                  <input
                    type="email"
                    name="email"
                    placeholder="Phone No"
                    value={email}
                    onChange={handleEmailChange}
                    className="name-input"
                  />
                </div>
                <div className="name-parent">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                    className="name-input"
                  />
                </div>
              </div>
              <div className="button-parent">
                <ButtonPrimaryHoverNo
                  viewAllProducts="Create Account"
                  buttonPrimaryHoverNoPosition="unset"
                  buttonPrimaryHoverNoTop="unset"
                  buttonPrimaryHoverNoLeft="unset"
                  buttonPrimaryHoverNoBackgroundColor="#db4444"
                  buttonPrimaryHoverNoPadding="var(--padding-base) 122px"
                  type="submit"
                />
                <div className="google-sign-up-parent">
                  <GoogleSIgnUp signUpWithColor="#000" />
                  <div className="already-have-account-parent">
                    <div className="already-have-account">Already have account?</div>
                    <div className="log-in-parent">
                      <div className="log-in1" onClick={onLogInTextClick}>
                        Log in
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer
        exclusive="STARTUP IDEA"
        footerPosition="relative"
        footerTop="1121px"
        footerLeft="0px"
      />
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default SignUp;
