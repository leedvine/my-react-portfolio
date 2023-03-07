import React from 'react';
import "./footer.css";
import linkedinIcon from "../../assets/images/linkedin-icon.png";
import githubIcon from "../../assets/images/github-icon.png";
import cvIcon from "../../assets/images/cv-icon.png";

function Footer() {
    return (
      <footer class="content">
        <div class="inline-block">
  <div class="icon-container">
  <a id="linkedin-icon" href="https://www.linkedin.com/in/lee-vine/" target="_blank" rel="noreferrer"><img src ={linkedinIcon} alt="linkedin icon" /></a>
  <a id="github-icon" href="https://github.com/leedvine" target="_blank" rel="noreferrer"><img src ={githubIcon} alt="github icon" /></a>
  <a id="cv-icon" href="https://drive.google.com/file/d/1LCqfUfYkYz9vzZbbMLMcY21zpnojb299/view?usp=sharing" target="_blank" rel="noreferrer"><img src ={cvIcon} alt="CV icon" /></a>
  </div>
  </div>
      </footer> 
      
    );
  }
  
  export default Footer;

