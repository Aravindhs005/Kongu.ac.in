import React from "react";
import "./StudentCentric.css";
import Section from "../../../HomePage/Section/Section";
import Navbar from "../../../HomePage/navbar/Navbar";
import Footer from "../../../HomePage/Footer/Footer";
import ScrollToTopButton from "../../../ScrollToTopButton";

const data = [
    {
        "College Students Council": {
          "Chairman": "Dr. V. Balusamy, Principal"
        },
        "IEEE Students Branch": {
          "Faculty Coordinator": "Dr.J.Vijayalakshmi / ECE",
          "Robotics And Automation Society": "Dr. N. Nithyavathy / MTS",
          "Computer Society": [
            "Mr. Joseph Auxilius Jude / ECE",
            "Mr. V.C. Dinesh / ECE"
          ],
          "Antenna And Propagation Society": "Dr. J. Vijayalakshmi / ECE",
          "Power And Energy Society": "Dr. N. Priyadharshini / EEE",
          "Women In Engineering": "Dr. S. Maheswari / EEE",
          "Communication Society": "Mr. G. Thirunavukkarasu / ECE"
        },
        "IETE Student Forum": {
          "Coordinators": [
            "Dr. K. Kavinkumar / ECE",
            "Ms. R. Ramyea / ECE"
          ]
        },
        "Centre For Entrepreneurship And Incubation": {
          "Coordinators": [
            "Dr. R. Parameshwaran / MTS",
            "Dr. S. Praveenkumar / MTS",
            "Ms. P. S. Kannan / ECE",
            "Mr. R. P. Karthik / ECE"
          ]
        },
        "ISTE Chapter": {
          "Coordinators": [
            "Dr. P. Ravichandran / MTS",
            "Mr. A. Ganesh / Mech"
          ]
        },
        "Institution Of Engineers IEI": {
          "Coordinator": "Dr. C. Nalini / IT"
        },
        "ICT Academy Of Tamilnadu": {
          "Coordinator": "Dr. M. Vimaladevi / AI"
        },
        "Indian Institute of Chemical Engineers - KEC Student Chapter": {
          "Coordinator": "Dr. S. Mothil / Chemical"
        },
        "Society of Automotive Engineers": {
          "Coordinators": [
            "Mr. S. Karthi Vinith / Auto",
            "Dr. A. Mohankumar / Mech"
          ]
        },
        "Instrument Society of India (ISoI)": {
          "Coordinators": [
            "Dr. P. Vidhyalakshmi / EIE",
            "Mr. D. Selvakarthi / EIE"
          ]
        },
        "Indian Geo Technical Society": {
          "Coordinators": [
            "Mr. P. Kulanthaivel / Civil",
            "Mr. S. Vinodhkumar / Civil"
          ]
        },
        "Indian Chapter of American Concrete Institute - KEC Student Chapter": {
          "Coordinators": [
            "Dr. G. S. Rampradheep / Civil",
            "Mr. K. Sampath Kumar / Civil"
          ]
        },
        "National Service Scheme (NSS)": {
          "ProgramOfficers": [
            "Dr. A. Manimaran / Maths",
            "Mr. K. S. Navaneethan / Civil",
            "Ms. K. Suvalakshmi / CSE"
          ]
        },
        "National Cadet Corps (NCC)": {
          "Army": "Major Dr. P. S. Raghavendran / EEE",
          "Air": "Flying Officer. A. Jeevanantham / IT"
        },
        "Higher Education Competitive Examination Cell": {
          "Coordinators": [
            "Dr. R. Thangarajan / IT",
            "Dr. V. Krishnamoorthy / Mgt. Studies"
          ]
        },
        "Human Resource Development Cell": {
          "Coordinator": "Dr. P. N. Palanisamy / CCO Planning",
          "Members": [
            "Dr. M. Karthikeyan / Chemistry",
            "Dr. V. Krishnamoorthy / Mgt. Studies",
            "Dr. K. Maheshvaran / Physics",
            "Dr. S. Yasmin / English"
          ]
        },
        "Self Development Cell": {
          "Coordinators": [
            "Dr. N. Prakash / MBA",
            "Dr. S. Kavitha Bharathi / CT-UG"
          ]
        },
        "Student Welfare Committee": {
          "Coordinators": [
            "Dr. K. Krishnamurthy / MTS",
            "Dr. K. N. Baluprithviraj / EIE",
            "Dr. M. Sabarimuthu / EEE",
            "Dr. S. Karthikeyan / Civil"
          ]
        },
        "Women Development Cell": {
          "Coordinators": [
            "Dr. D. Malathi / ECE",
            "Dr. A. Revathi / Chemistry"
          ]
        },
        "Yoga Meditation Club": {
          "Coordinators": [
            "Dr. R. Thamilselvan / CSE",
            "Dr. P. Vadivel / Maths"
          ]
        },
        "Photography Club": {
          "Coordinators": [
            "Mr. N. P. Saravanan / CSE",
            "Mr. S. K. Logesh / EEE"
          ]
        },
        "Cultural Music Club": {
          "Coordinators": [
            "Mr. K. V. Satheesh Kumar / Mech",
            "Dr. V. N. Kowshalya / Chemistry",
            "Ms. S. Keerthana / CT-UG"
          ]
        },
        "Rotaract Club": {
          "Coordinator": "Dr. K. Vishnuvarthan / Civil"
        },
        "Ravi Varma Creative Club": {
          "Coordinators": [
            "Dr. V. Sampath Kumar / Civil",
            "Mr. S. Jegan / EIE"
          ]
        },
        "Android Application Development and Programming Club": {
          "Coordinators": [
            "Mr. A. P. Pon Selva Kumar / IT",
            "Ms. P. Vanitha / IT"
          ]
        },
        "Citizen Consumer / Legal Literacy Club": {
          "Coordinators": [
            "Dr. V. Vaishnavi / MBA",
            "Ms. M. Dharshne / MBA"
          ]
        },
        "Energy & Environment Conservation Club": {
          "Coordinators": [
            "Dr. S. Gomathy / EEE",
            "Mr. R. Sathish Raam / Chemical"
          ]
        },
        "English Proficiency & Readers Club": {
          "Coordinators": [
            "Dr. T. Geetha / English",
            "Dr. I. Salma / English"
          ]
        },
        "Srinivasa Ramanujan Mathematics Club": {
          "Coordinators": [
            "Dr. K. V. Tamil Selvi / Maths",
            "Dr. A. L. Nachammai / Maths"
          ]
        },
        "Youth Red Cross": {
          "Coordinator": "Dr. G. Mugaishudeen / Chemical"
        },
        "Robotics Club": {
          "Coordinators": [
            "Dr. S. K. Thangarasu / MTS",
            "Dr. T. Tamilarasi / MTS"
          ]
        },
        "CII-Yi Yuva Kongu Engineering College": {
          "Coordinator": "Dr. T. P. Saravanan / MBA"
        },
        "Tamil Mandram": {
          "Coordinators": [
            "Dr. A. S. Periyasamy Manikandan / Chemical",
            "Dr. R. Mouleeswaraprabhu / EIE"
          ]
        },
        "Pasumai Vanam": {
          "Coordinators": [
            "Dr. P. Srinivasan / Chemistry",
            "Mr. A. Saravanan / Mech"
          ]
        },
        "Indian Welding Society (IWS)": {
          "Coordinators": [
            "Mr. K. V. Satheesh Kumar / Mech",
            "Dr. M. Bhuvanesh Kumar / Mech"
          ]
        },
        "Indian Institute of Metals (IIM)": {
          "Coordinator": "Dr. A. Mohankumar / Mech"
        },
        "Gender Equity Club": {
          "Coordinators": [
            "Dr. K. Dinesh / CSE",
            "Ms. S. Mohana Saranya / CSE"
          ]
        },
        "Quiz Club": {
          "Coordinators": [
            "Dr. K. Senthilkumar / Food Tech",
            "Dr. S. Sathya / Maths"
          ]
        },
        "Karate & Martial Arts Club": {
          "Coordinators": [
            "Ms. K. Krishnaveni / Chemistry",
            "Mr. D. Gurukumaresan / Maths"
          ]
        },
        "Red Ribbon Club": {
          "Coordinator": "Mr. R. Karunamoorthy / CSE"
        },
        "Coding Forum": {
          "Coordinators": [
            "Dr. R. S. Latha / AI",
            "Dr. M. Geetha / CSE",
            "Ms. K. Karthiga / CT-PG"
          ]
        },
        "Student R&D Forum": {
          "Coordinators": [
            "Dr. C. Maheswari / MTS",
            "Dr. R. Rajkumar / EIE"
          ]
        },
        "Cloud Users Group": {
          "Coordinators": [
            "Dr. PCD. Kalaivani / CSE",
            "Dr. Vani Rajasekar / CSE"
          ]
        },
        "IELTS Club": {
          "Coordinators": [
            "Dr. R. Ramya Sri / English",
            "Dr. E. M. Sri Amirtavarshini / English"
          ]
        },
        "Alumni Association": {
          "ChiefCoordinator": "Dr. R. Baskar",
          "Secretary": "Dr. T. Pradeep",
          "JointSecretary": "Dr. S. Sasikala",
          "Treasurer": "Dr. R. Naveen Kumar"
        },
        "Placement Cell": {
          "PlacementOfficers": [
            "Mr. P. Dhakshinamoorthy",
            "Mr. S. Kavin",
            "Mr. P. Sukumar",
            "Mr. P. Dineshkumar"
          ]
        },
        "Training Cell": {
          "TrainingOfficers": [
            "Dr. N. Shanthi / CSE",
            "Mr. D. Vijay Anand / IT",
            "Mr. B. Bizu / CSE"
          ]
        },
        "De-addiction / Anti Drug Committe": {
          "Chairman": "Dr. K. Kannan, AW, Hostels",
          "Members": [
            "Dr. P. S. Raghavendran, DW & NCC Officer",
            "Dr. S. Kalaiselvi, Sr.DW, Ladies Hostels",
            "Dr. S. K. Shivanantham / Residential Doctor",
            "Dr. R. Sangeetha / Medical Consultant"
          ]
        },
        "Disciplinary Committee": {
          "Chairman": "Dr. R. Baskar / CCO Alumni Affairs and HOD FT",
          "Members": [
            "Dr. A. Tamilarasi / MCA",
            "Dr. R. Viswanathan / Mathematics",
            "Dr. R. R. Rajalaxmi / CSE",
            "Dr. N. Senthilnathan / EEE"
          ]
        },
        "Examination Committee": {
          "Coordinators": [
            "Dr. V. Balusamy, Principal",
            "Dr. P. Shanmugam",
            "Dr. T. Gunasekar",
            "Dr. K. Sangeetha"
          ]
        },
        "Planning And Monitoring Committee": {
          "Chairman": "Dr. P. N. Palanisamy / Chemistry",
          "Members": [
            "Dr. P. Balasubramanie / Registrar",
            "Dr. M. Karthikeyan / Chemistry",
            "Dr. D. Ramarajan / Physics",
            "Mr. M. Murali / AR"
          ]
        },
        "E-Waste Disposal": {
          "Coordinator": "Dr. P. Selvakumar / HOD Mechanical",
          "Members": [
            "Dr. E. Gothai / HOD CT-PG",
            "Mr. T. Chandrasekar / AO"
          ]
        }
      }
      ];

      const StudentCentric = () => {
        const studentData = data[0]; // Get the actual data object
      
        // Helper function to render coordinators
        const renderValue = (value) => {
          if (typeof value === "string") return value;
      
          if (Array.isArray(value)) {
            return (
              <>
                {value.map((name, i) => (
                  <div key={i}>{name}</div>
                ))}
              </>
            );
          }
      
          if (typeof value === "object" && value !== null) {
            return (
              <table className="inner-table">
                <tbody>
                  {Object.entries(value).map(([role, val], i) => (
                    <tr key={i}>
                      <td className="titledataforstudentcentric"><strong>{role}</strong></td>
                      <td>{renderValue(val)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            );
          }
      
          return "-";
        };
      
        return (
          <>
            <Section />
            <Navbar />
            <div className="student-centric-container">
              <h1 className="student-centric-title">Student Centric Activities</h1>
              {Object.entries(studentData).map(([club, details], index) => (
                <div className="student-card" key={index}>
                  <h2 className="card-title">{club}</h2>
                  <table className="responsive-table">
                    <thead>
                      <tr>
                        <th>Role</th>
                        <th>Coordinator(s)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {typeof details === "string" ? (
                        <tr>
                          <td>Coordinator</td>
                          <td>{details}</td>
                        </tr>
                      ) : (
                        Object.entries(details).map(([role, coordinator], idx) => (
                          <tr key={idx}>
                            <td>{role}</td>
                            <td>{renderValue(coordinator)}</td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              ))}
            </div>
            <Footer />
            <ScrollToTopButton />
          </>
        );
      };
      
      export default StudentCentric;
      