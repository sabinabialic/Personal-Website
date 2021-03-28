import React, { Component } from 'react';
import './Projects.css';
import hiitme from '../../assets/images/FlutterIntervalTimerApp.png';

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
                        <div className="project-name">HIIT Interval Timer</div>
                        <div className="content">
                            <div className="content1"><hr /></div>
                            <div className="content2">
                                <p>
                                    <b>HiitMe</b> is an interval timer mobile app for iOS
                                    and Android, created using <b>Flutter</b> and <b>Dart</b>.
                                </p>
                                <a class="action-button" href="https://github.com/sabinabialic/interval_timer">
                                	<span class="action-button-text">Github</span>
                                	<span class="action-button-icon"><i class="fab fa-github" aria-hidden="true"></i></span>
                                </a>
                                <a class="action-button" href="https://www.youtube.com/watch?v=MMAfnOEFn6I">
                                	<span class="action-button-text">App Demo</span>
                                	<span class="action-button-icon"><i class="fab fa-youtube" aria-hidden="true"></i></span>
                                </a>
                            </div>
                        </div>
                      </div>

                  </div>
              </div>
          </div>
        </div>
      </div>
    )
  }
}
