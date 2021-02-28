const db = require("../models");

module.exports = function (app) {
  app.get("/api/allskills", (req, res) => {
    db.Skill.findAll().then((data) => {
      res.json(data);
    });
  });

  app.get("/api/navprojects", (req, res) => {
    db.Project.findAll({
      attributes: ['title']
    }).then((data) => {
      res.json(data);
    });
  });

  app.get("/api/allprojects", (req, res) => {
    db.Project.findAll().then((data) => {
      res.json(data);
    });
  });

  app.get("/api/projectskills", (req, res) => {
    db.ProjectSkills.findAll({
      include: [{model: db.Skill, attributes: ["skill"]}]
    }).then((data) => {
      res.json(data);
    });
  });
};