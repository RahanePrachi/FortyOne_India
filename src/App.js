import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Header from './comman__components/header/Header'
import Footer from './comman__components/footer/Footer';
import {BoardMember} from './data/board_member_data';
import NationalBoard from './components/core/about_dropdown/NationalBoard';
import { BrowserRouter as Router, Routes, Route ,Link} from 'react-router-dom';
// import Other_project from './components/core/project_dropdown/Other_project';
// import Contact from './components/contact/Contact';
function App() {
  const [boardMember, setBoardMember]=useState(BoardMember);
  return (
    <Router>
      <Header/>
      {/* <Other_project/> */}
      {/* <Contact/> */}
      <NationalBoard boardMember={boardMember}/>
    <Routes>
      {/* <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} /> */}
    </Routes>
      
    <Footer/>
  </Router>
  );
}

export default App;
