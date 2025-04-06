import React, { useState, useRef } from 'react';
import './Department.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCar, faPenRuler, faBriefcase, faLaptopCode, faCity, faWrench,
  faHardDrive, faMicrochip, faPlug, faTowerCell, faComputer, faCode,
  faBrain, faRobot, faVrCardboard, faAtom, faSeedling
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const ugCourses = [
  { name: "Automobile Engineering", abbrev: "AUTO", icon: <FontAwesomeIcon icon={faCar} /> },
  { name: "Civil Engineering", abbrev: "CIVIL", icon: <FontAwesomeIcon icon={faCity} /> },
  { name: "Mechanical Engineering", abbrev: "MECH", icon: <FontAwesomeIcon icon={faWrench} /> },
  { name: "Mechatronics Engineering", abbrev: "MTS", icon: <FontAwesomeIcon icon={faHardDrive} /> },
  { name: "Electronics and Instrumentation Engineering", abbrev: "EIE", icon: <FontAwesomeIcon icon={faMicrochip} /> },
  { name: "Electrical and Electronics Engineering", abbrev: "EEE", icon: <FontAwesomeIcon icon={faPlug} /> },
  { name: "Electronics and Communication Engineering", abbrev: "ECE", icon: <FontAwesomeIcon icon={faTowerCell} /> },
  { name: "Computer Science Engineering", abbrev: "CSE", icon: <FontAwesomeIcon icon={faComputer} /> },
  { name: "Information Technology", abbrev: "IT", icon: <FontAwesomeIcon icon={faCode} /> },
  { name: "Artificial Intelligence and Data Science", abbrev: "aids", icon: <FontAwesomeIcon icon={faBrain} /> },
  { name: "Artificial Intelligence and Machine Learning", abbrev: "AI&ML", icon: <FontAwesomeIcon icon={faRobot} /> },
  { name: "Computer Science and Design", abbrev: "CSD", icon: <FontAwesomeIcon icon={faVrCardboard} /> },
  { name: "Chemical Engineering", abbrev: "CHEM", icon: <FontAwesomeIcon icon={faAtom} /> },
  { name: "Food Technology", abbrev: "FOODTECH", icon: <FontAwesomeIcon icon={faSeedling} /> }
];

const pgCourses = [
  { name: "M.Tech Computer Science", abbrev: "M.Tech CSE", icon: <FontAwesomeIcon icon={faComputer} /> },
  { name: "M.E VLSI Design", abbrev: "M.Tech AI", icon: <FontAwesomeIcon icon={faMicrochip} /> },
  { name: "M.E Structural Engineering", abbrev: "M.Tech DS", icon: <FontAwesomeIcon icon={faPenRuler} /> },
  { name: "M.Tech Food Technology", abbrev: "M.Tech CS", icon: <FontAwesomeIcon icon={faSeedling} /> },
  { name: "Master of Business Administration (MBA)", abbrev: "M.Tech VLSI", icon: <FontAwesomeIcon icon={faBriefcase} /> },
  { name: "Master of Computer Applications (MCA)", abbrev: "M.Tech ES", icon: <FontAwesomeIcon icon={faLaptopCode} /> }
];

const shCourses = [
  { name: "B.Sc Computer Systems and Design", abbrev: "MATH", icon: <FontAwesomeIcon icon={faComputer} /> },
  { name: "B.Sc Information Systems", abbrev: "PHY", icon: <FontAwesomeIcon icon={faCode} /> },
  { name: "B.Sc Software Systems", abbrev: "CHEM", icon: <FontAwesomeIcon icon={faLaptopCode} /> },
  { name: "M.Sc Software Systems", abbrev: "ENG", icon: <FontAwesomeIcon icon={faLaptopCode} /> },
];

const Department = () => {
  const [selectedCategory, setSelectedCategory] = useState('UG');
  const containerRef = useRef(null);
  const navigate = useNavigate();

  const handleCourseClick = (abbrev) => {
    navigate(`/${abbrev.toLowerCase()}`);
  };

  const getCourses = () => {
    switch (selectedCategory) {
      case 'UG':
        return ugCourses;
      case 'PG':
        return pgCourses;
      case 'S&H':
        return shCourses;
      default:
        return [];
    }
  };

  return (
    <div className="dep-details-container" ref={containerRef}>
      <div className="dep-button-container">
        <button onClick={() => setSelectedCategory('UG')}>UG Programmes</button>
        <button onClick={() => setSelectedCategory('PG')}>PG Programmes</button>
        <button onClick={() => setSelectedCategory('S&H')}>CT-UG & CT-PG</button>
      </div>

      <div className="dep-courses-container">
        <div className="dep-courses-row">
          {getCourses().slice(0, 14).map((course, index) => (
            <div
              key={index}
              className="dep-course-box"
              onClick={() => handleCourseClick(course.abbrev)}
            >
              <div className="dep-icon">{course.icon}</div>
              <div className="dep-abbrev">{course.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Department;
