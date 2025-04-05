import React from 'react';
import './index.css';

import HomePage from './components/HomePage/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
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
      </Routes>
    </Router>
  );
};

export default App;
