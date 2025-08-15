import React, { Component } from 'react';
import './Header.css';
import resume from "../../assets/files/SabinaBialicResume.pdf";
import { Link } from 'react-scroll';

const Anchors = () => {
    const anchorsArr = ["Projects", "Experience", "About"];
    return (anchorsArr.map(item => { 
        return (
            <Link 
                key={item} 
                to={item} 
                smooth={true} 
                duration={500} 
                spy={true} 
                exact='true' 
                offset={-70}
            >
                {item}
            </Link>
        ) 
    }));
}

export default class Header extends Component {
  render() {
    return (
        <div className="nav-bar">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="logo slide-in-blurred-top">
                            <span className="full-name">
                                <h1>SABINA BIALIC</h1>
                            </span>
                        </div>
                    </div>
                    <div className="col flex slide-in-blurred-right">
                        <div className="full-options">
                            <a href={resume} rel="noreferrer" target="_blank">
                                <div className="resume-link">
                                    View Resume
                                </div>
                            </a>
                            <Anchors />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}
