import axios from "axios";

export default {
  //Get all skills
  getSkills: function () {
    return axios.get("/api/skills");
  },
  //Get all projects
  getProjects: function () {
    return axios.get("/api/projects");
  },
};