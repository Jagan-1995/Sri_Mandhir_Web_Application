import React, { useState } from "react";
import "./packageCard.css";
import ModalForm from "./ModalForm";

export default function PackageCard({ price, title, description }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="card">
      <div className="head">
        <h2>{price}</h2>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <div className="body">
        <ul>
          <li className="description">Feature 1</li>
          <li className="description">Feature 2</li>
          <li className="description">Feature 3</li>
          <li className="description">Feature 4</li>
          <li className="description">Feature 5</li>
          <li className="description">Feature 6</li>
        </ul>

        <button onClick={() => setModalIsOpen(true)}>Participate</button>
      </div>

      <ModalForm
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
      />
    </div>
  );
}
