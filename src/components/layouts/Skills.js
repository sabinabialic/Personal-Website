import React, { Component } from 'react';
import './Skills.css';

export default class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeCategory: 'languages'
        };
    }

    setActiveCategory = (category) => {
        this.setState({ activeCategory: category });
    }

    render() {
        const { activeCategory } = this.state;

        const skillsData = {
            languages: [
                { name: 'Java', icon: '☕', level: 95, featured: true },
                { name: 'JavaScript', icon: '🟨', level: 90 },
                { name: 'Python', icon: '🐍', level: 85 },
                { name: 'Go', icon: '🐹', level: 80 },
                { name: 'TypeScript', icon: '🔷', level: 85 },
                { name: 'Dart', icon: '🎯', level: 75 }
            ],
            cloud: [
                { name: 'Microsoft Azure', icon: '☁️', level: 90 },
                { name: 'Google Cloud', icon: '🌤️', level: 85 },
                { name: 'SAP BTP', icon: '🔧', level: 80 },
                { name: 'AWS', icon: '🚀', level: 75 },
                { name: 'Docker', icon: '🐳', level: 90 },
                { name: 'Kubernetes', icon: '⚙️', level: 85 }
            ],
            devops: [
                { name: 'Terraform', icon: '🏗️', level: 90 },
                { name: 'HashiCorp Vault', icon: '🔐', level: 95, featured: true },
                { name: 'Git', icon: '📚', level: 95 },
                { name: 'CI/CD', icon: '🔄', level: 85 },
                { name: 'Monitoring', icon: '📊', level: 80 },
                { name: 'Jenkins', icon: '🔨', level: 75 }
            ],
            frontend: [
                { name: 'React', icon: '⚛️', level: 85 },
                { name: 'HTML5', icon: '🌐', level: 90 },
                { name: 'CSS3', icon: '🎨', level: 90 },
                { name: 'Flutter', icon: '📱', level: 80 },
                { name: 'Bootstrap', icon: '🅱️', level: 85 },
                { name: 'Responsive Design', icon: '📐', level: 90 }
            ]
        };

        const categories = [
            { key: 'languages', name: 'Languages', icon: '💻' },
            { key: 'cloud', name: 'Cloud & Infrastructure', icon: '☁️' },
            { key: 'devops', name: 'DevOps Tools', icon: '🔧' },
            { key: 'frontend', name: 'Frontend', icon: '🎨' }
        ];

        return (
            <div className="skills-wrapper">
                <div className="container">
                    <div className="skills-header">
                        <h2 className="skills-title slide-in-blurred-left">Technical Skills</h2>
                        <p className="skills-subtitle slide-in-blurred-right">
                            Technologies and tools I use to build amazing software
                        </p>
                    </div>

                    <div className="skills-navigation slide-in-blurred-bottom">
                        {categories.map(category => (
                            <button
                                key={category.key}
                                className={`skill-nav-btn ${activeCategory === category.key ? 'active' : ''}`}
                                onClick={() => this.setActiveCategory(category.key)}
                            >
                                <span className="nav-icon">{category.icon}</span>
                                <span className="nav-text">{category.name}</span>
                            </button>
                        ))}
                    </div>

                    <div className="skills-content">
                        <div className="skills-grid fade-in" key={activeCategory}>
                            {skillsData[activeCategory].map((skill, index) => (
                                <div 
                                    key={skill.name} 
                                    className={`skill-card ${skill.featured ? 'featured' : ''}`}
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <div className="skill-icon">{skill.icon}</div>
                                    <h3 className="skill-name">{skill.name}</h3>
                                    <div className="skill-progress">
                                        <div className="progress-bar">
                                            <div 
                                                className="progress-fill"
                                                style={{ width: `${skill.level}%` }}
                                            ></div>
                                        </div>
                                        <span className="skill-percentage">{skill.level}%</span>
                                    </div>
                                    {skill.featured && (
                                        <div className="featured-badge">
                                            <span>⭐ Favorite</span>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="skills-footer">
                        <div className="learning-section">
                            <h3>🚀 Currently Learning</h3>
                            <div className="learning-tags">
                                <span className="learning-tag">Rust 🦀</span>
                                <span className="learning-tag">Machine Learning 🤖</span>
                                <span className="learning-tag">Web3 ⛓️</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
