import React from 'react';
import './Autonomous.css';
import Section from '../../HomePage/Section/Section';
import Navbar from '../../HomePage/navbar/Navbar';
import Footer from '../../HomePage/Footer/Footer';
import ScrollToTopButton from '../../ScrollToTopButton';
import pdf2023_2033 from '../../../assets/docs/Autonomous/KEC_autonomous_approval_23-33.pdf';
import pdf2022_2023 from '../../../assets/docs/Autonomous/KEC_autonomous_approval.pdf';
import pdf2012_2013 from '../../../assets/docs/Autonomous/KEC_autonomous_approval1.pdf';

const Autonomous = () => {
    return (

      <>
        <Section />
        <Navbar />
        <div className="autonomous-container">
          <h2 className="autonomous-heading">Autonomous Status</h2>
          <ul className="autonomous-list">
            <li>
              Kongu Engineering College autonomous status valid up to 2023-2033{' '}
              <a
                href={pdf2023_2033}
                target="_blank"
                rel="noopener noreferrer"
                className="download-link"
              >
                Download
              </a>
            </li>
            <li>
              Kongu Engineering College autonomous status valid up to 2022-2023{' '}
              <a
                href={pdf2022_2023}
                target="_blank"
                rel="noopener noreferrer"
                className="download-link"
              >
                Download
              </a>
            </li>
            <li>
              Kongu Engineering College autonomous status valid up to 2012-2013{' '}
              <a
                href={pdf2012_2013}
                target="_blank"
                rel="noopener noreferrer"
                className="download-link"
              >
                Download
              </a>
            </li>
          </ul>
        </div>
        <Footer />
        <ScrollToTopButton />
      </>
    );
  };
  
  export default Autonomous;
  