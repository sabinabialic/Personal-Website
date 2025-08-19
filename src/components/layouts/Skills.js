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
                { name: 'Java', icon: '☕' },
                { name: 'Spring Boot', icon: '🌱' },
                { name: 'Go', icon: '🐹' },
                { name: 'Python', icon: '🐍' },
                { name: 'Flask', icon: '⚗️' },
                { name: 'JavaScript', icon: '🟨' },
                { name: 'React', icon: '⚛️' },
                { name: 'Dart', icon: '🎯' },
                { name: 'Flutter', icon: '🌀' },
            ],
            cloud: [
                { name: 'AWS', icon: '🚀' },
                { name: 'Microsoft Azure', icon: '☁️' },
                { name: 'SAP BTP', icon: '💙' },
                { name: 'Kubernetes', icon: '⚙️' },
                { name: 'Docker', icon: '🐳' },
                { name: 'Nomad', icon: '♻️' },
                { name: 'Terraform', icon: '🏗️' }
            ],
            devops: [
                { name: 'Terraform', icon: '🏗️' },
                { name: 'ArgoCD', icon: '🐙' },
                { name: 'Jenkins', icon: '🔨' },
                { name: 'Github Actions', icon: '🖤' },
                { name: 'Vault', icon: '🔐' },
                { name: 'CircleCI', icon: '🔄' }
            ],
            ai: [
                { name: 'Generative AI', icon: '✨' },
                { name: 'RAG Architecture', icon: '📚' },
                { name: 'Large Language Models (LLMs)', icon: '🧠' },
                { name: 'Vector Databases', icon: '🗂️' },
                { name: 'LangChain', icon: '🔗' },
                { name: 'watsonx.ai', icon: '🤖' }
            ],
            monitoring: [
                { name: 'DataDog', icon: '🐶' },
                { name: 'Dynatrace', icon: '📈' },
                { name: 'Kibana', icon: '📊' },
                { name: 'Elasticsearch', icon: '🔍' }
            ]
        };

        const categories = [
            { key: 'languages', name: 'Languages & Frameworks', icon: '💻' },
            { key: 'cloud', name: 'Cloud & Containerization', icon: '☁️' },
            { key: 'devops', name: 'CI/CD & DevOps', icon: '⚙️' },
            { key: 'ai', name: 'AI & Machine Learning', icon: '🧠' },
            { key: 'monitoring', name: 'Observability & Monitoring', icon: '📊' }
        ];

        return (
            <div className="skills-wrapper">
                <div className="container">
                    <div className="skills-header">
                        <h2 className="skills-title slide-in-blurred-left">Technical Skills</h2>
                        <p className="skills-subtitle slide-in-blurred-right">
                            Tools and technologies I use to build amazing software!
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
                                    className="skill-card"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <div className="skill-icon">{skill.icon}</div>
                                    <h3 className="skill-name">{skill.name}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
