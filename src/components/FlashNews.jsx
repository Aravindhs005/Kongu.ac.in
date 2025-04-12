import React, { useState } from 'react';
import './FlashNews.css';

const FlashNews = () => {
  const [showPopup, setShowPopup] = useState(true);

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    showPopup && (
      <div className="flash-news-popup">
        <button className="flash-news-close-btn" onClick={handleClose}>
          x
        </button>
        <div className="flash-news-content">
          <span>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeUOKpgnUjUU5Jr2FrrYuJj5u7_sFM-p2Kh8MplHqwCsY9O9g/viewform?pli=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            📢 
            Online Enquiry Form! Admission 2025-26
          </a>
          </span>
          
        </div>
      </div>
    )
  );
};

export default FlashNews;
