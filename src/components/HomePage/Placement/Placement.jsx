import { useEffect, useRef, useState } from "react";
import React from "react";
import "./Placement.css";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Knowmore from "../../../assets/images/know_more.png";


const Placement = () => {

  const sliderRef = useRef(null);

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

  const sliderImages = [
    "https://images.shiksha.com/mediadata/images/1733908606php4bmcRi.jpeg",
    "https://images.shiksha.com/mediadata/images/1733908606php4bmcRi.jpeg",
    "https://images.shiksha.com/mediadata/images/1733908606php4bmcRi.jpeg",
    "https://images.shiksha.com/mediadata/images/1733908606php4bmcRi.jpeg",
    "https://images.shiksha.com/mediadata/images/1733908606php4bmcRi.jpeg",
    "https://images.shiksha.com/mediadata/images/1733908606php4bmcRi.jpeg",
    "https://images.shiksha.com/mediadata/images/1733908606php4bmcRi.jpeg",
    "https://images.shiksha.com/mediadata/images/1733908606php4bmcRi.jpeg",
    "https://images.shiksha.com/mediadata/images/1733908606php4bmcRi.jpeg"
  ];
  

  const companyLogos = [
    "https://1000logos.net/wp-content/uploads/2021/09/Cognizant-Logo.png",
    "https://www.ersbio.co.za/wp-content/uploads/2024/11/infosys-logo.png.original.png",
    "https://www.clutch.com/wp-content/uploads/2018/04/Accenture-logo-no-background.png",
    "https://upload.wikimedia.org/wikipedia/commons/a/ac/ZOHO_New.png",
    "https://allvectorlogo.com/img/2016/08/presidio-logo.png",
    "https://www.logo.wine/a/logo/Huawei/Huawei-Logo.wine.svg",
    "https://media.hackerearth.com/recruit/wp-content/uploads/2022/11/Soliton-Logo-Transparent.png.webp",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiTKPS7AES9C41BuuHsJLeEeoCoyC1AoQ6hA&s",
    "https://logos-world.net/wp-content/uploads/2022/12/TVS-Motor-Logo.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRRiersP52Vd--k1XZkRX1yrmbWlFEqaQ3GA&s",
    "https://upload.wikimedia.org/wikipedia/commons/d/df/TOSHIBA_Logo.png",
    "https://pbs.twimg.com/profile_images/872785043684339712/9rhP0jb4_400x400.jpg",
    "https://pbs.twimg.com/profile_images/872785043684339712/9rhP0jb4_400x400.jpg",

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
        {companyLogos.map((logo, index) => (
          <div key={index} className="company-box">
            <img src={logo} alt={`Company ${index + 1}`} />
          </div>
        ))}
      </div>

      <div className="square-slider" ref={sliderRef}>
        {sliderImages.map((img, index) => (
          <div key={index} className="slide-image">
            <img src={img} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>

      <div className="button-container-placement">
        <button className="know-more-btn">Know More</button>
      </div>
    </div>
  );
};

export default Placement;
