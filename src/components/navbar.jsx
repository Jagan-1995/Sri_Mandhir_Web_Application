import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom"; // Import for navigation
import logo from "../static/images/logo.svg";
import user from "../static/images/user.png";

const Navbar = () => {
  return (
    <div className="App-header">
      <div className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Sri Mandir Logo" />
            {/* <h1 className="title">Sri Mandir</h1> */}
          </Link>
        </div>

        <nav>
          <a href="#">Home</a>
          <a href="#">Puja</a>
          <a href="#">Panchang</a>
          <a href="#">Temples</a>
          <a href="#">Library</a>
        </nav>

        <div className="right-section">
          <div className="dropdown">
            <img src={user} className="dropbtn user-icon" />
            <div className="dropdown-content">
              <a href="#">My Profile</a>
              <a href="/poojaBookings">My Pooja Bookings</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
