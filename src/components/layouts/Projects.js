import React, { Component } from 'react';
import './Projects.css';
import hiitme from '../../assets/images/HiitMe.png';

export default class Projects extends Component {
  render() {
    return (
      <div className="projects-wrapper">
        <div className="container">
          <div className="row">
            <div className="col projects-title">Projects</div>
          </div>

          <div className="project-section">
              <div className="row">
                  <div className="project-description">
                      <div className="col1">
                        <img src={hiitme} className='hiitme-image' alt="loading..." />
                      </div>

                      <div className="col2">
                        <div className="project-type">Mobile App</div>
                        <div className="project-name">HiitMe Interval Timer</div>
                        <div className="content">
                            <div className="content1"><hr /></div>
                            <div className="content2">
                                <p>
                                    <b>HiitMe Interval Timer</b> is a customizable interval timer
                                    mobile app for iOS and Android, created using <b>Flutter</b> and <b>Dart</b>.
                                </p>
                            </div>
                        </div>
                      </div>

                      <div className="col3">
                        <a class="action-button" href="https://github.com/sabinabialic/HiitMe-Interval-Timer" target="_blank">
                          <span class="action-button-text">Github</span>
                          <span class="action-button-icon"><i class="fab fa-github" aria-hidden="true"></i></span>
                        </a>
                        <a class="action-button" href="https://play.google.com/store/apps/details?id=com.greydanedevelopment.hiitme_interval_timer" target="_blank">
                          <span class="action-button-text">Google Play</span>
                          <span class="action-button-icon"><i class="fab fa-google-play" aria-hidden="true"></i></span>
                        </a>
                        <a class="action-button" href="https://apps.apple.com/ca/app/hiitme-interval-timer/id1564361054" target="_blank">
                          <span class="action-button-text">App Store</span>
                          <span class="action-button-icon"><i class="fab fa-app-store" aria-hidden="true"></i></span>
                        </a>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
    )
  }
}
