import React from "react";
import "./Dispensary.css";
import Section from "../../../HomePage/Section/Section";
import Navbar from "../../../HomePage/navbar/Navbar";
import Footer from "../../../HomePage/Footer/Footer";
import ScrollToTopButton from "../../../ScrollToTopButton";

const Dispensary = () => {
  return (
    <>
    <Section/>
    <Navbar/>
    <div className="dispensary-container">
      <h2 className="dispensary-title">Dispensary</h2>

      <div className="dispensary-section">
        <h3>Consultants</h3>
        <ul>
          <li>
            <strong>Dr. S.K. Shivanantham, MBBS</strong> – Resident Doctor
          </li>
          <li>
            <strong>Dr. R. Sangeetha, MBBS MD</strong> – Part-time Medical Consultant
          </li>
        </ul>
      </div>

      <div className="dispensary-section">
        <h3>Working Hours</h3>
        <ul>
          <li>08:30 AM to 04:30 PM</li>
          <li>05:00 PM to 07:00 PM</li>
        </ul>
      </div>
    </div>
    <Footer/>
    <ScrollToTopButton/>
    </>
  );
};

export default Dispensary;
