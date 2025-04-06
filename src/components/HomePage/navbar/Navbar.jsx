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
                    <Link to="navi-about-us-1" smooth={true} duration={500}>
                      Undergraduates
                    </Link>
                    <Link to="navi-about-us-2" smooth={true} duration={500}>
                      Postgraduates
                    </Link>
                    <Link to="navi-about-us-3" smooth={true} duration={500}>
                      Applied Science
                    </Link>
                    <Link to="navi-about-us-1" smooth={true} duration={500}>
                      Management Studies
                    </Link>
                    <Link to="navi-about-us-2" smooth={true} duration={500}>
                      Computer Application
                    </Link>
                    <Link to="navi-about-us-3" smooth={true} duration={500}>
                      Computer Technology
                    </Link>
                    <Link to="navi-about-us-3" smooth={true} duration={500}>
                      Science and Humanities
                    </Link>
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
                    <Link to="navi-about-us-1" smooth={true} duration={500}>
                      Teaching
                    </Link>
                    <Link to="navi-about-us-2" smooth={true} duration={500}>
                      Non-Teaching
                    </Link>
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
                  <Link to="navi-link-5" smooth={true} duration={500}>
                    Placement
                  </Link>
                  <Link to="navi-link-5" smooth={true} duration={500}>
                    IIPC
                  </Link>
                  <Link to="navi-link-5" smooth={true} duration={500}>
                    Alumni
                  </Link>
                  <Link to="navi-link-5" smooth={true} duration={500}>
                    Online Payment
                  </Link>
                  <Link to="navi-link-5" smooth={true} duration={500}>
                    Contact
                  </Link>
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
          <li onClick={toggleMenu}>Home</li>
          <li onClick={() => toggleDropdown(1)}>
            About Us <FontAwesomeIcon icon={faChevronDown} />
            {activeDropdown === 1 && (
              <ul className="subDropdown">
                <li onClick={toggleMenu}>History</li>
                <li onClick={toggleMenu}>Vision & Mission</li>
              </ul>
            )}
          </li>
          <li onClick={() => toggleDropdown(2)}>
            Programmes <FontAwesomeIcon icon={faChevronDown} />
            {activeDropdown === 2 && (
              <ul className="subDropdown">
                <li onClick={toggleMenu}>Undergraduate</li>
                <li onClick={toggleMenu}>Postgraduate</li>
              </ul>
            )}
          </li>
          <li onClick={() => toggleDropdown(3)}>
            Accreditation <FontAwesomeIcon icon={faChevronDown} />
            {activeDropdown === 3 && (
              <ul className="subDropdown">
                <li onClick={toggleMenu}>NAAC</li>
                <li onClick={toggleMenu}>NBA</li>
              </ul>
            )}
          </li>
          <li onClick={() => toggleDropdown(4)}>
            Careers <FontAwesomeIcon icon={faChevronDown} />
            {activeDropdown === 4 && (
              <ul className="subDropdown">
                <li onClick={toggleMenu}>Faculty Positions</li>
                <li onClick={toggleMenu}>Non-Teaching Positions</li>
              </ul>
            )}
          </li>
          <li onClick={toggleMenu}>Facilities</li>
          <li onClick={toggleMenu}>Academics</li>
          <li onClick={toggleMenu}>COE</li>
          <li onClick={toggleMenu}>R&D</li>
          <li onClick={toggleMenu}>IEF</li>
          <li onClick={toggleMenu}>Placement</li>
          <li onClick={toggleMenu}>IIPC</li>
          <li onClick={toggleMenu}>Alumni</li>
          <li onClick={toggleMenu}>Online Payment</li>
          <li onClick={toggleMenu}>Contact</li>
        </ul>
      </div>
      </nav>
    </>
  );
};

export default Navbar;
