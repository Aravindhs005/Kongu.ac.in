import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../../assets/images/kec.png";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars,faXmark, faSquareCaretDown,faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [naviSticky, setNaviSticky] = useState(false);
  const [naviMobileMenu, setNaviMobileMenu] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [naviActiveDropdown, setNaviActiveDropdown] = useState(null);
  const [naviIsLogoDropdownOpen, setNaviIsLogoDropdownOpen] = useState(false);
  let naviTimeoutId = null;
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    toggleMenu(); 
    navigate(path);
  };

  const naviToggleLogoDropdown = () => {
    setNaviIsLogoDropdownOpen(!naviIsLogoDropdownOpen);
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  useEffect(() => {
    const naviHandleScroll = () => {
      window.scrollY > 50 ? setNaviSticky(true) : setNaviSticky(false);
    };

    window.addEventListener("scroll", naviHandleScroll);
    return () => window.removeEventListener("scroll", naviHandleScroll);
  }, []);

  useEffect(() => {
    const naviHandleClickOutside = (event) => {
      if (
        !event.target.closest(".navi-dropdown") &&
        !event.target.closest(".navi-dropdown-content")
      ) {
        setNaviActiveDropdown(null);
      }
    };

    document.addEventListener("click", naviHandleClickOutside);
    return () => document.removeEventListener("click", naviHandleClickOutside);
  }, []);
  
  const toggleMenu = () => {
    setNaviMobileMenu((prev) => !prev);
  };


  const naviToggleDropdown = (index) => {
    setNaviActiveDropdown(naviActiveDropdown === index ? null : index);
  };

  return (
    <>
      <nav className={`navi-container ${naviSticky ? "navi-dark-nav navi-navbar-shrink" : ""}`}>
        <div className="navi-banner-left">
          <div className="navi-banner-logo">
            <img src={logo} alt="navi-logo" />
          </div>
          <div className="navi-banner-text">
            <h1>KONGU ENGINEERING COLLEGE (Autonomous)</h1>
            <p>Affiliated to Anna University | Accredited by NAAC with A++ Grade</p>
            <p>Perundurai Erode - 638060 Tamilnadu India</p>
          </div>
        </div>

        <div className="navi-system-nav">
          <div className="navi-top-nav">
            <ul>

              <li onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
                <span className="navi-dropdown-title">Home</span>
              </li>

              {/* About Us Dropdown */}
              <li
                className="navi-dropdown"
                onMouseEnter={() => {
                  clearTimeout(naviTimeoutId);
                  naviToggleDropdown(1);
                }}
                onMouseLeave={() => {
                  naviTimeoutId = setTimeout(() => setNaviActiveDropdown(null), 300);
                }}
              >
                <span className="navi-dropdown-title">About Us</span>
                {naviActiveDropdown === 1 && (
                  <div
                    className="navi-dropdown-content"
                    onMouseEnter={() => clearTimeout(naviTimeoutId)}
                    onMouseLeave={() => {
                      naviTimeoutId = setTimeout(() => setNaviActiveDropdown(null), 300);
                    }}
                  >
                    <span onClick={() => navigate('/aboutkec')} style={{ cursor: 'pointer' }}>
                      About KEC
                    </span>
                    <span onClick={() => navigate('/vision')} style={{ cursor: 'pointer' }}>
                      Vision Mission & Quality Policy
                    </span>
                    <span onClick={() => navigate('/officebearers')} style={{ cursor: 'pointer' }}>
                      KVIT Office Bearers
                    </span>
                    <span onClick={() => navigate('/headoftheinstitution')} style={{ cursor: 'pointer' }}>
                      Head of the Institution
                    </span>
                    <span onClick={() => navigate('/governingcouncil')} style={{ cursor: 'pointer' }}>
                      Governing Council
                    </span>
                    <span onClick={() => navigate('/academiccouncil')} style={{ cursor: 'pointer' }}>
                      Academic Council
                    </span>
                    <span onClick={() => navigate('/universityranks')} style={{ cursor: 'pointer' }}>
                      University Ranks
                    </span>
                    <span onClick={() => navigate('/endownments')} style={{ cursor: 'pointer' }}>
                      Endownments
                    </span>
                    <span onClick={() => navigate('/collegerules')} style={{ cursor: 'pointer' }}>
                      College Rules
                    </span>
                    
                  </div>
                )}
              </li>

              {/* Programmes Dropdown */}
              <li
                className="navi-dropdown"
                onMouseEnter={() => {
                  clearTimeout(naviTimeoutId);
                  naviToggleDropdown(2);
                }}
                onMouseLeave={() => {
                  naviTimeoutId = setTimeout(() => setNaviActiveDropdown(null), 300);
                }}
              >
                <span className="navi-dropdown-title">Programmes</span>
                {naviActiveDropdown === 2 && (
                  <div
                    className="navi-dropdown-content"
                    onMouseEnter={() => clearTimeout(naviTimeoutId)}
                    onMouseLeave={() => {
                      naviTimeoutId = setTimeout(() => setNaviActiveDropdown(null), 300);
                    }}
                  >
                    <span onClick={() => navigate('/ug')} style={{ cursor: 'pointer' }}>
                      Undergraduates
                    </span>
                    <span onClick={() => navigate('/pg')} style={{ cursor: 'pointer' }}>
                      Postgraduates
                    </span>
                    <span onClick={() => navigate('/appliedscience')} style={{ cursor: 'pointer' }}>
                      Applied Science
                    </span>
                    <span onClick={() => navigate('/mba')} style={{ cursor: 'pointer' }}>
                      Management Studies
                    </span>
                    <span onClick={() => navigate('/mca')} style={{ cursor: 'pointer' }}>
                      Computer Applications
                    </span>
                    <span onClick={() => navigate('/snh')} style={{ cursor: 'pointer' }}>
                      Science & Humanities
                    </span>
                  </div>
                )}
              </li>

              

              {/* Accrediation */}
              <li
                className="navi-dropdown"
                onMouseEnter={() => {
                  clearTimeout(naviTimeoutId);
                  naviToggleDropdown(3);
                }}
                onMouseLeave={() => {
                  naviTimeoutId = setTimeout(() => setNaviActiveDropdown(null), 300);
                }}
              >
                <span className="navi-dropdown-title">Accrediation</span>
                {naviActiveDropdown === 3 && (
                  <div
                    className="navi-dropdown-content"
                    onMouseEnter={() => clearTimeout(naviTimeoutId)}
                    onMouseLeave={() => {
                      naviTimeoutId = setTimeout(() => setNaviActiveDropdown(null), 300);
                    }}
                  >

                    <span onClick={() => navigate('/autonomous')} style={{ cursor: 'pointer' }}>
                      Autonomous
                    </span>
                    <span onClick={() => navigate('/university')} style={{ cursor: 'pointer' }}>
                      University
                    </span>
                    <span onClick={() => navigate('/nba')} style={{ cursor: 'pointer' }}>
                      NBA
                    </span>
                    <span onClick={() => navigate('/naac')} style={{ cursor: 'pointer' }}>
                      NAAC
                    </span>
                    <span onClick={() => navigate('/nirf')} style={{ cursor: 'pointer' }}>
                      NIRF
                    </span>
                    <span onClick={() => navigate('/aicteet')} style={{ cursor: 'pointer' }}>
                      AICTE E&T
                    </span>
                    <span onClick={() => navigate('/aictemca')} style={{ cursor: 'pointer' }}>
                      AICTE MCA
                    </span>
                    <span onClick={() => navigate('/aictemba')} style={{ cursor: 'pointer' }}>
                      AICTE MBA
                    </span>
                  </div>
                )}
              </li>

              {/* Careers */}
              <li
                className="navi-dropdown"
                onMouseEnter={() => {
                  clearTimeout(naviTimeoutId);
                  naviToggleDropdown(4);
                }}
                onMouseLeave={() => {
                  naviTimeoutId = setTimeout(() => setNaviActiveDropdown(null), 300);
                }}
              >
                <span className="navi-dropdown-title">Careers</span>
                {naviActiveDropdown === 4 && (
                  <div
                    className="navi-dropdown-content"
                    onMouseEnter={() => clearTimeout(naviTimeoutId)}
                    onMouseLeave={() => {
                      naviTimeoutId = setTimeout(() => setNaviActiveDropdown(null), 300);
                    }}
                  >
                     <span onClick={() => window.open('https://kms.kongu.edu/recruitment/', '_blank')} >
                      Teaching
                    </span>
                    <span onClick={() => window.open('https://kms.kongu.edu/nt_recruitment/', '_blank')} >
                      Non-Teaching
                    </span>
                  </div>
                )}
              </li>

              {/* Clickdown for Facilities */}
              <li className="navi-clickdown" onClick={naviToggleLogoDropdown}>
                <span className="navi-clickdown-logo">
                  <FontAwesomeIcon icon={faSquareCaretDown} />
                </span>
              </li>

              {naviIsLogoDropdownOpen && (
                <div className="navi-clickdown-content">
                    <span onClick={() => navigate('/facilities')} style={{ cursor: 'pointer' }}>
                      Facilities
                    </span>
                    <span onClick={() => window.open('https://academic.kongu.edu/', '_blank')} >
                      Academic
                    </span>

                    <span onClick={() => window.open('https://coe.kongu.edu/', '_blank')} >
                      COE
                    </span>

                    <span onClick={() => window.open('https://rnd.kongu.edu/', '_blank')} >
                      R&D
                    </span>
                  <Link to="navi-link-5" smooth={true} duration={500}>
                    IEF
                  </Link>
                  <span onClick={() => navigate('/placement')} style={{ cursor: 'pointer' }}>
                      Placement
                    </span>
                  <span onClick={() => window.open('https://http://iipc.kongu.edu/', '_blank')} >
                      IIPC
                    </span>
                    <span onClick={() => window.open('https://alumni.kongu.edu/', '_blank')} >
                      Alumni
                    </span>
                    <span onClick={() => navigate('/onlinepayment')} style={{ cursor: 'pointer' }}>
                      Online Payment
                    </span>
                    <span onClick={() => navigate('/contact')} style={{ cursor: 'pointer' }}>
                      Contact
                    </span>
                </div>
              )}
            </ul>
          </div>
        </div>

        <FontAwesomeIcon 
        icon={naviMobileMenu ? faXmark : faBars} 
        className="navi-menu-icon" 
        onClick={toggleMenu} 
      />

      <div className={`mobileView ${naviMobileMenu ? "open" : "closed"}`}>
        <ul className="naviMobileMenu">
        <li onClick={() => handleNavigation("/")}>Home</li>
          <li onClick={() => toggleDropdown(1)}>
            About Us <FontAwesomeIcon icon={faChevronDown} />
            {activeDropdown === 1 && (
              <ul className="subDropdown">
              <li onClick={() => handleNavigation("/aboutus")}>About KEC</li>
              <li onClick={() => handleNavigation("/vision")}>Vision Mission & Quality Policy</li>
              <li onClick={() => handleNavigation("/officebearers")}>KVIT Office Bearers</li>
              <li onClick={() => handleNavigation("/headoftheinstitution")}>Head of the Institution</li>
              <li onClick={() => handleNavigation("/governingcouncil")}>Governing Council</li>
              <li onClick={() => handleNavigation("/academiccouncil")}>Academic Council</li>
              <li onClick={() => handleNavigation("/universityranks")}>University Ranks</li>
              <li onClick={() => handleNavigation("/endownments")}>Endownments</li>
              <li onClick={() => handleNavigation("/collegerules")}>College Rules</li>
              </ul>
            )}
          </li>
          <li onClick={() => toggleDropdown(2)}>
            Programmes <FontAwesomeIcon icon={faChevronDown} />
            {activeDropdown === 2 && (
              <ul className="subDropdown">
              <li onClick={() => handleNavigation("/ug")}>Undergraduates</li>
              <li onClick={() => handleNavigation("/pg")}>Postgraduates</li>
              <li onClick={() => handleNavigation("/appliedscience")}>Applied Science</li>
              <li onClick={() => handleNavigation("/mba")}>Management Studies</li>
              <li onClick={() => handleNavigation("/mca")}>Computer Applications</li>
              <li onClick={() => handleNavigation("/snh")}>Science & Humanities</li>
              </ul>
                     
              
            )}
          </li>
          <li onClick={() => toggleDropdown(3)}>
            Accreditation <FontAwesomeIcon icon={faChevronDown} />
            {activeDropdown === 3 && (
               <ul className="subDropdown">
               <li onClick={() => handleNavigation("/autonomous")}>Autonomous</li>
               <li onClick={() => handleNavigation("/university")}>University</li>
               <li onClick={() => handleNavigation("/nba")}>NBA</li>
               <li onClick={() => handleNavigation("/naac")}>NAAC</li>
               <li onClick={() => handleNavigation("/nirf")}>NIRF</li>
               <li onClick={() => handleNavigation("/aicteet")}>AICTE E&T</li>
               <li onClick={() => handleNavigation("/aictemca")}>AICTE MCA</li>
               <li onClick={() => handleNavigation("/aictemba")}>AICTE MBA</li>
               </ul>
            )}
          </li>
          <li onClick={() => toggleDropdown(4)}>
            Careers <FontAwesomeIcon icon={faChevronDown} />
            {activeDropdown === 4 && (
              <ul className="subDropdown">
                
              <li onClick={() => window.open('https://kms.kongu.edu/recruitment/')}>Teaching</li>
              <li onClick={() => window.open('https://kms.kongu.edu/nt_recruitment/')}>Non-Teaching</li>
              </ul>
            )}
          </li>
          <li onClick={() => handleNavigation("/facilities")}>Facilities</li>
          <li onClick={() => window.open('https://academic.kongu.edu/')}>Academic</li>
          <li onClick={() => window.open('https://coe.kongu.edu/')}>COE</li>
          <li onClick={() => window.open('https://rnd.kongu.edu/')}>R&D</li>
          <li onClick={toggleMenu}>IEF</li>
          <li onClick={() => handleNavigation("/placement")}>Placement</li>
          <li onClick={() => window.open('https://iipc.kongu.edu/')}>IIPC</li>
          <li onClick={() => window.open('https://alumni.kongu.edu/')}>Alumni</li>
          <li onClick={() => handleNavigation("/onlinepayment")}>Online Payment</li>
          <li onClick={() => handleNavigation("/contact")}>Contact</li>
        </ul>
      </div>
      </nav>
    </>
  );
};

export default Navbar;
