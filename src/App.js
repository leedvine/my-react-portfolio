import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Discover from './components/pages/Discover';
import Search from './components/pages/Search';

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
          <Route path="/discover" element={<Discover />} />
          {/* Define a route that will have descendant routes */}
          <Route path="/search/*" element={<Search />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

