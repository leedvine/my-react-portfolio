import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/pages/home/Home';
import ProjectList from './components/pages/projects/Projects';
import Contact from './components/pages/contact/Contact';
import Gallery from './components/pages/gallery/Gallery';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Router basename="my-react-portfolio">
      <div>
        <Header />
        {/* Wrap Route elements in a Routes component */}
        <Routes>
          {/* Define routes using the Route component to render different page components at different paths */}
          {/* Define a default route that will render the Home component */}
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectList />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

