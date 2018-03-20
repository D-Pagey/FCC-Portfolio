import React, { Component } from 'react';

import './Modal.css';

class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.modal === false) {
      this.setState({
        modal: true
      })
    } else {
      this.setState({
        modal: false
      })
    }
  }

  render() {
    return (
      <div className="modal-container">
       <button type="button" name="button" className="modal-btn">
         <i className="material-icons md-14" onClick={this.handleClick}>info_outline</i></button>
       <dialog className="modal-about" open={this.state.modal}>
         <button type="button" name="button" className="modal-cancel">
           <i className="material-icons sm-12" onClick={this.handleClick}>clear</i></button>
         <h4 className="modal-title">Portfolio Page</h4>
         <p className="modal-text">This is a basic Front End Developer project
           from the FreeCodeCamp curriculum. The user stories to be completed are:</p>
         <ul className="user-stories">
           <li className="story">I can access all of the portfolio webpage's content
             just by scrolling.</li>
           <li className="story">I can click different buttons that will take me to
              different social media pages.</li>
           <li className="story">I can see thumbnail images of different projects.</li>
           <li className="story">I navigate to different sections of the webpage by
             clicking buttons in the navigation.</li>
         </ul>
         <p className="modal-text copy">This project was coded in React using Create-React-App.
           The code can be seen on <a href="https://github.com/D-Pagey/portfolio"
           target="_blank" rel="noopener noreferrer" className="link">Github</a>.</p>
       </dialog>
     </div>
    )
  }
}

export default Modal;
