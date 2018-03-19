import React, { Component } from 'react';

import './App.css';
import Modal from './components/Modal';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Intro from './components/Intro';
import Projects from './components/Projects';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Modal />
        <Navbar />
        <Header />
        <Intro />
        <Projects />
        <p>Chicken</p>
      </div>
    );
  }
}

export default App;
