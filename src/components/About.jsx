import React from 'react';
import { Tilt } from 'react-tilt';

const tiltOptions = {
    max: 5,
    speed: 400,
    glare: true,
    "max-glare": 0.2
};

const About = () => {
    return (
        <section id="about" className="about section section-full">
            <div className="container">
                <h2 className="section-title" data-aos="fade-up">About <span>Me</span></h2>
                <Tilt options={tiltOptions}>
                    <div className="about-content glass-card" data-aos="zoom-in" data-aos-duration="1000">
                        <p style={{marginBottom: '1rem', textAlign: 'justify'}}>
                            I am an aspiring <strong>Data Engineer and AI/ML Engineer</strong> with a strong technical foundation in Python, SQL, and predictive modeling. I have hands-on experience in building end-to-end data pipelines, managing relational databases, and training machine learning models to deliver scalable, intelligent solutions.
                        </p>
                        <p style={{marginBottom: '1rem', textAlign: 'justify'}}>
                            Beyond academics, I have practically applied my skills through multiple internships at MAIYYAM, where I gained valuable industry experience spanning Artificial Intelligence, UI/UX Design, and Motion Graphics. This multidisciplinary exposure allows me to approach technical problems with a creative, user-centric mindset.
                        </p>
                        <p style={{marginBottom: '1.5rem', textAlign: 'justify'}}>
                            I am deeply passionate about building impactful technology. My project portfolio reflects this drive, featuring creations like an AI-powered Chatbot (similar to GrokAI), a Smart Resume Analyser, and highly-scalable Cloud-Native Data Analytics Pipelines. 
                        </p>
                        <div className="about-highlights" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '1.5rem', borderTop: '1px solid var(--glass-border)', paddingTop: '1.5rem' }}>
                            <div className="highlight-item">
                                <h4 style={{color: 'var(--primary-color)', fontSize: '1.2rem'}}><i className="fas fa-brain"></i> AI / ML</h4>
                                <p style={{fontSize: '0.9rem', color: 'var(--text-secondary)'}}>Predictive Modeling & NLP</p>
                            </div>
                            <div className="highlight-item">
                                <h4 style={{color: 'var(--accent-color)', fontSize: '1.2rem'}}><i className="fas fa-database"></i> Data Engineering</h4>
                                <p style={{fontSize: '0.9rem', color: 'var(--text-secondary)'}}>Pipelines & Cloud Architecture</p>
                            </div>
                            <div className="highlight-item">
                                <h4 style={{color: '#10b981', fontSize: '1.2rem'}}><i className="fas fa-code"></i> Development</h4>
                                <p style={{fontSize: '0.9rem', color: 'var(--text-secondary)'}}>React, Python, Java</p>
                            </div>
                        </div>
                    </div>
                </Tilt>
            </div>
        </section>
    );
};

export default About;
