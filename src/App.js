import React from 'react';
import { Button } from 'react-bootstrap';
import Header from './comman__components/header/Header'
import Footer from './comman__components/footer/Footer';
import { BrowserRouter as Router, Routes, Route ,Link} from 'react-router-dom';
// import Other_project from './components/core/project_dropdown/Other_project';
import Contact from './components/contact/Contact';
function App() {
  return (
    <Router>
      <Header/>
      {/* <Other_project/> */}
      <Contact/>
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
