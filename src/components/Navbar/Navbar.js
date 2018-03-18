import React, { Component } from 'react';

import './Navbar.css';
import Modal from '../Modal';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <ul class="navbar-items">
          <li class="navbar-titles">
            <a href="#about" class="navbar-links">About</a></li>
            <li class="navbar-titles">
              <a href="#projects" class="navbar-links">Projects</a></li>
              <li class="navbar-titles">
                <a href="#contact" class="navbar-links">Contact</a></li>
        </ul>
        <Modal />
      </nav>
    )
  }
}

export default Navbar;
