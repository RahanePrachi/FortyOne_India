import React from 'react';
import { Button } from 'react-bootstrap';
import Header from './comman__components/header/Header'
import Footer from './comman__components/footer/Footer';
import { BrowserRouter as Router, Routes, Route ,Link} from 'react-router-dom';
<<<<<<< HEAD
import Other_project from './components/core/project_dropdown/Other_project';
=======
import Events from './components/events/Events';
import Contact from './components/contact/Contact';
>>>>>>> ae34cdeae7414e6ccac2154d77efb9ba21b10803
function App() {
  return (
    <Router>
      <Header/>
      <Other_project/>
    <Routes>
      
      <Route path="/events" element={<Events />} />
      <Route path="/contact" element={<Contact />} />
      {/* <Route path="/about" element={<About />} /> */}
    </Routes>
      
    <Footer/>
  </Router>
  );
}

export default App;
