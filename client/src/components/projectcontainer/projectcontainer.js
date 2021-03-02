import { React, useState, useEffect } from "react";
import "./projectcontainer.css";
import ProjectCard from "../projectcard/projectcard";
import API from "../../utils/API";


function ProjectContainer() {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = () => {
    API.getProjects({})
      .then(data => {        
        setProjects(data.data);
        console.log(data.data);
      })
  };

  return (
    <div className="grid-container">
      <div className="grid-x grid-margin-x small-up-2 medium-up-3">
        {projects.map(project => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image_link={project.image_link}
            repo_link={project.repo_link}
            deployed_link={project.deployed_link}
          />
        ))}

      </div>
    </div>

  );
}

export default ProjectContainer;