import React from 'react';
import './InternalCommiteeSexualPrevention.css';
import Section from '../../../HomePage/Section/Section';
import Navbar from '../../../HomePage/navbar/Navbar';
import Footer from '../../../HomePage/Footer/Footer';
import ScrollToTopButton from '../../../ScrollToTopButton';
import pdf from "../../../../assets/docs/Footer/InternalCompliantandAntiSexual/act_InternalComplaintsCommittee.pdf";

const members = [
  {
    name: "Thiru.A.K.Ilango",
    category: "Correspondent",
    mobile: "042924226510",
    email: "principal@kongu.edu"
  },
  {
    name: "Dr.V.Balusamy",
    category: "Principal",
    mobile: "9942820583",
    email: "principal@kongu.ac.in"
  },
  {
    name: "Dr.R.R.Rajalaxmi (CSE)",
    category: "Presiding Officier",
    mobile: "9486561199",
    email: "rrr@kongu.ac.in"
  },
  {
    name: "Dr.G.Murugesan (ECE)",
    category: "Member",
    mobile: "9865273774",
    email: "gmece@kongu.ac.in"
  },
  {
    name: "Dr.S.Vijayachitra (EIE)",
    category: "Member",
    mobile: "9865780707",
    email: "svijayachitra@kongu.ac.in"
  },
  {
    name: "Dr.P.Vidhya Priya (MBA)",
    category: "Member",
    mobile: "9787742193",
    email: "vidyapriya@kongu.ac.in"
  },
  {
    name: "Dr.M.Dhavamani (Mathematics)",
    category: "Member",
    mobile: "9842740601",
    email: "md@kongu.ac.in"
  },
  {
    name: "Dr.P.Balasubramanie (Registrar)",
    category: "Member",
    mobile: "9965277765",
    email: "registrar@kongu.ac.in"
  },
  {
    name: "Mr.M.Murali (AR)",
    category: "Member",
    mobile: "9842352452",
    email: "mmurali@kongu.ac.in"
  },
  {
    name: "Dr.J.Sudha (PA to Principal)",
    category: "Member",
    mobile: "9444192238",
    email: "sudha@kongu.ac.in"
  },
  {
    name: "Ms.C.Barbara Lydia,Advocate,Erode",
    category: "Member",
    mobile: "9842704828",
    email: "lawyercbl@gmail.com"
  },
  {
    name: "Ms.M.Subitsa (Psychology,KASC)",
    category: "Member",
    mobile: "8870775045",
    email: "subitsakumar@gmail.com"
  },
  {
    name: "Ms.B.Swetha (Psychology,KASC)",
    category: "Member",
    mobile: "9344516755",
    email: "swetha23257@gmail.com"
  },
  {
    name: "Ms.A.P.Sahana (22ECR159)",
    category: "Student Representative",
    mobile: "9514243183",
    email: "sahanaap.22ece@kongu.edu"
  },
  {
    name: "Mr.Mano Sundar (21CSR109)",
    category: "Student Representative",
    mobile: "6382072039",
    email: "manosundarm.21cse@kongu.edu"
  },
  {
    name: "Ms.Harshithaa SV (23CER016)",
    category: "Student Representative",
    mobile: "9444854747",
    email: "harshithaa.23civil@kongu.edu"
  },
];

const InternalCommiteeSexualPrevention = () => {
  return (
    <>
      <Section />
      <Navbar />
      <div className="icc-container">
        <h1 className="icc-title">Internal Complaint Committee / Anti Sexual Harassment Cell</h1>
        <p className="icc-desc">
          KONGU ENGINEERING COLLEGE is committed to provide safe academic and working environment to all girl students and its women employees.
          As per the guidelines of University Grants Commission, AICTE and the Supreme Court an Internal Complaint Cell / Anti-Sexual Harassment
          Cell have been constituted by the College. Its Internal Complaints Committee (ICC) members, who can be contacted by any aggrieved person, are as follows:
        </p>

        <div className="icc-table-wrapper">
          <table className="icc-table">
            <thead>
              <tr>
                <th>Name of the Committee Members</th>
                <th>Category</th>
                <th>Mobile No</th>
                <th>Email ID</th>
              </tr>
            </thead>
            <tbody>
              {members.map((member, index) => (
                <tr key={index}>
                  <td>{member.name}</td>
                  <td>{member.category}</td>
                  <td>{member.mobile}</td>
                  <td>{member.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
          
        </div>

        <h3>
  <a 
    href={pdf}  
    className="icc-act"
  >
    THE SEXUAL HARASSMENT OF WOMEN AT WORKPLACE (PREVENTION, PROHIBITION AND REDRESSAL) ACT, 2013
  </a>
</h3>


      </div>
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default InternalCommiteeSexualPrevention;
