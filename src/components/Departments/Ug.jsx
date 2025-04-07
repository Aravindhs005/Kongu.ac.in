import React from "react";
import { useNavigate } from "react-router-dom";
import "./Ug.css";
import Footer from "../HomePage/Footer/Footer";
import Section from "../HomePage/Section/Section";
import ScrollToTopButton from "../ScrollToTopButton";
import Navbar from "../HomePage/navbar/Navbar";

const ugProgrammes = [
  { sno: 1, name: "B.E Civil Engineering", duration: "4 Years", year: 1984, route: "civil" },
  { sno: 2, name: "B.E Mechanical Engineering", duration: "4 Years", year: 1984, route: "mech" },
  { sno: 3, name: "B.E Electronics and Communication Engineering", duration: "4 Years", year: 1984, route: "ece" },
  { sno: 4, name: "B.E Computer Science and Engineering", duration: "4 Years", year: 1988, route: "cse" },
  { sno: 5, name: "B.Tech Chemical Engineering", duration: "4 Years", year: 1994, route: "chem" },
  { sno: 6, name: "B.E Electrical and Electronics Engineering", duration: "4 Years", year: 1994, route: "eee" },
  { sno: 7, name: "B.E Electronics and Instrumentation Engineering", duration: "4 Years", year: 1998, route: "eie" },
  { sno: 8, name: "B.Tech Information Technology", duration: "4 Years", year: 1998, route: "it" },
  { sno: 9, name: "B.E Mechatronics Engineering", duration: "4 Years", year: 1999, route: "mts" },
  { sno: 10, name: "B.Tech Food Technology", duration: "4 Years", year: 2006, route: "foodtech" },
  { sno: 11, name: "B.E Automobile Engineering", duration: "4 Years", year: 2015, route: "auto" },
  { sno: 12, name: "B.E Computer Science and Design", duration: "4 Years", year: 2021, route: "csd" },
  { sno: 13, name: "B.Tech Artificial Intelligence and Machine Learning", duration: "4 Years", year: 2021, route: "aiml" },
  { sno: 14, name: "B.Tech Artificial Intelligence and Data Science", duration: "4 Years", year: 2021, route: "aids" },
];

const Ug = () => {
  const navigate = useNavigate();

  const handleNavigate = (route) => {
    navigate(`/${route}`);
  };

  return (
    <>
    <Section/>
    <Navbar/>
    <div className="ug-container">
      <h2 className="ug-title">Undergraduate Programmes</h2>
      <div className="ug-table-wrapper">
        <table className="ug-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name of the Programme</th>
              <th>Duration</th>
              <th>Year of Starting</th>
            </tr>
          </thead>
          <tbody>
            {ugProgrammes.map((prog) => (
              <tr key={prog.sno}>
                <td>{prog.sno}</td>
                <td>
                  <span
                    className="ug-link"
                    onClick={() => handleNavigate(prog.route)}
                  >
                    {prog.name}
                  </span>
                </td>
                <td>{prog.duration}</td>
                <td>{prog.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    <Footer/>
    <ScrollToTopButton/>
    </>
  );
};

export default Ug;
