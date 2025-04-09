import React from "react";
import "./Section.css";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


const Section = () => {
  return (
    <div className="section">
      <div className="section-content">
        <div className="left-links">
          <a href="https://kec.linways.com/">Linways Portal</a>
          <a href="https://placement.kongu.edu/">Placement Drive</a>
          <a href="https://kms.kongu.edu/">KMS Portal</a>
          <a href="https://results.kongu.edu/">Results</a>

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
