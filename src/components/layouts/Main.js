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
                  My name is <b>Sabina Bialic</b> and I am a <b>Software Engineer</b> at <b>HashiCorp </b> 
                  working on imporoving the developer experience for HashiCorp products. I am driving improvements in 
                  developer environments, ensuring smooth and efficient day-to-day engineering operations.
                </p>
                <p>
                  I am passionate about DevOps and love to work on cloud infrastructure! My favourite programming language is Java ☕
                </p>
                <p>
                  Throughout my career I have gained experience working with SAP BTP, AWS, and Microsoft Azure. I have worked 
                  with Python, Go, and Java for backend development, and Javascript for frontend development. I have also gained 
                  hands-on experience working with Docker, Kubernetes, Terraform and CloudFoundry for cloud orchestration.
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
