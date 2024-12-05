import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Header from './comman__components/header/Header'
import Footer from './comman__components/footer/Footer';
import {BoardMember} from './data/board_member_data';
import NationalBoard from './components/core/about_dropdown/NationalBoard';
import { BrowserRouter as Router, Routes, Route ,Link} from 'react-router-dom';


import Events from './components/events/Events';
import Contact from './components/contact/Contact';
import Other_project from './components/core/project_dropdown/Other_project.jsx'
import Others from './components/communication/Others.jsx';
import Selfie from './components/communication/Selfie.jsx';
import Hoppenings from './components/communication/Hoppenings.jsx';
import Fellowship from './components/communication/Fellowship.jsx';
import FortyOneBnB from './components/links/FortyOneBnB.jsx';
import FortyOneInternationals from './components/links/FortyOneInternationals.jsx';
import LadiesCircleIndia from './components/links/LadiesCircleIndia.jsx';
import RoundTableIndia from './components/links/RoundTableIndia.jsx';
import TangetIndia from './components/links/TangetIndia.jsx';
import ActiveCities from './components/core/about_dropdown/ActiveCities.jsx';
import About from './components/core/about_dropdown/About.jsx';
function App() {
  const [boardMember, setBoardMember]=useState(BoardMember);
  return (
    <Router>
      <Header/>


     

    <Routes>
      
      <Route path="/events" element={<Events />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/other-project" element={ <Other_project/>} />
      <Route path="/communication-others" element={<Others/>} />
      <Route path="/communication-selfie" element={<Selfie/>} />
      <Route path="/communication-hoppenings" element={<Hoppenings/>} />
      <Route path="/communication-fellowship" element={<Fellowship/>} />
      <Route path="/links-fortyOneBnB" element={<FortyOneBnB/>} />
      <Route path="/links-fortyOneInternational" element={<FortyOneInternationals/>} />
      <Route path="/links-ladiesCircleIndia" element={<LadiesCircleIndia/>} />
      <Route path="/links-roundTableIndia" element={<RoundTableIndia/>} />
      <Route path="/links-tangetIndia" element={<TangetIndia/>} />

      <Route path='/about-nationalBoard' element={<NationalBoard boardMember={boardMember}/>}/>
      <Route path='/about-activecities' element={<ActiveCities/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
      
    <Footer/>
  </Router>
  );
}

export default App;
