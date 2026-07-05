import React, { useState } from 'react';
import { Tilt } from 'react-tilt';

const tiltOptions = {
    max: 5,
    speed: 400,
    glare: true,
    "max-glare": 0.2
};

const Skills = () => {
    const [activeTab, setActiveTab] = useState('Technical Skills');

    const skillCategories = {
        'Technical Skills': {
            icon: 'fas fa-laptop-code',
            skills: [
                { name: 'Python', percentage: 90, icon: 'fab fa-python' },
                { name: 'SQL', percentage: 85, icon: 'fas fa-database' },
                { name: 'Java', percentage: 80, icon: 'fab fa-java' },
                { name: 'React', percentage: 75, icon: 'fab fa-react' },
                { name: 'HTML & CSS', percentage: 95, icon: 'fab fa-html5' },
                { name: 'Data Modeling', percentage: 80, icon: 'fas fa-project-diagram' },
                { name: 'ETL', percentage: 85, icon: 'fas fa-server' },
            ]
        },
        'Tools & IDEs': {
            icon: 'fas fa-tools',
            skills: [
                { name: 'VS Code', percentage: 95, icon: 'fas fa-code' },
                { name: 'GitHub', percentage: 90, icon: 'fab fa-github' },
                { name: 'Power BI', percentage: 85, icon: 'fas fa-chart-bar' },
                { name: 'Antigravity', percentage: 80, icon: 'fas fa-rocket' },
                { name: 'Excel / MS Word', percentage: 90, icon: 'fas fa-file-excel' },
            ]
        },
        'Soft Skills': {
            icon: 'fas fa-users',
            skills: [
                { name: 'Teamwork', percentage: 95, icon: 'fas fa-users-cog' },
                { name: 'Adaptability', percentage: 90, icon: 'fas fa-sync' },
                { name: 'Leadership', percentage: 85, icon: 'fas fa-user-tie' },
                { name: 'Presentation', percentage: 85, icon: 'fas fa-chalkboard-teacher' },
            ]
        }
    };

    const allTechnologies = ['TensorFlow', 'Data Science', 'Gen AI', 'Model Development', 'Python', 'Machine Learning', 'Artificial Intelligence', 'SQL', 'React', 'Power BI'];

    return (
        <section id="skills" className="skills section section-full">
            <div className="container" style={{maxWidth: '1000px'}}>
                <div style={{textAlign: 'center', marginBottom: '3rem'}} data-aos="fade-up">
                    <p style={{color: 'var(--accent-color)', fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.5rem'}}>Expertise</p>
                    <h2 className="section-title" style={{marginBottom: '1rem'}}>My <span>Skills</span></h2>
                    <p style={{color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto'}}>
                        A comprehensive toolkit built through hands-on projects, certifications, and continuous learning.
                    </p>
                </div>

                <div className="skills-tabs" data-aos="fade-up" data-aos-delay="100">
                    {Object.keys(skillCategories).map(cat => (
                        <button 
                            key={cat} 
                            className={`skill-tab-btn ${activeTab === cat ? 'active' : ''}`}
                            onClick={() => setActiveTab(cat)}
                        >
                            <i className={skillCategories[cat].icon}></i> {cat}
                        </button>
                    ))}
                </div>

                <div className="skills-content-area">
                    <div className="skills-list-col">
                        {skillCategories[activeTab].skills.map((skill, index) => (
                            <div className="skill-item-new" key={skill.name} data-aos="fade-right" data-aos-delay={100 + (index * 50)}>
                                <div className="skill-icon-box">
                                    <i className={skill.icon}></i>
                                </div>
                                <div className="skill-bar-wrapper">
                                    <div className="skill-info-new">
                                        <span>{skill.name}</span>
                                        <span>{skill.percentage}%</span>
                                    </div>
                                    <div className="progress-bg">
                                        <div className="progress-fill" style={{ width: `${skill.percentage}%` }}></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="skills-visual-col" data-aos="fade-left" data-aos-delay="200">
                        <Tilt options={tiltOptions}>
                            <div className="skills-circle-display">
                                <i className={skillCategories[activeTab].icon} style={{fontSize: '3rem', color: 'var(--accent-color)', marginBottom: '1rem'}}></i>
                                <h3 style={{fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '0.5rem'}}>{activeTab}</h3>
                                <p style={{color: 'var(--text-secondary)', fontSize: '0.9rem'}}>{skillCategories[activeTab].skills.length} Skills</p>
                            </div>
                        </Tilt>
                    </div>
                </div>

                {activeTab === 'Technical Skills' && (
                    <div className="technologies-marquee" data-aos="fade-up" data-aos-delay="300">
                        <p className="marquee-title">TECHNOLOGIES & TOOLS</p>
                        <div className="marquee-container">
                            <div className="marquee-content">
                                {allTechnologies.map((tech, i) => (
                                    <span key={i} className="marquee-item">{tech}</span>
                                ))}
                                {/* Duplicate for seamless scrolling */}
                                {allTechnologies.map((tech, i) => (
                                    <span key={`dup-${i}`} className="marquee-item">{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Skills;
