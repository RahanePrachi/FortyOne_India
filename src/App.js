import React from 'react';
import { Button } from 'react-bootstrap';
import Header from './comman__components/header/Header'
import Footer from './comman__components/footer/Footer';
import { BrowserRouter as Router, Routes, Route ,Link} from 'react-router-dom';
import Events from './components/events/Events';
import Contact from './components/contact/Contact';
import Other_project from './components/core/project_dropdown/Other_project.jsx'
function App() {
  return (
    <Router>
      <Header/>
     
    <Routes>
      
      <Route path="/events" element={<Events />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/other-project" element={ <Other_project/>} />
      {/* <Route path="/events" element={<Events/>} /> */}
    </Routes>
      
    <Footer/>
  </Router>
  );
}

export default App;
