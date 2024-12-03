import React from 'react';
import { Button } from 'react-bootstrap';
import Header from './comman__components/header/Header'
import Footer from './comman__components/footer/Footer';
import { BrowserRouter as Router, Routes, Route ,Link} from 'react-router-dom';
function App() {
  return (
    <Router>
      <Header/>
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
