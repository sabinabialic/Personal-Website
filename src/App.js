import React, { Component } from 'react';
import './App.css';
import Header from './components/layouts/Header';
import Main from './components/layouts/Main';
import Experience from './components/layouts/Experience';
import Skills from './components/layouts/Skills';
import Projects from './components/layouts/Projects';
import Footer from './components/layouts/Footer';
import { Element } from 'react-scroll';

const Sections = ({ darkMode }) => {
  const anchors = ['About', 'Experience', 'Skills', 'Projects'];
  const sectionsArray = [<Main />, <Experience darkMode={darkMode} />, <Skills />, <Projects />];
  return (anchors.map((item, index) => { return (<Element name={item} key={index}><div>{sectionsArray[index]}</div></Element>) }));
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      darkMode: false
    };
  }

  componentDidMount() {
    // Check if user has a saved preference
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode) {
      this.setState({ darkMode: JSON.parse(savedDarkMode) });
    }
  }

  toggleDarkMode = () => {
    const newDarkMode = !this.state.darkMode;
    this.setState({ darkMode: newDarkMode });
    // Save preference to localStorage
    localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
  }

  render() {
    const { darkMode } = this.state;
    return (
      <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
        <Header darkMode={darkMode} toggleDarkMode={this.toggleDarkMode} />
        <Sections darkMode={darkMode} />
        <Footer />
      </div>
    );
  }
}

export default App;
