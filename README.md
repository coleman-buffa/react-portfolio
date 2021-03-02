# React Portfolio

This project is an upgrade to the previous full stack portfolio. Project information and the associated skills needed the build these projects are stored in a MySQL database. These resources are used to populate the page using axios get requests upon the document loading. Building a full stack portfolio increases the flexiblity of making improvements in the future and adding more projects down the road. The front end of the application is built using React. 

## Table of Contents

||||
|:-:|:-:|:-:|
| [Project Introduction](#react-portfolio) | [Table of Contents](#table-of-contents) | [Goals and Methods](#goals-and-methods) 
| [Deployed Link](#deployed-link) | [Technologies](#technologies) | [Author](#author) 
| [Acknowledgments](#acknowledgments) | [License](#license) |
---

## Goals and Methods

This version of the portfolio build was an opportunity to build on progress made in the previous version. The database was upgraded to include additional information about projects as well as updating the project and skill list to reflect my progress as a developer. In addition to database updates the front end of the site was replaced with a React component based build. The portfolio is now a single page application that loads the appropriate React components. Each 'page' in reality is a collection of components some of which are reused (e.g. nav bar and footer) and some that are purpose built. 
Data that is stored inside the MySQL database is accessed once the page is mounted via axios. The request is handled using Express.js middleware (router) and is served a JSON that is the product of a query made by Sequelize. Once the database query is sent back to the client it stored in a stateful component that can make use of it. Primarily state is used to repeatidly generate components with content that originated from the database. The following exemplifies this process:

First the component makes a request to the database for info on page mount and stores the result in state
```javascript
const [projects, setProjects] = useState([]);

useEffect(() => {
  loadProjects();
}, []);

const loadProjects = () => {
  API.getProjects({})
    .then(data => {        
      setProjects(data.data);
    })
};
```
Then the component maps through state thus creating a sub-component multiple times
```javascript
{projects.map(project => (
  <ProjectCard
    key={project.id}
    title={project.title}
    description={project.description}
    image_link={project.image_link}
    repo_link={project.repo_link}
    deployed_link={project.deployed_link}
  />
```
State is passed down as props to the sub-component which renders the data in a desireable fashion. Note since there is only one sub-component prop-drilling was deemed appropriate.
```javascript
...
<img src={props.image_link} alt={props.title} />
  <div className="card-section">
    <h4>{props.title}</h4>
    <p>{props.description}</p>
    <div>
      <a className="icon-anchor" href={props.repo_link} ><i className="fa fa-github fa-2x" aria-hidden="true"></i></a>
      <a className="icon-anchor"href={props.deployed_link}><i className="fa fa-globe fa-2x" aria-hidden="true"></i></a>
...
```
The process outlined above is also implemented to retrieve and populate other data of interest. 

## Deployed Link

[Deployed to Heroku](https://colemanbuffa-portfolio2.herokuapp.com/portfolio)

## Technologies 

||||
|:-:|:-:|:-:|
|[React](https://reactjs.org/)|[React-Router-Dom](https://www.npmjs.com/package/react-router-dom)|[Foundation](https://get.foundation/)
|[Axios](https://www.npmjs.com/package/axios)|[Sequelize](https://sequelize.org/master/index.html)|[Nodemod](https://www.npmjs.com/package/nodemon)

## Author

Coleman Buffa

||||
|:-:|:-:|:-:|
|[Git Hub](https://github.com/coleman-buffa/react-portfolio)|[My Portfolio](https://colemanbuffa-portfolio2.herokuapp.com/portfolio)|[LinkedIn](https://www.linkedin.com/in/coleman-buffa/)

## Acknowledgments

My thanks to the many mentors and friends who are a constant source of project ideas, learning topics, and guidance.

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

### [Back to Table of Contents](#table-of-contents)