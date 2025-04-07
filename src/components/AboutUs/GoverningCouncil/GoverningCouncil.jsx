import React,{useState,useEffect} from 'react';
import './GoverningCouncil.css';
import Section from '../../HomePage/Section/Section';
import Navbar from '../../HomePage/navbar/Navbar';
import Footer from '../../HomePage/Footer/Footer';
import ScrollToTopButton from '../../ScrollToTopButton';
import Spinner from '../../Spinner';

const members = [
  {
    name: 'Thiru. P. Sathiyamoorthy BE MBA MS',
    designation: 'Secretary, The Kongu Vellalar Institute of Technology Trust',
    role: 'Chairman',
  },
  {
    name: 'Dr. R. Kumaraswamy MBBS',
    designation: 'President, The Kongu Vellalar Institute of Technology Trust',
    role: 'Member',
  },
  {
    name: 'Thiru. K. V. Ravishankar BA',
    designation: 'Treasurer, The Kongu Vellalar Institute of Technology Trust',
    role: 'Member',
  },
  {
    name: 'Thiru. A. K. Ilango BCom MBA LLB',
    designation: 'Correspondent, Kongu Engineering College',
    role: 'Member',
  },
  {
    name: 'Thiru. P. D. Thangavel BBM',
    designation: 'Correspondent, Kongu Arts and Science College',
    role: 'Member',
  },
  {
    name: 'Thiru. P. Sachithanandan',
    designation: 'Patron Member, The Kongu Vellalar Institute of Technology Trust',
    role: 'Member',
  },
  {
    name: 'The Director',
    designation: 'Directorate of Technical Education, Chennai-600025',
    role: 'Member (Ex-Officio)',
  },
  {
    name: 'Dr. S. P. Jeyapriya',
    designation: 'Professor (CAS), Civil Engg., GCT, Coimbatore',
    role: 'State Government Nominee',
  },
  {
    name: 'Dr. M. A. Bhagyaveni',
    designation: 'Professor, ECE Dept., CEG Campus, Anna University, Chennai',
    role: 'Anna University Nominee',
  },
  {
    name: 'Thiru. T. Sathish Kumar',
    designation: 'CMD, Milky Mist Dairy Food Pvt. Ltd., Erode',
    role: 'Member from Industry',
  },
  {
    name: 'Dr. P. Balasubramanie MSc MPhil PhD ME',
    designation: 'Registrar, Kongu Engineering College',
    role: 'Administrative Staff of the College',
  },
  {
    name: 'Dr. G. Murugesan MS ME PhD',
    designation: 'Chief Coordinator Academic, Professor, ECE, KEC',
    role: 'Member from Faculty',
  },
  {
    name: 'Dr. Karthikeyan Selvarajan',
    designation: 'Associate Professor, Civil Engg., KEC',
    role: 'Member from Faculty',
  },
  {
    name: 'Dr. V. Balusamy BE (Hons), MTech, PhD',
    designation: 'Principal, Kongu Engineering College, Perundurai',
    role: 'Member Secretary',
  },
];

const GoverningCouncil = () => {
  const [loading, setLoading] = useState(true);
    
      useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1500);
        return () => clearTimeout(timer);
      }, []);
    
    
      return loading ? <Spinner /> : (
    <>
      <Section />
      <Navbar />
      <div className="gc-container">
        <h2 className="gc-heading">Governing Council Members</h2>
        <p className="gc-subtitle">Members of the Governing Council Body of the Institution with effect from April 2024</p>
        <div className="gc-grid">
          {members.map((member, index) => (
            <div className="gc-card" key={index}>
              <h3>{member.name}</h3>
              <p>{member.designation}</p>
              <span>{member.role}</span>
            </div>
          ))}
        </div>
      </div>
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default GoverningCouncil;
