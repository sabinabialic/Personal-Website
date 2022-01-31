import React, { Component } from 'react';
import './Header.css';
import resume from "../../assets/files/Updated February 2022.pdf";

const Anchors = () => {
    const anchorsArr = ["Projects", "Experience", "About"];
    return (anchorsArr.map(item => { return (<a key={item} href={`#${item}`}>{item}</a>) }));
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
                                <h1>Sabina Bialic</h1>
                            </span>
                        </div>
                    </div>
                    <div className="col flex slide-in-blurred-right">
                        <div className="full-options">
                            <a href={resume} target="_blank">
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
