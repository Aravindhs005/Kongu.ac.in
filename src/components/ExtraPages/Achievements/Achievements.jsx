import React, { useState,useEffect } from 'react';
import './Achievements.css';
import Footer from '../../HomePage/Footer/Footer';
import ScrollToTopButton from '../../ScrollToTopButton';
import Section from '../../HomePage/Section/Section';
import Navbar from '../../HomePage/navbar/Navbar';
import Spinner from '../../Spinner';

const importAll = (r) => r.keys().map((key) => ({
  src: r(key),
  name: key.split('/').pop().replace(/\.[^/.]+$/, ''),
}));

const images = importAll(require.context('../../../assets/images/Achievements', false, /\.(png|jpe?g|svg)$/));

const Achievements = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);


  const splitLines = (name) => {
    const words = name.split(' ');
    const mid = Math.ceil(words.length / 2);
    return {
      line1: words.slice(0, mid).join(' '),
      line2: words.slice(mid).join(' '),
    };
  };

  const handleCardClick = (img) => {
    setSelectedImage(img);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return loading ? <Spinner /> :   (
    <>
    <Section/>
    <Navbar/>
    <div className="achievements-container">
      <h2 className="achievements-title">Achievements</h2>
      <div className="achievements-grid">
        {images.map((img, idx) => {
          const { line1, line2 } = splitLines(img.name);
          return (
            <div className="achievement-card" key={idx} onClick={() => handleCardClick(img)}>
              <img src={img.src} alt={img.name} className="achievement-img" />
              <p className="achievement-caption">{line1}<br />{line2}</p>
            </div>
          );
        })}
      </div>

      {selectedImage && (
        <div className="achievements-modal" onClick={handleCloseModal}>
          <div className="achievements-modal-content">
            <img src={selectedImage.src} alt={selectedImage.name} className="achievements-modal-image" />
            <div className="achievements-modal-text">{selectedImage.name}</div>
            <button className="achievements-modal-close" onClick={handleCloseModal}>×</button>
            </div>
        </div>
      )}



    </div>
    <Footer/>
    <ScrollToTopButton/>
    </>
  );
};

export default Achievements;
