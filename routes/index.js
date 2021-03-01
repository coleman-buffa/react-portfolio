const path = require("path");
const router = require("express").Router();
const db = require("../models");

// api routes
router.get("/api/skills", (req, res) => {
  db.Skill.findAll({
    attributes: ["id", "skill"]
  }).then((data) => {
    res.json(data);
  });
});

router.get("/api/navprojects", (req, res) => {
  db.Project.findAll({
    attributes: ['title']
  }).then((data) => {
    res.json(data);
  });
});

router.get("/api/projects", (req, res) => {
  db.Project.findAll().then((data) => {
    res.json(data);
  });
});

router.get("/api/projectskills", (req, res) => {
  db.ProjectSkills.findAll({
    include: [{model: db.Skill, attributes: ["skill"]}]
  }).then((data) => {
    res.json(data);
  });
});

// send react app
if (process.env.NODE_ENV === "production") {
  router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"))
  })
}

module.exports = router;