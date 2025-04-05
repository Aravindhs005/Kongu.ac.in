import React from "react";
import "./Footer.css";

const Footer = () => {
  const columns = [
    {
      title: "Quick Links",
      links: ["NIRF", "ARIIA Reports", "Mandatory Disclosure", "Organization Structure", "Strategic Plan", "Patents", "Student Centric Activities","Kongu CRS","KEC Web Album","Code of Conduct Handbook","Service Rules & HR Policy","Supporting Staff","Student Details","Audit Report","Undertaking","Professional Societies","Best Practices","Fitness Protocols and Guidelines","AICTE-CSS","Excess Fee Committee"],
    },
     {
      title: "Students Corner",
      links: [
        "Help Desk",
        "Vidya Lakshmi Portal for Students",
        "PM-USP Scholarship Scheme for J&K and Ladakh Students",
        "Antiragging Cell",
        "Antiragging Squad",
        "Code of Conduct and Ethics Committee",
        "Finance Committee",
        "Grievance Redressal Committee",
        "Grievance Redressal and Empowerment Committee for SC/ST Students",
        "Internal Complaint Committee / Anti-Sexual Harassment Cell",
        "IQAC Accrediation and Academic Audit Committee",
        "Institute Industry Cell",
        "Research & IPR Committee",
        "Institution Policy Document & Green, Energy and Environment Audit Committee",
        "Media Cell",
        "Institutions Innovation Council (IIC @ KEC)",
        "Library Committee",
        "Students Counselling Cell",
        "Grievance Portal",
        "24x7 Women Help Line",
        "Feedback"
      ],
    },
    
    {
      title: "Quick Glance",
      links: ["NAAC", "IQAC", "RTI", "Self Declaration", "Certificate Genuineness Verification", "Full Time PhD", "Help Desk"],
    }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        {columns.map((column, index) => (
          <div className="footer-column" key={index}>
            <h3 className="footer-title">{column.title}</h3>
            <ul className="footer-links">
              {column.links.map((link, idx) => (
                <li key={idx}>
                  <a href="#" className="footer-link">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="creator">
      <p>@ KEC. All rights reserved.</p>
      <p>© Aravindh S 21ITR005</p>
        <ul>
            <li>Terms of Services</li>
            <li>Privacy Policy</li>
        </ul>

      </div>
    </footer>
  );
};

export default Footer;
