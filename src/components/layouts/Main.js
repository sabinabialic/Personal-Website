import React, { Component } from 'react';
import './Main.css';
import art from '../../assets/images/dp.jpg';

export default class MainPage extends Component {
  render() {
    return (
      <div id="main" className="main-wrapper">
        <div className="container">
          <div className="table align-items-center">
            <div className="table-cell">
              <div className="banner-content slide-in-blurred-left">
                <h1>Welcome! <span role="img" aria-label="Hand">👋</span></h1>
                <p>
                  My name is <b>Sabina Bialic</b> and I am a <b>Developer</b> at
                  Employment and Social Development Canada, working to implement and 
                  modernize programs within the department.
                </p>
                <p>
                  My interests include fullstack development, cross-platform development
                  and blockchain technologies. I love to learn and work on new projects in my personal time!
                </p>
              </div>
            </div>
            <div className="table-cell slide-in-blurred-bottom">
                <img src={art} className='me' alt="loading..." />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
