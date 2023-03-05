import React from "react";
import "./style.css";
import { Link } from 'react-router-dom';

function ProjectCard(props) {
  return (
    <div className="card custom-card">
      <div className="img-container">
        <img alt={props.project} src={props.image} />
      </div>
      <div className="content">
        <ul>  
          <li>
            <strong>Project:</strong> {props.project}
          </li>
          <li>
            <strong>Github files:</strong> <Link to={props.github} target="_blank" >View</Link>
          </li>
          <li>
            <strong>Check me out live:</strong> <Link to={props.livesite} target="_blank" >View</Link>
          </li>
        </ul>
      </div>
      {/* Not in use currently */}
      {/* <span className="remove">𝘅</span> */}
    </div>
  );
}

export default ProjectCard;

