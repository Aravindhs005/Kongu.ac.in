import React,{useEffect,useState} from 'react';
import './HeadoftheInstitution.css';
import Section from '../../HomePage/Section/Section';
import Navbar from '../../HomePage/navbar/Navbar';
import Footer from '../../HomePage/Footer/Footer';
import ScrollToTopButton from '../../ScrollToTopButton';
import ProfilePic from '../../../assets/images/principal.jfif'; 
import Spinner from '../../Spinner';

const HeadoftheInstitution = () => {
  const [loading, setLoading] = useState(true);
    
      useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1500);
        return () => clearTimeout(timer);
      }, []);
    
    
      return loading ? <Spinner /> : (
    <>
      <Section />
      <Navbar />
      <div className="profile-container">
        <div className="profile-header">
          <img src={ProfilePic} alt="Principal" className="profile-image" />
          <div className="profile-details">
            <h2>Dr. V. Balusamy</h2>
            <p className="profile-title">Principal, Kongu Engineering College</p>
            <p className="profile-location">@KEC</p>
          </div>
        </div>

        <div className="profile-bio">
          <h3>Head of the Institution</h3>
          <p>
          Dr.V.Balusamy, Principal, Kongu Engineering College is an acclaimed academician, researcher and an industrial executive with a total experience of 39 years. He had his BE (Hons) degree in Mechanical Engineering from PSG College of Technology, Coimbatore, MTech degree in Industrial Metallurgy from IIT Madras and PhD from Bharathiar University.
         </p>
          <p>
          He started his career as Scientist in Vikram Sarabhai Space Centre of Indian Space Research Organisation, Trivandrum wherein he contributed towards technology development for fabrication and characterization of advanced space materials like maraging steel, high strength aluminium alloys, low alloy steels and titanium alloys. His significant contribution for space technology is development of welding technology including welding consumables for joining of maraging steel 250 grade which is being widely used for many of space programmes and missile programmes in the country.
          </p>
          <p>
          For a few years, he was working with Larsen and Toubro Ltd., Mumbai in the Heavy Engineering division, wherein he was extensively involved in construction of various process equipments like nuclear reactors, rocket motor cases, heat exchangers, pressure vessels, pipings and defence hardware systems.
          </p>
          <p>
          During the long service with PSG College of Technology, Coimbatore as faculty member in the department of Metallurgical Engineering, he contributed immensely towards welding metallurgy, surface engineering, non destructive testing and characterization of materials. He has carried out several R&D projects sponsored by funding agencies like AICTE, DRDO, NRB, AERB, ARB, SAIL and TATA Steel in areas like welding, casting and characterization of various materials like super austernitic steel, armour steel, titanium alloys, nickel alloys, high strength aluminium alloys and high strength low alloy steels. He executed a project for establishment of an advanced Centre of Excellence for Welding Engineering and Technology with funding support from Department of Heavy Industry, Government of India with a financial outlay of Rs.26.7 Crores. He was instrumental in offering an one year finishing school programme in cooperation with BHEL, Trichy in the field of Welding Engineering and Quality Engineering.
          </p>
          <p>
          He has been serving in Kongu Engineering College as Principal since 2019.
          </p>
          <p>
          He has to his credit about 50 publications in reputed International Journals and 3 Text Books. He has produced 12 PhDs.
          </p>
        </div>
      </div>
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default HeadoftheInstitution;
