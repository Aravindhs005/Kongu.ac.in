import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

import mandatoryDisclosurePDF from "../../../assets/docs/Footer/MandatoryDisclousure/mandatorydisclosure.pdf";
import organizationStructurePDF from "../../../assets/docs/Footer/OrganizationStructure/KEC_OrganizationStructure.pdf";
import codeofConductPDF from "../../../assets/docs/Footer/CodeofConductHandbook/KECCodeofConductHandbook.pdf";
import rulesandhr2025 from "../../../assets/docs/Footer/ServiceRulesandHRPolicy/rulesandhr2025.pdf";
import supporting_staff2025 from "../../../assets/docs/Footer/SupportingStaff/supporting_staff2025.pdf";
import student_details from "../../../assets/docs/Footer/Student Details/student_details.pdf";
import kecundertaking from "../../../assets/docs/Footer/Undertaking/kec_undertaking.pdf";
import kec_professional_societies from "../../../assets/docs/Footer/KecProfessionalSocieties/kec_professional_societies.pdf";
import excessfee from "../../../assets/docs/Footer/ExcessFeeCommittee/excess_fee_committee.pdf";

import pmsss from "../../../assets/docs/Footer/PMSSScholarship/pmsss.pdf";
import selfdeclaration from "../../../assets/docs/Footer/SelfDeclaration/kec_selfdeclaration.pdf";
import fulltimephd from "../../../assets/docs/Footer/FulltimePHD/fulltime_phd.pdf";
import rti from "../../../assets/docs/Footer/RTI/kec_rti.pdf";

const Footer = () => {
  const columns = [
    {
      title: "Quick Links",
      links: [
        { label: "NIRF", path: "/nirfpage" },
        { label: "ARIIA Reports", path: "/ariia" },
        { label: "Mandatory Disclosure", path: mandatoryDisclosurePDF, isPdf: true },
        { label: "Organization Structure", path: organizationStructurePDF, isPdf: true },
        { label: "Strategic Plan", path: "/strategicplan" },
        { label: "Patents", path: "http://rnd.kongu.edu/patents.php", isExternal: true },
        { label: "Student Centric Activities", path: "/student-centric-activities" },
        { label: "Kongu CRS", path: "/kongucrs" },
        { label: "KEC Web Album", path: "/webalbum" },
        { label: "Code of Conduct Handbook",path: codeofConductPDF, isPdf: true },
        { label: "Service Rules & HR Policy", path: rulesandhr2025, isPdf: true },
        { label: "Supporting Staff", path: supporting_staff2025, isPdf: true },
        { label: "Student Details", path: student_details, isPdf: true },
        { label: "Audit Report", path: "/audit-report" },
        { label: "Undertaking", path: kecundertaking, isPdf: true  },
        { label: "Professional Societies",  path: kec_professional_societies, isPdf: true},
        { label: "Best Practices", path: "/best-practices" },
        { label: "Fitness Protocols and Guidelines", path: "/fitness-protocols" },
        { label: "AICTE-CSS", path: "https://css.aicte.gov.in/login", isExternal: true },
        { label: "Excess Fee Committee",  path: excessfee, isPdf: true},
      ],
    },
    {
      title: "Students Corner",
      links: [
        { label: "Help Desk", path: "/help-desk" },
        { label: "Vidya Lakshmi Portal for Students",path: "https://www.vidyalakshmi.co.in/", isExternal: true},
        { label: "PM-USP Scholarship Scheme for J&K and Ladakh Students", path: pmsss, isPdf: true},
        { label: "Antiragging Cell", path: "/antiragging-cell" },
        { label: "Antiragging Squad", path: "/antiragging-squad" },
        { label: "Code of Conduct and Ethics Committee", path: "/ethics-committee" },
        { label: "Finance Committee", path: "/finance-committee" },
        { label: "Grievance Redressal Committee", path: "/grievance-committee" },
        { label: "Grievance Redressal and Empowerment Committee for SC/ST Students", path: "/scst-grievance-committee" },
        { label: "Internal Complaint Committee / Anti-Sexual Harassment Cell", path: "/internal-complaint-committee" },
        { label: "IQAC Accrediation and Academic Audit Committee", path: "/iqac-audit" },
        { label: "Institute Industry Cell", path: "/industry-cell" },
        { label: "Research & IPR Committee", path: "/research-ipr" },
        { label: "Institution Policy Document & Green, Energy and Environment Audit Committee", path: "/green-energy-audit" },
        { label: "Media Cell", path: "/media-cell" },
        { label: "Institutions Innovation Council (IIC @ KEC)", path: "/iic" },
        { label: "Library Committee", path: "/library-committee" },
        { label: "Students Counselling Cell", path: "/counselling-cell" },
        { label: "Grievance Portal", path: "https://kms.kongu.edu/grievance/", isExternal: true },
        { label: "24x7 Women Help Line", path: "/women-helpline" },
        { label: "Feedback", path: "/feedback" },
      ],
    },
    {
      title: "Quick Glance",
      links: [
        { label: "NAAC", path: "/naac" },
        { label: "IQAC", path: "/iqac" },
        { label: "RTI", path: rti, isPdf: true  },
        { label: "Self Declaration", path: selfdeclaration, isPdf: true },
        { label: "Certificate Genuineness Verification",  path: "https://kongu.directverify.in/student/#/", isExternal: true},
        { label: "Full Time PhD", path: fulltimephd, isPdf: true },
      ],
    },
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
                  {link.isPdf ? (
                    <a
                      href={link.path}
                      className="footer-link"
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                  ) : link.isExternal ? (
                    <a
                      href={link.path}
                      className="footer-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link to={link.path} className="footer-link">
                      {link.label}
                    </Link>
                  )}
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
