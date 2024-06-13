import React, { Component } from 'react';
import './Main.css';
import art from '../../assets/images/newdp.jpeg';

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
                  My name is <b>Sabina Bialic</b> and I am a <b>Release Engineer</b> at <b>PENN Entertainment </b> 
                  working on designing and improving the release process to reduce toil, provide insights to 
                  stakeholders, and ensure reliable changes.
                </p>
                <p>
                  I am passionate about DevOps and love to work on cloud infrastructure! My favourite programming language is Java ☕
                </p>
                <p>
                  Throughout my career I have gained experience working with Microsoft Azure and SAP BTP, Java and 
                  Springboot for backend developmnet, and Javascript for frontend development. I have also gained 
                  hands-on experience working with Docker and Kubernetes for cloud orchestration.
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
