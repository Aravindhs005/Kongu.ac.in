import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import Navbar from "../../HomePage/navbar/Navbar";
import Section from "../../HomePage/Section/Section";
import Footer from "../../HomePage/Footer/Footer";
import "../Deptstyle.css";
import autoData from "./mechanical.json";
import Slider from "./Slider";
import Deptimg from "../../../assets/images/Department Banner/mech.jfif";
import ScrollToTopButton from "../../ScrollToTopButton";


const NAV_ITEMS = [
  "Home",
  "Highlights",
  "Laboratories",
  "Faculty",
  "Library",
  "Patents",
  "Testing/Consultancy",
  "R&D (Academic)",
  "R&D (Activities)",
];

const Mech = () => {
  const [facultyData, setFacultyData] = useState([]);
  const [activeSection, setActiveSection] = useState("Home");
  const [selectedLab, setSelectedLab] = useState(0);

  const [dropdowns, setDropdowns] = useState({
    vision: false,
    mission: false,
    po: false,
    pso: false,
  });

  // Toggle dropdown function
  const toggleDropdown = (section) => {
    setDropdowns((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  useEffect(() => {
    fetch("/Faculty/mech.csv")
      .then((response) => response.text())
      .then((csvData) => {
        Papa.parse(csvData, {
          delimiter: ",",
          skipEmptyLines: true,
          complete: (result) => {
            const formattedData = result.data.map((row) => ({
              name: row[0],
              designation: row[1],
              profileLink: row[2],
            }));
            setFacultyData(formattedData);
          },
        });
      })
      .catch((error) => console.error("Error fetching CSV:", error));
  }, []);

  // Redirect to R&D sections
  useEffect(() => {
    if (activeSection === "R&D (Academic)" && autoData.rnd?.academic) {
      window.location.href = autoData.rnd.academic;
    }
    if (activeSection === "R&D (Activities)" && autoData.rnd?.activities) {
      window.location.href = autoData.rnd.activities;
    }
  }, [activeSection]);

  return (
    <div>
      <div className="navbar-section-wrapper">
        <Navbar />
        <Section />
      </div>

      <div className="auto-container">
        <div className="auto-banner-container">
          <img src={Deptimg} alt="Department Banner" className="auto-banner" />
          <div className="overlay"></div>
          <h1 className="auto-header">{autoData["dept-name"]}</h1>
        </div>

        <nav className="auto-navbar">
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              className={activeSection === item ? "active" : ""}
              onClick={() => setActiveSection(item)}
            >
              {item}
            </button>
          ))}
        </nav>

        <div className="auto-content">
        {activeSection === "Home" && autoData && (
            <div className="auto-content">
              <h2>About the Department</h2>
              <p className="bigdata">{autoData.about || "Information not available."}</p>

              <h2>Department Details</h2>
              <table className="dept-details-table">
                <tbody>
                  {[
                    ["HOD", autoData.hod_name],
                    ["Intake", autoData.intake],
                    ["phD", autoData.phd],

                  ].map(([label, value], index) => (
                    <tr key={index}>
                      <td><strong>{label}</strong></td>
                      <td>{value || "N/A"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {["vision", "mission", "peo", "po", "pso"].map((key) => (
                <div key={key} className={`dropdown-section ${dropdowns[key] ? "active" : ""}`}>
                  <button onClick={() => toggleDropdown(key)}>
                    {key.toUpperCase()}
                  </button>
                  <div className="dropdown-content">
                    <ul>
                      {Array.isArray(autoData[key])
                        ? autoData[key].map((point, index) => <li key={index}>{point}</li>)
                        : <li>{autoData[key] || "N/A"}</li>
                      }
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}


          {activeSection === "Highlights" && (
            <div>
              <h2>Highlights</h2>
              <ul className="highlights-list">
                {Object.entries(autoData.highlights || {}).map(([category, details], index) =>
                  details === true || details === "" ? <li key={index}>{category.replace(/_/g, " ")}</li> : null
                )}
              </ul>

              <table className="highlights-table">
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(autoData.highlights || {}).map(([category, details], index) =>
                    details !== true && details !== "" ? (
                      <tr key={index}>
                        <td>{category.replace(/_/g, " ")}</td>
                        <td>{Array.isArray(details) ? details.join(", ") : details}</td>
                      </tr>
                    ) : null
                  )}
                </tbody>
              </table>

              <h2>Milestones</h2>
              <div className="milestone-container">
                {autoData.milestones.map((milestone, index) => (
                  <div key={index} className="milestone">
                    <div className="milestone-year">{milestone.year}</div>
                    <div className="milestone-events">
                      {Array.isArray(milestone.events) ? (
                        <ul>
                          {milestone.events.map((event, idx) => <li key={idx}>{event}</li>)}
                        </ul>
                      ) : (
                        <p>{milestone.event}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

{activeSection === "Laboratories" && (
  <div>
    <h2>Laboratories</h2>
    <div className="lab-list">
      {autoData.labs.map((lab, index) => (
        <div
          key={index}
          className={`lab-card ${selectedLab === index ? "active" : ""}`}
          onClick={() => setSelectedLab(index)}
        >
          {lab.topic}
        </div>
      ))}
    </div>

    {selectedLab !== null && (
      <div className="lab-detail">
        <h3>{autoData.labs[selectedLab].topic}</h3>

        {/* Render Image */}
        {/* <img 
          src={autoData.labs[selectedLab].image} 
          alt={autoData.labs[selectedLab].topic} 
          className="lab-image" 
        /> */}

        {/* Render Lab Details */}
        {autoData.labs[selectedLab].detail.map((item, index) => {
                 if (item.startsWith("* ")) {
                   return <h2 key={index}>{item.substring(2)}</h2>;
                 } else if (item.startsWith("- ")) {
                   return <li key={index}>{item.substring(2)}</li>;
                 } else {
                   return <p key={index}>{item}</p>;
                 }
               })}


        {/* Render Software Table Only If Software Exists */}
        {autoData.labs[selectedLab].table && autoData.labs[selectedLab].table.length > 0 ? (
          <table className="lab-table">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Name of the Software</th>
                <th>Version</th>
                <th>Users</th>
              </tr>
            </thead>
            <tbody>
              {autoData.labs[selectedLab].table.map((table, index) => (
                <tr key={index}>
                  <td>{table.s_no}</td>
                  <td>{table.name}</td>
                  <td>{table.version}</td>
                  <td>{table.users}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div>
          
            
          </div>
        )}
      </div>
    )}
  </div>
)
}


          {activeSection === "Faculty" && (
            <div>
              <h2>Faculty Members</h2>
              <h3><strong>Total Faculty Members: {facultyData.length}</strong></h3>

              <div className="auto-faculty-container">
                {facultyData.map((faculty, index) => (
                  <div
                    key={index}
                    className="auto-faculty-card"
                    onClick={() => window.open(faculty.profileLink, "_blank")}
                  >
                    <p><strong>{faculty.name}</strong></p>
                    <p>{faculty.designation}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === "Library" && autoData.library && (
            <div className="library-container">
              <h2>{autoData.library.name || "Library"}</h2>
              <p className="library-description">
                {autoData.library.description || "Library details are provided below."}
              </p>

              <table className="library-table">
                <tbody>
                  {Object.entries(autoData.library.details || {}).map(([key, value], index) => (
                    <tr key={index}>
                      <td className="library-key">{key.replace(/_/g, " ")}</td>
                      <td className="library-value">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          
{activeSection === "Patents" && autoData.patents && (
            <div className="patents-container">
              <h2>Patents</h2>

              <table className="patent-table">
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Title</th>
                    <th>Name of the Inventors / Department</th>
                    <th>Patent No</th>
                  </tr>
                </thead>
                <tbody>
                  {autoData.patents.details.map((patent, index) => (
                    <tr key={index}>
                      <td>{index+1}</td>
                      <td>{patent.title}</td>
                      <td>{patent.students_involved.join(", ")}</td>
                      <td>{patent.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>


              <h2>Patents Journals</h2>

<table className="patent-table">
  <thead>
    <tr>
      <th>S.No</th>
      <th>Title</th>
      <th>Students Involved</th>
      <th>Project Guide</th>
      <th>Patent Journal No</th>
    </tr>
  </thead>
  <tbody>
    {autoData.patent_journals.details.map((patent_journals, index) => (
      <tr key={index}>
        <td>{index+1}</td>
        <td>{patent_journals.title}</td>
        <td>{patent_journals.students_involved.join(", ")}</td>
        <td>{patent_journals.faculty}</td>
        <td>{patent_journals.status}</td>
      </tr>
    ))}
  </tbody>
</table>

            </div>
            
          )}

                    {activeSection === "Testing/Consultancy" && autoData.testing && (
                      <div className="library-container">
                        <h2>{autoData.testing.category || "Testing"}</h2>
                        <p className="library-description">
                          {autoData.testing.description || "Library details are provided below."}
                        </p>
          
                        <table className="library-table">
                          <tbody>
                          {(autoData.testing.fields || []).map((item, index) => (
                            <tr key={index}>
                              <td className="library-key">{item}</td>
                            </tr>
                          ))}
          
                          </tbody>
                        </table>
                
                      </div>
                    )}
          


        </div>
      </div>

      <Slider />
      <Footer />
      <ScrollToTopButton/>
    </div>
  );
};

export default Mech;
