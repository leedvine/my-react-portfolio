import React from 'react';
import { NavLink } from 'react-router-dom';
import "./header.css";

function Header() {
  return (
    <header>
      <span> Lee</span>
    <div class="nav-container">
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <NavLink
          to="#"
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
          to="about"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          About
        </NavLink>
        </li>
      <li className="nav-item">
        <NavLink
          to="discover"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Discover
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="search"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Search
        </NavLink>
      
      </li>
    </ul>
    </div>
    </header> 
  );
}

export default Header;
