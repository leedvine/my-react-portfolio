import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/pages/home/Home';
import About from './components/pages/projects/Projects';
import Gallery from './components/pages/gallery/Gallery';
import Search from './components/pages/contact/Contact';

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
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          {/* Define a route that will have descendant routes */}
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
