'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('projects', [
      {
        title: "Media Plug",
        description: "User authenticated full stack application built in a team setting",
        image_link: "./images/media-plug.gif",
        repo_link: "https://github.com/coleman-buffa/media-plug",
        deployed_link: "https://media-plug.herokuapp.com/",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Book Reactor",
        description: "MERN Stack App using Google Books API",
        image_link: "./images/book-reactor.gif",
        repo_link: "https://github.com/coleman-buffa/react-books",
        deployed_link: "https://book-reactor.herokuapp.com/search",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Mineral Mania",
        description: "Try to click on each image once and only once!",
        image_link: "./images/mineral-mania.gif",
        repo_link: "https://github.com/coleman-buffa/click-game",
        deployed_link: "https://coleman-buffa.github.io/click-game/",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Fitness Tracker",
        description: "Track your daily workouts to improve your fitness",
        image_link: "./images/fitness-tracker.gif",
        repo_link: "https://github.com/coleman-buffa/fitness-tracker",
        deployed_link: "https://cryptic-woodland-44713.herokuapp.com/",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Party X",
        description: "Full stack project built with a team",
        image_link: "./images/party-x.gif",
        repo_link: "https://github.com/coleman-buffa/Project-2",
        deployed_link: "https://party-x.herokuapp.com/",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "BurritoZilla",
        description: "First full stack application solo build",
        image_link: "./images/burrito-time.gif",
        repo_link: "https://github.com/coleman-buffa/burrito-time",
        deployed_link: "https://burritozilla.herokuapp.com/",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Employee Tracker",
        description: "CLI employee roster",
        image_link: "./images/employee-tracker.gif",
        repo_link: "https://github.com/coleman-buffa/employee-tracker",
        deployed_link: "",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('projects', null, {});     
  }
};