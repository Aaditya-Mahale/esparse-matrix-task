import React, { useState } from "react";
import "./AdminLogin.css";
import img1 from "../../components/images/Rectangle 1.png";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleMockLogin = () => {
    const expectedUsername = "admin"; // Replace with your desired username
    const expectedPassword = "password"; // Replace with your desired password

    if (username === expectedUsername && password === expectedPassword) {
      // Successful login (mimics successful API response)
      setIsLoggedIn(true);
      console.log("Login successful!");
      navigate("/dashboard");
    } else {
      // Handle invalid login (e.g., display error message)
      console.error("Invalid username or password");
      setIsLoggedIn(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/v1/Adminlogin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (response.ok) {
        const data = await response.json(); // Assuming successful response returns relevant data (e.g., token)
        // Handle successful login (use data from API response)
        setIsLoggedIn(true);
        console.log("Login successful!", data);
        navigate("/dashboard");
      } else {
        // Handle invalid login (e.g., display error message)
        const errorData = await response.json(); // Parse error details from response
        console.error("Login failed:", errorData);
        setIsLoggedIn(false);
      }
    } catch (error) {
      // Handle network errors
      console.error("Network error:", error);
      setIsLoggedIn(false);
    }
  };

  return (
    <div className="AdminLoginPage">
      <div className="AdminLogin">
        <div className="admin-login-container">
          <h2 className="welcomeadmintxt">Welcome To Admin</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <br />
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="adminlogininput"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <br />
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="adminlogininput"
              />
            </div>
            <div>
              <button className="adminloginbutton" onClick={handleMockLogin} type="submit">
                Login
              </button>
             
            </div>
          </form>
        </div>
        <div>
          <img id="loginimg0" src={img1} alt="Background" />
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
