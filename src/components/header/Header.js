import React from 'react';
import { NavLink } from 'react-router-dom';
import "./header.css";

function Header() {
  return (
    <header class="content">

<div class="nav-container ">
    <ul className="nav nav-tabs justify-content-center">
      <li className="nav-item">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="projects"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Latest Projects
        </NavLink>
        </li>
        <li className="nav-item">
        <NavLink
          to="gallery"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Gallery
        </NavLink>
        </li>
      
      <li className="nav-item">
        <NavLink
          to="contact"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Contact
        </NavLink>
      
      </li>
    </ul>
    </div>

    <div id="logo-container"></div>


    
    </header> 
  );
}

export default Header;
