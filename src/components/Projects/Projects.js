import React, { Component } from 'react';

import './Projects.css';
import Wikipedia from './Wikipedia.png';
import Weather from './Weather.png';
import Quoter from './Quoter.png';
import Tribute from './Tribute.png';

class Projects extends Component {
  render() {
    return (
      <div>
        <h3 className="projects-title" id="projects">Projects</h3>
        <p className="projects-intro">Here is a small selection of the work I've done
           on my Web Dev journey:</p>

        <main className="project-thumbnails">
            <span className="thumbnail-container">
              <a href="https://codepen.io/Pagey/full/wrZRqR" target="_blank">
                <img src={Wikipedia} alt="Wikipedia Viewer" className="thumbnails" /></a></span>
            <span className="thumbnail-container">
              <a href="https://codepen.io/Pagey/full/GMgrwM" target="_blank">
                <img src={Weather} alt="Local Weather App" className="thumbnails" /></a></span>
            <span className="thumbnail-container">
              <a href="https://codepen.io/Pagey/full/eEXRZy/" target="_blank">
                <img src={Quoter} alt="Random Quote Machine" className="thumbnails" /></a></span>
            <span className="thumbnail-container">
              <a href="https://codepen.io/Pagey/full/GmOYdm/" target="_blank">
                <img src={Tribute} alt="Tribute Page" className="thumbnails" /></a></span>
        </main>

        <hr className="line" />
      </div>
    );
  }
}

export default Projects;
