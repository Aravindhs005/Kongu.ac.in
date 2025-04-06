import React from 'react';
import './index.css';

import HomePage from './components/HomePage/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Department
import Auto from './components/Departments/Auto/Auto.jsx';
import Aids from './components/Departments/Aids/Aids.jsx';
import Aiml from './components/Departments/Aiml/Aiml.jsx';
import Chem from './components/Departments/Chemical/Chem.jsx';
import Chemistry from './components/Departments/Chemistry/Chemistry.jsx';
import Civil from './components/Departments/Civil/Civil.jsx'; 
import Csd from './components/Departments/Csd/Csd.jsx';
import Cse from './components/Departments/Cse/Cse.jsx';
import Ctpg from './components/Departments/Ctpg/Ctpg.jsx';
import Ctug from './components/Departments/Ctug/Ctug.jsx';
import Ece from './components/Departments/Ece/Ece.jsx';
import Eee from './components/Departments/Eee/Eee.jsx';
import Eie from './components/Departments/Eie/Eie.jsx';
import English from './components/Departments/English/English.jsx';
import Foodtech from './components/Departments/Foodtech/Foodtech.jsx';
import It from './components/Departments/It/It.jsx';
import Maths from './components/Departments/Maths/Maths.jsx';
import Mba from './components/Departments/Mba/Mba.jsx';
import Mca from './components/Departments/Mca/Mca.jsx';
import Mech from './components/Departments/Mech/Mech.jsx';
import Mts from './components/Departments/Mts/Mts.jsx';
import Physics from './components/Departments/Physics/Physics.jsx';

// AboutUs
import AboutKec from './components/AboutUs/AboutKec/AboutKec.jsx';
import AcademicCouncil from './components/AboutUs/AcademicCouncil/AcademicCouncil.jsx';
import CollegeRules from './components/AboutUs/CollegeRules/CollegeRules.jsx';
import Endownments from './components/AboutUs/Endownments/Endownments.jsx';
import GoverningCouncil from './components/AboutUs/GoverningCouncil/GoverningCouncil.jsx';
import HeadoftheInstitution from './components/AboutUs/HeadoftheInstitution/HeadoftheInstitution.jsx';
import UniversityRanks from './components/AboutUs/UniversityRanks/UniversityRanks.jsx';
import Vision from './components/AboutUs/Vision/Vision.jsx';
import OfficeBearers from './components/AboutUs/OfficeBearers/OfficeBearers.jsx';

// Accrediation
import Autonomous from './components/Accrediation/Autonomous/Autonomous.jsx';
import Nba from './components/Accrediation/NBA/Nba.jsx';
import Naac from './components/Accrediation/NAAC/Naac.jsx';
import Nirf from './components/Accrediation/NIRF/Nirf.jsx';
import Aicteet from './components/Accrediation/AICTEE&T/Aicteet.jsx';
import Aictemba from './components/Accrediation/AICTEMBA/Aictemba.jsx';
import Aictemca from './components/Accrediation/AICTEMCA/Aictemca.jsx';
import University from './components/Accrediation/University/University.jsx';

// Other Pages
import Facilites from './components/ExtraPages/Facilites/Facilites.jsx';
import Placement from './components/HomePage/Placement/Placement.jsx';
import Physicaldept from './components/ExtraPages/Facilites/Physicaldept/Physicaldept.jsx';
import Library from './components/ExtraPages/Facilites/Library/Library.jsx';
import HostelsandAccomodations from './components/ExtraPages/Facilites/Hostel and Accomodations/HostelsandAccomodations.jsx';
import Transport from './components/ExtraPages/Facilites/Transport/Transport.jsx';
import Dispensary from './components/ExtraPages/Facilites/Dispensary/Dispensary.jsx';

const App = () => {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<HomePage />} />

        {/* Departments */}

        <Route path='/auto' element={<Auto />}/>
        <Route path='/aids' element={<Aids />}/>
        <Route path='/aiml' element={<Aiml />}/>
        <Route path='/chem' element={<Chem />}/>
        <Route path='/chemistry' element={<Chemistry />}/>
        <Route path='/civil' element={<Civil />}/>
        <Route path='/csd' element={<Csd />}/>
        <Route path='/cse' element={<Cse />}/>
        <Route path='/ctug' element={<Ctug />}/>
        <Route path='/ctpg' element={<Ctpg />}/>
        <Route path='/ece' element={<Ece />}/>
        <Route path='/eie' element={<Eie />}/>
        <Route path='/eee' element={<Eee />}/>
        <Route path='/english' element={<English />}/>
        <Route path='/foodtech' element={<Foodtech />}/>
        <Route path='/it' element={<It />}/>
        <Route path='/maths' element={<Maths />}/>
        <Route path='/mba' element={<Mba />}/>
        <Route path='/mca' element={<Mca />}/>
        <Route path='/mech' element={<Mech />}/>
        <Route path='/mts' element={<Mts />}/>
        <Route path='/physics' element={<Physics />}/>


        {/* AboutKec */}
        <Route path='/aboutkec' element={<AboutKec />}/>
        <Route path='/vision' element={<Vision />}/>
        <Route path='/officebearers' element={<OfficeBearers />}/>
        <Route path='/headoftheinstitution' element={<HeadoftheInstitution />}/>
        <Route path='/governingcouncil' element={<GoverningCouncil />}/>
        <Route path='/academiccouncil' element={<AcademicCouncil />}/>
        <Route path='/universityranks' element={<UniversityRanks />}/>
        <Route path='/endownments' element={<Endownments />}/>
        <Route path='/collegerules' element={<CollegeRules />}/>

        {/* Accrediation */}
        <Route path='/autonomous' element={<Autonomous />}/>
        <Route path='/university' element={<University/>}/>
        <Route path='/nba' element={<Nba />}/>
        <Route path='/naac' element={<Naac />}/>
        <Route path='/nirf' element={<Nirf />}/>
        <Route path='/aicteet' element={<Aicteet />}/>
        <Route path='/aictemca' element={<Aictemca />}/>
        <Route path='/aictemba' element={<Aictemba />}/>

        {/* Extra Pages */}
        <Route path='/facilities' element={<Facilites />}/>
        <Route path='/placement' element={<Placement />}/>
        <Route path='/facilities/physicaldept' element={<Physicaldept/>}/>
        <Route path='/facilities/library' element={<Library/>}/>
        <Route path='/facilities/hostelsandaccomodation' element={<HostelsandAccomodations/>}/>
        <Route path='/facilities/transport' element={<Transport/>}/>
        <Route path='/facilities/dispensary' element={<Dispensary/>}/>

       




      </Routes>
    </Router>
  );
};

export default App;
