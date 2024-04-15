import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div style={{ height: "100vh", padding: "20px", backgroundColor: "#232323", color: "white" }}>
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>Homepage</h1>
      <p style={{ fontSize: "18px", marginBottom: "30px" }}>
       
      </p>
      <ul style={{ listStyle: "none", padding: "0" }}>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/adminlogin" style={{ color: "#87CEFA", textDecoration: "none" }}>
            AdminLogin
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/dashboardone" style={{ color: "#87CEFA", textDecoration: "none" }}>
            DashboardOne
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/dashboard" style={{ color: "#87CEFA", textDecoration: "none" }}>
            Dashboard
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/products" style={{ color: "#87CEFA", textDecoration: "none" }}>
            Products
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/customer" style={{ color: "#87CEFA", textDecoration: "none" }}>
            Customer
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/customerone" style={{ color: "#87CEFA", textDecoration: "none" }}>
            CustomerOne
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/customertwo" style={{ color: "#87CEFA", textDecoration: "none" }}>
            CustomerTwo
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/subcaregory" style={{ color: "#87CEFA", textDecoration: "none" }}>
            Subcaregory
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/orders" style={{ color: "#87CEFA", textDecoration: "none" }}>
            Orders
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/shipments" style={{ color: "#87CEFA", textDecoration: "none" }}>
            Shipments
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
