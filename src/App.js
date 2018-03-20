import React, { Component } from 'react';

import './App.css';
import Modal from './components/Modal';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Modal />
        <Navbar />
        <Header />
        <Intro />
        <hr className="line" />
        <Projects />
        <hr className="line" />
        <Contact />
        <hr className="line" />
        <Footer />
      </div>
    );
  }
}

export default App;
