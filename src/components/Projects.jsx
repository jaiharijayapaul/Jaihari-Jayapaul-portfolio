import React, { useState } from 'react';
import { Tilt } from 'react-tilt';

const tiltOptions = {
    max: 10,
    speed: 400,
    glare: true,
    "max-glare": 0.15
};

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('AI / ML');

    const projectsList = [
        {
            id: 1,
            title: "AI Chatbot",
            description: "An advanced, conversational AI chatbot similar to GrokAI. Features deep context retention and highly accurate responses.",
            tags: ["React", "Node.js", "OpenAI API"],
            icon: "fas fa-robot",
            color: "#6366f1",
            category: "AI / ML",
            github: "https://github.com/jaiharijayapaul" 
        },
        {
            id: 2,
            title: "Diabetics Prediction using ML",
            description: "A machine learning predictive model designed for the healthcare industry to accurately forecast diabetic risks based on patient data.",
            tags: ["Python", "Scikit-Learn", "Pandas"],
            icon: "fas fa-heartbeat",
            color: "#ec4899",
            category: "AI / ML",
            github: "https://github.com/jaiharijayapaul/Diabetics_Prediction.git"
        },
        {
            id: 3,
            title: "Automated Cloud-Native Music Analytics Pipeline",
            description: "An end-to-end cloud-native data pipeline solution for streaming, transforming, and analyzing large-scale music datasets.",
            tags: ["AWS", "PySpark", "Snowflake"],
            icon: "fas fa-music",
            color: "#14b8a6",
            category: "Data Engineering",
            github: "https://github.com/jaiharijayapaul/-Automated-Cloud-Native-Music-Analytics-Pipeline.git"
        },
        {
            id: 4,
            title: "AI Smart Resume Analyser",
            description: "An intelligent AI solution built for parsing, summarizing, and ranking candidate resumes against job descriptions.",
            tags: ["NLP", "Python", "FastAPI"],
            icon: "fas fa-file-alt",
            color: "#f59e0b",
            category: "AI / ML",
            github: "https://github.com/jaiharijayapaul"
        },
        {
            id: 5,
            title: "Mail Spam Prediction Using ML",
            description: "A machine learning application built to classify and predict email spam with high accuracy, deployed on Streamlit.",
            tags: ["Python", "Streamlit", "Scikit-Learn"],
            icon: "fas fa-envelope-open-text",
            color: "#ef4444",
            category: "AI / ML",
            github: "https://github.com/jaiharijayapaul/Mail-Spam-Prediction-Using-ML.git",
            demo: "https://mail-spam-prediction.streamlit.app/"
        },
        {
            id: 6,
            title: "House Price Prediction System",
            description: "A predictive machine learning model that estimates housing prices based on various real estate factors and historical data.",
            tags: ["Python", "Streamlit", "Machine Learning"],
            icon: "fas fa-home",
            color: "#8b5cf6",
            category: "AI / ML",
            github: "https://github.com/jaiharijayapaul/House-Price-Prediction-System.git",
            demo: "https://house-price-prediction-system1403.streamlit.app/"
        },
        {
            id: 7,
            title: "Novatechit Website",
            description: "A modern, fully responsive business website for Novatechit with a sleek UI and smooth animations.",
            tags: ["React", "CSS", "Frontend"],
            icon: "fas fa-laptop-code",
            color: "#3b82f6",
            category: "Web Dev",
            github: "https://github.com/jaiharijayapaul/notechit-website.git",
            demo: "https://novatechit-website.netlify.app"
        },
        {
            id: 8,
            title: "Twistbreaker Online Game",
            description: "An interactive and highly addictive online arcade game built entirely with modern web technologies.",
            tags: ["JavaScript", "HTML5 Canvas", "Game Dev"],
            icon: "fas fa-gamepad",
            color: "#10b981",
            category: "Web Dev",
            github: "https://github.com/jaiharijayapaul/twistbreaker-onlinegame.git",
            demo: "https://twistbreaker-onlinegame.netlify.app"
        }
    ];

    const filters = ['AI / ML', 'Web Dev', 'Data Engineering'];

    const filteredProjects = projectsList.filter(p => p.category === activeFilter);

    return (
        <section id="projects" className="projects section section-full">
            <div className="container">
                <h2 className="section-title" data-aos="fade-up">My <span>Projects</span></h2>
                
                <div className="project-filters" data-aos="fade-up" data-aos-delay="100">
                    {filters.map(filter => (
                        <button 
                            key={filter}
                            className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                            onClick={() => setActiveFilter(filter)}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                <div className="project-grid" data-aos="fade-up" data-aos-delay="200">
                    {filteredProjects.map(project => (
                        <Tilt options={tiltOptions} key={project.id} className="project-card-wrapper">
                            <div className="project-card glass-card">
                                <div className="project-icon" style={{ color: project.color, background: `${project.color}15` }}>
                                    <i className={project.icon}></i>
                                </div>
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-desc">{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.map((tag, idx) => (
                                        <span key={idx} className="tech-tag">{tag}</span>
                                    ))}
                                </div>
                                <div className="project-links">
                                    {project.github && (
                                        <a href={project.github} target="_blank" rel="noreferrer" className="project-link">
                                            <i className="fab fa-github"></i> Code
                                        </a>
                                    )}
                                    {project.demo && (
                                        <a href={project.demo} target="_blank" rel="noreferrer" className="project-link" style={{ marginLeft: '1rem', color: 'var(--primary-color)' }}>
                                            <i className="fas fa-external-link-alt"></i> Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </Tilt>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
