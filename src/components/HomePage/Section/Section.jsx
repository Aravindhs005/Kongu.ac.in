import React from "react";
import "./Section.css";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


const Section = () => {
  return (
    <div className="section">
      <div className="section-content">
        <div className="left-links">
          <a href="#link1">Students</a>
          <a href="#link2">Faculty & Staff</a>
          <a href="#link3">Alumni</a>
          <a href="#link4">TBI</a>
          <a href="#link5">COE</a>
        </div>
        <div className="info-line">
          <marquee behavior="scroll" direction="left" className="marquee">
            New courses available for enrollment! | Annual fest coming soon! | Guest lecture on AI next week! | Join the coding competition! |
          </marquee>
        </div>
      </div>
    </div>
  );
};

export default Section;
