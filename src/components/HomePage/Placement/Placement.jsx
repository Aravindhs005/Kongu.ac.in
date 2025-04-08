import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import "./Placement.css";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import bgimg from '../../../assets/images/Background images/slider-background.jpg';

const Placement = () => {
  const navigate = useNavigate();

  // Load slider images from folder
    const importSliderImages = (r) => r.keys().map(r);
    const sliderImages = importSliderImages(
      require.context("../../../assets/images/Placement/Slider", false, /\.(png|jpe?g|svg|webp)$/)
    );


  const sliderRef = useRef(null);

  // Dynamically load all images from the company-logos folder
    const importAll = (r) => r.keys().map(r);
    const companyImages = importAll(
      require.context("../../../assets/images/Placement/Companies", false, /\.(png|jpe?g|svg|webp)$/)
    );


  // Auto-scroll logic
  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        const container = sliderRef.current;
        const scrollAmount = container.offsetWidth;

        // Smooth scroll to next set
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });

        // Reset if reached end
        if (
          container.scrollLeft + container.offsetWidth >=
          container.scrollWidth - 5
        ) {
          setTimeout(() => {
            container.scrollTo({ left: 0, behavior: "smooth" });
          }, 800); // slight delay before resetting
        }
      }
    }, 5000); // scroll every 5s

    return () => clearInterval(interval);
  }, []);

  const placementData = [
    { title: "Highest Package", value: "23.5 LPA" },
    { title: "Average Package", value: "6.5 LPA" },
    { title: "Students in 9 LPA", value: "10" },
    { title: "Students in 10 LPA", value: "15" },
    { title: "Companies Visited", value: "100" },
    { title: "Placement Status", value: "91%" }
  ];


  return (
    <div className="placement-container">
      <h1 className="animated-text">
        <h2>EXCELLENCE IN</h2>
        <span className="animated-effect">PLACEMENTS</span>
        <span className="animated-effect">..</span>
      </h1>
      <p>
        Celebrating the outstanding success of our 2025 batch, with placements in over 120 top multinational companies. We couldn't be prouder of them!🎓
      </p>
      <div className="details-placement">


      <DotLottieReact className="animation-lottie"
      src="https://lottie.host/92ccea8d-f202-4a97-ab56-7b4a77483b69/hNRRdhVC4b.lottie"
      loop
      autoplay
    />
      <div className="box">
        {placementData.map((item, index) => (
          <div key={index} className="info-box square-box">
            <h2>{item.title}</h2>
            <p>{item.value}</p>
          </div>
        ))}
      </div>
      </div>

      <div className="companies">
        {companyImages.slice(0, 20).map((img, index) => (
          <div key={index} className="company-box">
            <img src={img} alt={`Company Logo ${index + 1}`} />
          </div>
        ))}
       
      </div>



      <div className="square-slider" ref={sliderRef}>
  {sliderImages.map((img, index) => (
    <div
      key={index}
      className="slide-image"
      style={{
        backgroundImage: `url(${bgimg})`
      }}
    >
      <img src={img} alt={`Slide ${index + 1}`} />
    </div>
  ))}
</div>



      <div className="button-container-placement">
        <button className="know-more-btn" onClick={() => navigate("/placement")}>Know More</button>
      </div>
    </div>
  );
};

export default Placement;
