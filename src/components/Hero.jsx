import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Hero = () => {
    const el = useRef(null);
    const typed = useRef(null);

    useEffect(() => {
        const options = {
            strings: ['Data Engineer.', 'AI/ML Engineer.', 'Problem Solver.', 'Tech Enthusiast.'],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            loop: true
        };
        
        typed.current = new Typed(el.current, options);
        
        return () => {
            typed.current.destroy();
        }
    }, []);

    return (
        <section id="home" className="hero section-full">
            <div className="container hero-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
                <div className="hero-content" data-aos="fade-right" data-aos-duration="1000">
                    <div className="availability-tag">
                        <span className="pulse-dot"></span> Available for Opportunities
                    </div>
                    <h2 className="hero-greeting">Hello, I'm</h2>
                    <h1 className="hero-title" style={{lineHeight: '1.2', marginBottom: '1rem'}}>Jaihari <br/><span style={{color: 'var(--primary-color)'}}>Jayapaul</span></h1>
                    <h3 className="hero-subtitle" style={{color: 'var(--accent-color)', fontFamily: 'monospace', fontSize: '1.2rem', marginBottom: '1.5rem'}}>
                        <span ref={el}></span>
                    </h3>
                    
                    <p className="hero-description" style={{fontSize: '0.95rem', maxWidth: '90%'}}>
                        Aspiring <strong>AI & Machine Learning Engineer</strong> with strong foundations in Python, data analysis, and model development. Passionate about solving real-world problems using intelligent systems.
                    </p>

                    <div className="hero-stats">
                        <div className="stat-item">
                            <h4>5+</h4>
                            <p>CERTIFICATIONS</p>
                        </div>
                        <div className="stat-item">
                            <h4>8+</h4>
                            <p>PROJECTS</p>
                        </div>
                        <div className="stat-item">
                            <h4>AI</h4>
                            <p>SPECIALIZED</p>
                        </div>
                    </div>

                    <div className="hero-buttons">
                        <a href="#projects" className="btn btn-primary"><i className="fas fa-folder-open"></i> View Projects</a>
                        <a href="#contact" className="btn btn-secondary"><i className="fas fa-envelope"></i> Contact Me</a>
                        <a href="Resume.pdf" download className="btn btn-primary" style={{ background: 'var(--accent-color)', borderColor: 'var(--accent-color)', marginLeft: '1rem' }}><i className="fas fa-download"></i> Download Resume</a>
                    </div>
                    
                    <div className="hero-social-boxes">
                        <a href="https://www.linkedin.com/in/jaihari-jayapaul" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                        <a href="https://github.com/jaiharijayapaul" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i className="fab fa-github"></i></a>
                        <a href="mailto:jayapauljaihari@gmail.com" aria-label="Email"><i className="fas fa-envelope"></i></a>
                        <a href="tel:+919786828915" aria-label="Phone"><i className="fas fa-phone-alt"></i></a>
                    </div>
                </div>

                <div className="hero-image-side" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
                    <div className="circular-image-wrapper">
                        <img src="profile picture/jaihari.jpeg" alt="Jaihari Jayapaul" draggable="false" style={{ userSelect: 'none', WebkitUserDrag: 'none' }} />
                        <div className="floating-badge badge-1"><i className="fas fa-robot"></i> AI Engineer</div>
                        <div className="floating-badge badge-2"><i className="fab fa-python"></i> Python</div>
                        <div className="floating-badge badge-3"><i className="fas fa-project-diagram"></i> ML Models</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
