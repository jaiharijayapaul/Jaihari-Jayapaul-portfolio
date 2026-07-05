import React from 'react';
import { Tilt } from 'react-tilt';

const tiltOptions = {
    max: 12,
    speed: 400,
    glare: true,
    "max-glare": 0.15
};

const Education = () => {
    const educationList = [
        {
            id: 1,
            year: "2027",
            degree: "Bachelor's in AI and ML",
            institution: "RVS College Of Arts & Science, Sulur",
            score: "72%",
            icon: "fas fa-user-graduate",
            color: "#6366f1"
        },
        {
            id: 2,
            year: "2022",
            degree: "HSC (12th Grade)",
            institution: "TMHNU Matric Higher Sec School, Theni",
            score: "81.3%",
            icon: "fas fa-school",
            color: "#ec4899"
        },
        {
            id: 3,
            year: "2020",
            degree: "SSLC (10th Grade)",
            institution: "TMHNU Matric Higher Sec School, Theni",
            score: "91.8%",
            icon: "fas fa-book-reader",
            color: "#14b8a6"
        }
    ];

    return (
        <section id="education" className="education section section-full">
            <div className="container">
                <h2 className="section-title" data-aos="fade-up">My <span>Education</span></h2>
                
                <div className="edu-grid" data-aos="fade-up" data-aos-delay="200">
                    {educationList.map((edu) => (
                        <Tilt options={tiltOptions} key={edu.id} className="edu-card-wrapper">
                            <div className="edu-card glass-card" style={{ '--edu-color': edu.color }}>
                                <div className="edu-year-watermark">{edu.year}</div>
                                
                                <div className="edu-card-content">
                                    <div className="edu-header">
                                        <div className="edu-icon">
                                            <i className={edu.icon}></i>
                                        </div>
                                        <div className="edu-score-badge">
                                            {edu.score}
                                        </div>
                                    </div>
                                    
                                    <h3 className="edu-degree">{edu.degree}</h3>
                                    <p className="edu-institution">
                                        <i className="fas fa-map-marker-alt"></i> {edu.institution}
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

export default Education;
