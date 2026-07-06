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
    const [techCategory, setTechCategory] = useState('Programming Languages');

    const skillCategories = {
        'Technical Skills': {
            icon: 'fas fa-laptop-code',
            image: '/skills/tech.png',
            categories: {
                'Programming Languages': [
                    { name: 'Python', percentage: 90, icon: 'fab fa-python' },
                    { name: 'Java', percentage: 80, icon: 'fab fa-java' },
                ].sort((a, b) => b.percentage - a.percentage),
                'Databases': [
                    { name: 'SQL', percentage: 85, icon: 'fas fa-database' },
                ].sort((a, b) => b.percentage - a.percentage),
                'Web Technologies': [
                    { name: 'HTML & CSS', percentage: 95, icon: 'fab fa-html5' },
                    { name: 'React', percentage: 75, icon: 'fab fa-react' },
                ].sort((a, b) => b.percentage - a.percentage),
                'Data Engineering': [
                    { name: 'ETL', percentage: 85, icon: 'fas fa-server' },
                    { name: 'Data Modeling', percentage: 80, icon: 'fas fa-project-diagram' },
                ].sort((a, b) => b.percentage - a.percentage)
            }
        },
        'Tools & IDEs': {
            icon: 'fas fa-tools',
            image: '/skills/tools.png',
            skills: [
                { name: 'VS Code', percentage: 95, icon: 'fas fa-code' },
                { name: 'GitHub', percentage: 90, icon: 'fab fa-github' },
                { name: 'Excel / MS Word', percentage: 90, icon: 'fas fa-file-excel' },
                { name: 'Power BI', percentage: 85, icon: 'fas fa-chart-bar' },
                { name: 'Antigravity', percentage: 80, icon: 'fas fa-rocket' },
            ].sort((a, b) => b.percentage - a.percentage)
        },
        'Soft Skills': {
            icon: 'fas fa-users',
            image: '/skills/soft.png',
            skills: [
                { name: 'Teamwork', percentage: 100, icon: 'fas fa-users-cog' },
                { name: 'Adaptability', percentage: 100, icon: 'fas fa-sync' },
                { name: 'Leadership', percentage: 100, icon: 'fas fa-user-tie' },
                { name: 'Presentation', percentage: 100, icon: 'fas fa-chalkboard-teacher' },
            ]
        }
    };

    const activeSkills = activeTab === 'Technical Skills' 
        ? skillCategories['Technical Skills'].categories[techCategory] 
        : skillCategories[activeTab].skills;

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
                        {activeTab === 'Technical Skills' && (
                            <div className="tech-category-dropdown" style={{ marginBottom: '1.5rem' }} data-aos="fade-right">
                                <select 
                                    value={techCategory} 
                                    onChange={(e) => setTechCategory(e.target.value)}
                                    style={{
                                        width: '100%',
                                        padding: '0.8rem 1rem',
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        border: '1px solid var(--glass-border)',
                                        borderRadius: '8px',
                                        color: 'var(--text-primary)',
                                        fontSize: '1rem',
                                        outline: 'none',
                                        cursor: 'pointer',
                                        appearance: 'none',
                                        backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%2394a3b8%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'right 1rem top 50%',
                                        backgroundSize: '0.65rem auto'
                                    }}
                                >
                                    {Object.keys(skillCategories['Technical Skills'].categories).map(cat => (
                                        <option key={cat} value={cat} style={{ background: '#0f172a' }}>{cat}</option>
                                    ))}
                                </select>
                            </div>
                        )}
                        {activeSkills.map((skill, index) => (
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
                            <div className="skills-circle-display" style={{ overflow: 'hidden' }}>
                                <img src={skillCategories[activeTab].image} alt={activeTab} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} draggable="false" />
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
