import React from "react";
import "./projectcard.css";

function ProjectCard(props) {
  return (
    <div className="cell">
    <div className="card">
      <img className="card-image" src={props.image_link} alt={props.title} />
      <div className="card-section">
        <h4>{props.title}</h4>
        <p>{props.description}</p>
        <div>
          <a className="icon-anchor" href={props.repo_link} ><i className="fa fa-github fa-2x" aria-hidden="true"></i></a>
          <a className="icon-anchor"href={props.deployed_link}><i className="fa fa-globe fa-2x" aria-hidden="true"></i></a>
        </div>
      </div>
    </div>
  </div>
  );
}

export default ProjectCard;