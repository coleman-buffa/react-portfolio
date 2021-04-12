'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {    
    await queryInterface.bulkInsert('skills', [
      {
        skill: "HTML/CSS",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        skill: "Javascript",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        skill: "JQuery",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        skill: "Node.js",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        skill: "Express.js",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        skill: "MySQL + Sequelize",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        skill: "MongoDB + Mongoose",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        skill: "React.js",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        skill: "Bootstrap",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        skill: "Foundation 6",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        skill: "Git + GitHub",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        skill: "RESTful API",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        skill: "Heroku",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {  
     await queryInterface.bulkDelete('skills', null, {});     
  }
};
