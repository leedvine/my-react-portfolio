import React from "react";
import "./style.css";
import { Link } from 'react-router-dom';

function ProjectCard(props) {
  return (
    <div className="card custom-card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Github:</strong> <Link to={props.occupation} target="_blank" >View</Link>
          </li>
          <li>
            <strong>Address:</strong> {props.location}
          </li>
        </ul>
      </div>
      {/* Not in use currently */}
      {/* <span className="remove">𝘅</span> */}
    </div>
  );
}

export default ProjectCard;

