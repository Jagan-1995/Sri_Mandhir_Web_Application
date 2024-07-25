import React from "react";
import "./poojaCard.css";
import { Link } from "react-router-dom";

export default function poojaCard({ id, image, title, description }) {
  return (
    <div className="card">
      <div className="head">
        <img src={image} alt="image"></img>
      </div>
      <div className="body">
        <h3 className="title">{title}</h3>
        <p className="description">{description}</p>
        <Link to="/poojaDetails" style={{ textAlign: "center" }}>
          <button>Book</button>
        </Link>
      </div>
    </div>
  );
}
