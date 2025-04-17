import React,{useState,useEffect} from 'react';
import './OfficeBearers.css';
import Section from '../../HomePage/Section/Section';
import Navbar from '../../HomePage/navbar/Navbar';
import Footer from '../../HomePage/Footer/Footer';
import ScrollToTopButton from '../../ScrollToTopButton';
import Kvit from '../../../assets/images/kvitbuilding.jpg'
import Spinner from '../../Spinner';

const OfficeBearers = () => {
  const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 1500);
      return () => clearTimeout(timer);
    }, []);
  
  
    return loading ? <Spinner /> : (
    <>
      <Section />
      <Navbar />
      <div className="office-container">
      <div className="office-intro">
        <div className="office-text">
            <h2 className="office-heading">KVITT TRUST</h2>
            <p className="office-description">
            The Kongu Vellalar Institute of Technology Trust" (KVITT), came into being on account of the continuous and magnanimous efforts of a group of illustrious people from all walks of life during 1983. The origin of the term " K O N G U " dates back to putative race called " C H E R A " who ruled the south in those days. Thus, the word "Kongu Vellalar" refers to a community called Kongu Vellalar Gounders, mainly concentrated in and around Erode District. The Community "KONGU" as it is called, was pushed to the background, owing to the privatisation of facilities in the field of education, especially, Technical Education. Hence, this Trust was created by a group of philanthropists from Kongu Vellalar Gounders to promote technical education and cultural activities and to encourage literary and scientific knowledge.
            </p>
        </div>
        <div className="office-image">
            <img src={Kvit} alt="KVIT Building" />
        </div>
        </div>

        <h2 className="office-heading">Management</h2>
        <div className="office-grid">
          <div className="office-card"><strong>Dr. R. KUMARASWAMY, M.B.B.S.</strong><br />PRESIDENT</div>
          <div className="office-card"><strong>Dr. M. MANICKAM, M.Sc., M.B.A.</strong><br />VICE PRESIDENT</div>
          <div className="office-card"><strong>THIRU. C. KANAGASABAPATHY, B.A.</strong><br />VICE PRESIDENT</div>
          <div className="office-card"><strong>TMT. PARAMESWARI LINGAMURTHY, B.A.</strong><br />VICE PRESIDENT</div>
          <div className="office-card"><strong>THIRU. E. R. K. KRISHNAN, M.Com.</strong><br />VICE PRESIDENT</div>
          <div className="office-card"><strong>THIRU. R. BALAKRISHNAN, D.M.E.</strong><br />VICE PRESIDENT</div>
          <div className="office-card"><strong>THIRU. P. SATHIYAMOORTHY, B.E., M.B.A., M.S.</strong><br />SECRETARY</div>
          <div className="office-card"><strong>THIRU. R. R. SATHIYAMURTHY, B.Arch., M.S.</strong><br />JOINT SECRETARY</div>
          <div className="office-card"><strong>THIRU. K. PALANISAMY, B.E., M.B.A., M.S.</strong><br />JOINT SECRETARY</div>
          <div className="office-card"><strong>THIRU. K. V. RAVISHANKAR, B.A.</strong><br />TREASURER</div>
          <div className="office-card"><strong>THIRU. A. K. ILANGO, B.Com., M.B.A., LLB.</strong><br />CORRESPONDENT / KEC & KSA</div>
          <div className="office-card"><strong>THIRU. A. VENKATACHALAM, B.Sc.</strong><br />CORRESPONDENT / KPC, KPITI & KNYMC</div>
          <div className="office-card"><strong>THIRU. P. D. THANGAVEL, B.B.M.</strong><br />CORRESPONDENT / KASC</div>
          <div className="office-card"><strong>THIRU. R. M. DEVARAJA</strong><br />CORRESPONDENT / KNMHSS</div>
          
          {/* Patron and Life Members */}
          {[
            "THIRU. C. DEVARAJAN, B.E.",
            "THIRU. P. DHARANIDHARAN, B.B.A(Aus)",
            "TMT. M. DHANALAKSHMI",
            "THIRU. E. R. KAARTHIKEYAN, M.A.",
            "THIRU. K. KARTHIKEYAN, B.Sc., MOM(Aus)",
            "TMT. HARITHA KUMARASAMY, B.E.",
            "THIRU. E. K. LINGAMURTHY, M.A.",
            "THIRU. SKM. MAEILANANDHAN",
            "TMT. MALATHI ELANGO, B.A.",
            "THIRU. “VISHAL BHARATH” M. MURUGESAN",
            "THIRU. S. MUTHUSAMY, M.A.",
            "THIRU. V. K. MUTHUSAMY, B.A., B.L.",
            "THIRU. P. C. PALANISAMY, B.Sc., B.L.",
            "THIRU. S. PALANISWAMY RAJA, M.B.A.",
            "THIRU. M. RAJA",
            "THIRU. P. SACHITHANANDAN",
            "THIRU. D. SHANMUGASUNDARAM, B.E., M.B.A.",
            "Dr. K. SENGOTTUVELAN, M.B.B.S., D.C.H.",
            "THIRU. V. R. SIVASUBRAMANIAN, B.Com., B.L.",
            "THIRU. V. K. SWAMINATHAN, B.Com.",
            "THIRU. M. THANGAVELU (LATE)",
            "THIRU. A. K. C. THIYAGARAJAN",
            "THIRU. D. VENKATESHWARAN, B.E., M.S. (U.S.A)"
          ].map((name, index) => (
            <div className="office-card" key={index}><strong>{name}</strong><br />PATRON / LIFE MEMBER</div>
          ))}
        </div>
      </div>
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default OfficeBearers;
