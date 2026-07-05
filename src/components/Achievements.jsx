import React from 'react';
import { Tilt } from 'react-tilt';

const tiltOptions = {
    max: 12,
    speed: 400,
    glare: true,
    "max-glare": 0.15
};

const Achievements = () => {
    const achievementsList = [
        {
            id: 1,
            title: "SignSpeak AI Project",
            role: "Participant - YII '2026",
            institution: "RVS CAS",
            year: "2026",
            icon: "fas fa-robot",
            color: "#6366f1"
        },
        {
            id: 2,
            title: "Java Premier League",
            role: "Participant",
            institution: "RVS CAS",
            year: "2026",
            icon: "fab fa-java",
            color: "#f59e0b"
        },
        {
            id: 3,
            title: "Arduino Radar",
            role: "Participant - Science Exhibition",
            institution: "RVS CAS",
            year: "2025",
            icon: "fas fa-microchip",
            color: "#ec4899"
        }
    ];

    return (
        <section id="achievements" className="achievements section section-full">
            <div className="container">
                <h2 className="section-title" data-aos="fade-up">Extra <span>Curriculars</span> & Achievements</h2>
                
                <div className="achievements-grid" data-aos="fade-up" data-aos-delay="200">
                    {achievementsList.map((item) => (
                        <Tilt options={tiltOptions} key={item.id} className="achievement-card-wrapper">
                            <div className="achievement-card glass-card" style={{ '--ach-color': item.color }}>
                                <div className="achievement-year-watermark">{item.year}</div>
                                
                                <div className="achievement-card-content">
                                    <div className="achievement-header">
                                        <div className="achievement-icon">
                                            <i className={item.icon}></i>
                                        </div>
                                        <div className="achievement-year-badge">
                                            {item.year}
                                        </div>
                                    </div>
                                    
                                    <h3 className="achievement-title">{item.title}</h3>
                                    <p className="achievement-role">
                                        <i className="fas fa-award"></i> {item.role}
                                    </p>
                                    <p className="achievement-institution">
                                        <i className="fas fa-university"></i> {item.institution}
                                    </p>
                                </div>
                            </div>
                        </Tilt>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
