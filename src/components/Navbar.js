import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRegular, faStar } from "@fortawesome/free-regular-svg-icons"; // Import icons

import {
  faHeart,
  faSearch,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { faSolid, faBagShopping } from "@fortawesome/free-solid-svg-icons"; // Import icons
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faCalendarXmark } from "@fortawesome/free-solid-svg-icons";
import { PersonCircle } from "react-bootstrap-icons";
import "./Navbar.css";
import TopHeader from "./TopHeader";

function NavbarComponent() {
  return (
    <>
      <TopHeader />
      <Navbar
        expand="lg"
        bg="dark"
        sticky="top"
        className="bg-body-tertiary"
        className={`bg-body-tertiary custom-media-class`}
      >
        <Container>
          <Navbar.Brand as={NavLink} to="/" exact activeClassName="active-link">
            Startup Idea
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/" exact activeClassName="active-link">
                Home
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/service"
                activeClassName="active-link"
              >
                Services
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about" activeClassName="active-link">
                About
              </Nav.Link>
              <Nav.Link as={NavLink} to="/signup" activeClassName="active-link">
                Sign Up
              </Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              <form className="d-flex align-items-center">
                <div className="input-group">
                  <input
                    className="form-control"
                    type="search"
                    placeholder="What are you looking for"
                  />
                  <button className="btn " type="submit">
                    <FontAwesomeIcon icon={faSearch} />
                  </button>
                </div>
              </form>

             
                <Nav.Link as={NavLink} to="/wishlist" className="wishlist-icon">
                  <FontAwesomeIcon icon={faHeart} />
                </Nav.Link>

               
              
              
              <Nav.Link as={NavLink} to="/cart" className="cart-icon">
                  <FontAwesomeIcon icon={faShoppingCart} className="ms-2" />
                </Nav.Link>
              <NavDropdown
                  title={<FontAwesomeIcon icon={faUserCircle} />}
                  id="user-dropdown"
                  className="custom-dropdown" // Add a custom class
                >
                  <NavDropdown.Item as={Link} to="/account">
                    <FontAwesomeIcon icon={faUserCircle} /> {/* User icon */}
                    Manage My Account
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/my-orders">
                    <FontAwesomeIcon icon={faBagShopping} />{" "}
                    {/* Use faBagShopping directly */}
                    My Orders
                  </NavDropdown.Item>

                  <NavDropdown.Item as={Link} to="/cancel-my-orders">
                    <FontAwesomeIcon icon={faCircleXmark} />{" "}
                    {/* Use faCircleXmark */}
                    My Cancellations
                  </NavDropdown.Item>

                  <NavDropdown.Item as={Link} to="/my-reviews">
                    <FontAwesomeIcon icon={faStar} />
                    My Reviews
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="#">
                    <FontAwesomeIcon icon={faArrowRightFromBracket} />
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;
