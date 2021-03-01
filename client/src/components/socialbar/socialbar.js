import React from "react";
import "./socialbar.css";
import Resume from "./colemanbuffa_resume.pdf"

function SocialBar() {
  return (
    <ul className="sticky-social-bar">
      <li className="social-icon">
        <a href="https://github.com/coleman-buffa">
          <i className="fa fa-github" aria-hidden="true"></i>
          <span className="social-icon-text">GitHub</span>
        </a>
      </li>
      <li className="social-icon">
        <a href="https://www.linkedin.com/in/coleman-buffa/">
          <i className="fa fa-linkedin" aria-hidden="true"></i>
          <span className="social-icon-text">Linkedin</span>
        </a>
      </li>
      <li className="social-icon">
        <a href={Resume} target="_blank">
          <i className="fa fa-file-pdf" aria-hidden="true"></i>
          <span className="social-icon-text">Resume</span>
        </a>
      </li>
    </ul>
  );
}

export default SocialBar;


