import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Dashboard from "./Dashboard/Components/Dashboard";
import DashboardPage from "./Dashboard/Pages/DashboardPage";
import AdminLogin from "./Dashboard/Pages/AdminLogin";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Account from "./pages/Account";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import HeaderContact from "./components/HeaderContact";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import TopHeader from "./components/TopHeader";
import { Errorpage } from "./pages/Errorpage";
import { Cartcheckout } from "./pages/Cartcheckout";
import Product from "./pages/product";
import Sellerspage from "./pages/Sellerpage";
import ServicePage from "./pages/Servicepage";
import SellerPage2 from "./pages/Sellerpage2";
import Servicepage2 from "./pages/Servicepage2";
import ServicePage3 from "./pages/Servicepage3";
import LogIn1 from "./pages/LogIn1";
import LogIn2 from "./pages/LogIn2";
import LogIn3 from "./pages/LogIn3";
import MyOrder from "./pages/MyOrder";
import CancelOrder from "./pages/CancelOrder";
import MyReview from "./pages/MyReview";
import DashboardOrder from "./Dashboard/Pages/DashboardOrder";
import DashboardProduct from "./Dashboard/Pages/DashboardProduct";
import DashboardCategory from "./Dashboard/Pages/DashboardCategory";
import DashboardSubCategory from "./Dashboard/Pages/DashboardSubCategory";
import DashboardCustomer from "./Dashboard/Pages/DashboardCustomer";
import DashboardShipment from "./Dashboard/Pages/DashboardShipment";
import DashboardAddCategory from "./Dashboard/Pages/DashboardAddCategory";

function App() {
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    // Set title and meta description based on route
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/contact":
        title = "";
        metaDescription = "";
        break;
      case "/about":
        title = "";
        metaDescription = "";
        break;
      case "/account":
        title = "";
        metaDescription = "";
        break;
      case "/log-in":
        title = "";
        metaDescription = "";
        break;
      case "/signup":
        title = "";
        metaDescription = "";
        break;
      default:
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  // Check if the current route is an admin, dashboard, or dashboard sub-page route
  const isAdminRoute = pathname.startsWith("/admin");
  const isDashboardRoute = pathname.startsWith("/dashboard");
  const isDashboardSubpage = pathname.includes("/dashboardpage") || pathname.includes("/dashboardproduct") || pathname.includes("/dashboardorder")|| pathname.includes("/dashboardcategory")|| pathname.includes("/dashboardsubcategory")|| pathname.includes("/dashboardcustomers")|| pathname.includes("/dashboardshipment")|| pathname.includes("/dashboard-add-category");

  return (
    <>
      {!isAdminRoute && !isDashboardRoute && <Navbar />}
      {isDashboardSubpage && <Dashboard />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/account" element={<Account />} />
        <Route path="/log-in" element={<LogIn />} />
        <Route path="/log-in1" element={<LogIn1 />} />
        <Route path="/log-in2" element={<LogIn2 />} />
        <Route path="/log-in3" element={<LogIn3 />} />
        <Route path="/my-orders" element={<MyOrder />} />
        <Route path="/cancel-my-orders" element={<CancelOrder />} />
        <Route path="/my-reviews" element={<MyReview />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/error" element={<Errorpage />} />
        <Route path="/cartcheckout" element={<Cartcheckout />} />
        <Route path="/product" element={<Product />} />
        <Route path="/sellerreg" element={<Sellerspage />} />
        <Route path="/sellerreg2" element={<SellerPage2 />} />
        <Route path="/service2" element={<Servicepage2 />} />
        <Route path="/service3" element={<ServicePage3 />} />
        <Route path="/service" element={<ServicePage />} />
        
        
        {isDashboardRoute && (
          <Route >
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/dashboardproduct" element={<DashboardProduct />} />
            <Route path="/dashboardorder" element={<DashboardOrder />} />
            <Route path="/dashboardcategory" element={<DashboardCategory />} />
            <Route path="/dashboardsubcategory" element={<DashboardSubCategory />} />
            <Route path="/dashboardcustomers" element={<DashboardCustomer />} />
            <Route path="/dashboardshipment" element={<DashboardShipment />} />
            <Route path="/dashboard-add-category" element={<DashboardAddCategory />} />
            
          </Route>
        )}
        {isAdminRoute && <Route path="/admin" element={<AdminLogin />} />}
        
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </>
  );
}

export default App;
