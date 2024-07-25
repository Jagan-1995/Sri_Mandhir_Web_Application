import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import HomePage from "./pages/HomePage";
import ExplorePage from "./pages/ExplorePage";
import PaymentPage from "./pages/PaymentPage";
import PoojaBookings from "./pages/PoojaBookings";
import PoojaList from "./pages/PoojaList";
import PoojaDetails from "./pages/PoojaDetails";

function App() {
  return (
    <Router>
      <Navbar /> {/* Include the navbar in every page */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/poojaBookings" element={<PoojaBookings />} />
        <Route path="/poojaList" element={<PoojaList />} />
        <Route path="/poojaDetails" element={<PoojaDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
