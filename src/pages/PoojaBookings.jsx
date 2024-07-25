import React from "react";
import "./poojaBookings.css";
import { Link } from "react-router-dom";

export default function PoojaBookings() {
  return (
    <div className="pooja_booking_container">
      <h3>No Puja has been booked yet</h3>
      <p>
        Book your Puja online at Popular Temples of Inbia. <br /> Panditji wull
        take sankalp with your name and gotra <br /> during the puja
      </p>
      <Link to="/poojaList">
        <button>Book Pooja Now</button>
      </Link>
    </div>
  );
}
