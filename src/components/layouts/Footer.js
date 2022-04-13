import React, { Component } from 'react'
import './Footer.css';

export default class Footer extends Component {
    render() {
        return (
          <div className="footer-wrapper">
            <div className="say-hello">
              <h1>Say hello and connect with me on any of these platforms!</h1>
            </div>

            <div className="web-footer">
              <div className="row">
                <div className="col-md-6 offset-md-3 social">
                  <div className="container">
                    <div className="row justify-content-md-center">
                      <a className="no-underline" href="https://www.linkedin.com/in/sabina-bialic/" rel="noreferrer"  target="_blank">
                        <div className="col-md-auto name">
                          <i className="fab fa-linkedin social-icon"></i>
                            LinkedIn
                        </div>
                      </a>
                      <a className="no-underline" href="https://github.com/sabinabialic" rel="noreferrer" target="_blank">
                        <div className="col-md-auto name">
                          <i className="fab fa-github social-icon"></i>
                            Github
                        </div>
                      </a>
                      <a className="no-underline in-line" href="mailto:sabina.bialic@gmail.com" rel="noreferrer" target="_blank">
                        <div className="col-md-auto name">
                          <i className="far fa-envelope social-icon"></i>
                            Email
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mobile-footer">
              <div className="row">
                  <div className="col-md-6 offset-md-3 social">
                      <div className="container">
                          <div className="row justify-content-md-center">
                              <a className="no-underline" href="https://www.linkedin.com/in/sabina-bialic/">
                                  <div className="col-md-auto name">
                                      <i className="fab fa-linkedin social-icon"></i>
                                  </div>
                              </a>
                              <a className="no-underline " href="https://github.com/sabinabialic">
                                  <div className="col-md-auto name">
                                      <i className="fab fa-github social-icon"></i>
                                  </div>
                              </a>
                              <a className="no-underline" href="mailto:sabina.bialic@email.com">
                                  <div className="col-md-auto name">
                                      <i className="far fa-envelope social-icon"></i>
                                  </div>
                              </a>
                          </div>
                      </div>
                  </div>
              </div>
            </div>


            <div className="created-by">
                I built this site using <b>Javascript</b> and <b>React.</b>
                You can find the source code <a href="https://github.com/sabinabialic/website" rel="noreferrer" target="_blank">here</a>.
            </div>


            <div className="blue-line"></div>
          </div >
        )
    }
}
