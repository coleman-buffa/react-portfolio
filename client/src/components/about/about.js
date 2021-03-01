import React from "react";
import "./about.css";
import ProfilePic from "./profile.jpg";
import API from "../../utils/API";

// Add some functions that make API call to get skill list


function About() {
  return (
    <div className="portfolio-resume grid-x">

      <div className="large-4 cell">
        <div className="portfolio-resume-wrapper">
          <img className="portfolio-resume-headshot" src={ProfilePic} alt="headshot" />
          <h3 className="portfolio-resume-header">Skills</h3>
          <ul >


          </ul>
        </div>
      </div>

      <div className="large-4 cell">
        <div className="portfolio-resume-wrapper">
          <h3 className="portfolio-resume-header">Experience</h3>
          <div className="portfolio-resume-spacing">
            <h5><strong>UC Berkeley Code Camp</strong></h5>
            <p>Full stack web devoper intensive training program. Attended Dec '20 - March '21.  </p>
            <ul>
              <li>MERN Stack</li>
              <li>Computer Science Concepts</li>
              <li>Leading Industry Training</li>
            </ul>
          </div>
          <div className="portfolio-resume-spacing">
            <h5><strong>Completed 20 projects</strong></h5>
            <p>See Project page for highlights</p>
          </div>
        </div>
      </div>

      <div className="large-4 cell">
        <div className="portfolio-resume-wrapper">
          <h3 className="portfolio-resume-header">About Me</h3>
          <p>Coleman is a professional complex problem solver with extensive experience helping teams and clients achieve their goals. He started using computers after building his first in fifth grade, and is a consumer parts enthusiast. He is also a skilled woodworker, and brings the craftsmanship values of quality and efficiency to all aspects of life.</p>
          <div className="portfolio-resume-contact-info">
            <a href="mailto:#"><i className="fa fa-envelope" aria-hidden="true"></i>coleman.buffa@gmail.com</a>
          </div>
        </div>
      </div>

    </div>
  );
}

export default About;
