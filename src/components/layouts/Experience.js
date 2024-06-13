import React, { Component } from 'react';
import './Experience.css';
import scoreLogo from '../../assets/images/penn.png';
import sapLogo from '../../assets/images/sap.png';
import esdcLogo from '../../assets/images/esdc.png';
import virtamoveLogo from '../../assets/images/virtamove.png';
import healthcanadaLogo from '../../assets/images/healthcanada.png';

export default class Experience extends Component {
    render() {
        return (
            <div id="experience" className="experience-wrapper">
              <div className="container">
                <div className="row">
                  <div className="col align-self-center">
                    <div className="experience-title">Experience</div>
                  </div>
                </div>
              </div>

              <div class="parent">
              <div class="div1">
                    <div className="card company-thescore">
                      <img src={scoreLogo} alt="thescore" className="company-image-thescore" />
                      <div className="overlay-thescore">
                        <div className="company-desc text-black">
                          <h4>theScore | PENN Entertainment</h4>
                          <h5>Release Engineer</h5>
                          <p>April 2024 - Present</p>
                        </div>
                      </div>
                    </div>
                  </div>

                <div class="div2">
                    <div className="card company-sap">
                      <img src={sapLogo} alt="SAP" className="company-image-sap" />
                      <div className="overlay-sap">
                        <div className="company-desc text-black">
                          <h4>SAP</h4>
                          <h5>DevOps Developer</h5>
                          <p>July 2022 - April 2024</p>
                        </div>
                      </div>
                    </div>
                  </div>

                <div class="div3">
                  <div className="card company-esdc">
                    <img src={esdcLogo} alt="ESDC" className="company-image-esdc" />
                    <div className="overlay-esdc">
                      <div className="company-desc text-black">
                        <h4>ESDC | EDSC</h4>
                        <h5>DevOps Developer</h5>
                        <p>May 2021 - July 2022</p>
                        <h5>Developer Co-op</h5>
                        <p>January 2020 - May 2021</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="div4">
                  <div className="card company-virtamove">
                    <img src={virtamoveLogo} alt="VirtaMove" className="company-image-virtamove" />
                    <div className="overlay-virtamove">
                      <div className="company-desc text-black">
                        <h4>VirtaMove</h4>
                        <h5>Software Developer Co-op</h5>
                        <p>May 2019 - August 2019</p>
                      </div>
                    </div>
                  </div>
                </div>

{/*                 <div class="div5">
                  <div className="card company-healthcanada">
                    <img src={healthcanadaLogo} alt="healthcanada" className="company-image-healthcanada" />
                    <div className="overlay-healthcanada">
                      <div className="company-desc text-black">
                        <h4>Health Canada | Santé Canada</h4>
                        <h5>Business Analyst Co-op</h5>
                        <p>January 2018 - May 2019</p>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
        )
    }
}
