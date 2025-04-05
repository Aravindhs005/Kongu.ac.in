import React, { useState } from 'react';
import './Newsletter.css';

const newsletters = [
  {
    title: 'Enthusia',
    content: 'Kongu Engineering College establishes Center of Excellence (CoE) to enhance the skills and knowledge of students and faculty in various emerging technologies. The CoEs are equipped with state-of-the-art infrastructure and facilities relevant to the specific field of study, includes advanced laboratories, specialized equipments, software, and other resources necessary for hands-on learning and practical applications.',
    image: 'https://enthusia.kongu.edu/image/enthusia.png',
  },
  {
    title: 'Swaram',
    content: 'Kongu Engineering College establishes Center of Excellence (CoE) to enhance the skills and knowledge of students and faculty in various emerging technologies. The CoEs are equipped with state-of-the-art infrastructure and facilities relevant to the specific field of study, includes advanced laboratories, specialized equipments, software, and other resources necessary for hands-on learning and practical applications.',
    image: 'https://rotaract.kongu.edu/static/media/vjsiddhu.b275b3540752d2a167b7.jpg',
  },
  {
    title: 'Ehoryzon25',
    content: 'Kongu Engineering College establishes Center of Excellence (CoE) to enhance the skills and knowledge of students and faculty in various emerging technologies. The CoEs are equipped with state-of-the-art infrastructure and facilities relevant to the specific field of study, includes advanced laboratories, specialized equipments, software, and other resources necessary for hands-on learning and practical applications.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVFy49mMZnB8ug7jZZdS0zxYs635NLTT1yDg&s',
  },
  {
    title: 'Epoch',
    content: 'Kongu Engineering College establishes Center of Excellence (CoE) to enhance the skills and knowledge of students and faculty in various emerging technologies. The CoEs are equipped with state-of-the-art infrastructure and facilities relevant to the specific field of study, includes advanced laboratories, specialized equipments, software, and other resources necessary for hands-on learning and practical applications.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNXjEKh28KmtGEnBfxKPlRBIUrS_JdcX-fmw&s',
  },
  {
    title: 'Newsletter 5',
    content: 'Kongu Engineering College establishes Center of Excellence (CoE) to enhance the skills and knowledge of students and faculty in various emerging technologies. The CoEs are equipped with state-of-the-art infrastructure and facilities relevant to the specific field of study, includes advanced laboratories, specialized equipments, software, and other resources necessary for hands-on learning and practical applications.',
    image: 'https://cdn.pixabay.com/photo/2016/02/01/00/56/news-1172463_1280.jpg',
  },
  {
    title: 'Newsletter 6',
    content: 'Kongu Engineering College establishes Center of Excellence (CoE) to enhance the skills and knowledge of students and faculty in various emerging technologies. The CoEs are equipped with state-of-the-art infrastructure and facilities relevant to the specific field of study, includes advanced laboratories, specialized equipments, software, and other resources necessary for hands-on learning and practical applications.',
    image: 'https://cdn.pixabay.com/photo/2016/02/01/00/56/news-1172463_1280.jpg',
  },
];

const Newsletter = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % newsletters.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? newsletters.length - 1 : prevIndex - 1    
    );
  };

  return (
    <div className="newsletter-container">
        <h1>Upcoming Events</h1>
      <div className="slider">
        <div className="news-boxes">
          {newsletters
            .slice(currentIndex, currentIndex + 3)
            .map((newsletter, index) => (
              <div key={index} className="news-box">
                <div className="image-box">
                  <img src={newsletter.image} alt={newsletter.title} />
                </div>
                <div className="text-box">
                  <h3>{newsletter.title}</h3>
                  {/* <p>{newsletter.content}</p> */}
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="button-group">
        <button className="prev-button" onClick={prevSlide}>&#8249;</button>
        <button className="next-button" onClick={nextSlide}>&#8250;</button>
      </div>
    </div>
  );
};

export default Newsletter;
