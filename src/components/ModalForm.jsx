import React, { useState } from "react";
import Modal from "react-modal";
import "./ModalForm.css";
import { useNavigate } from "react-router-dom";

export default function ModalForm({ isOpen, onRequestClose }) {
  const [mobileNumber, setMobileNumber] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/payment");
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Modal Form"
      className="Modal"
      overlayClassName="Overlay"
    >
      <h2>Enter Details</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="mobileNumber">Mobile Number:</label>
          <br />
          <input
            type="text"
            id="mobileNumber"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="name">Name:</label>
          <br />
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {/* <button onClick={onRequestClose}>Close</button> */}
    </Modal>
  );
}
