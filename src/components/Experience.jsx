import React from 'react';
import { Tilt } from 'react-tilt';

const tiltOptions = {
    max: 8,
    speed: 400,
    glare: true,
    "max-glare": 0.3
};

const Experience = () => {
    const experiences = [
        {
            id: 1,
            role: "Artificial Intelligence Intern",
            company: "MAIYYAM",
            date: "2025",
            icon: "fas fa-brain",
            color: "#6366f1"
        },
        {
            id: 2,
            role: "UI/UX Design Intern",
            company: "MAIYYAM",
            date: "Internship",
            icon: "fas fa-pen-nib",
            color: "#ec4899"
        },
        {
            id: 3,
            role: "Video Editing & Motion Graphics",
            company: "MAIYYAM",
            date: "Internship",
            icon: "fas fa-video",
            color: "#14b8a6"
        },
        {
            id: 4,
            role: "Training & Placement Intern",
            company: "RVS College of Arts & Science, Coimbatore",
            date: "Internship",
            icon: "fas fa-user-graduate",
            color: "#f59e0b"
        }
    ];

    return (
        <section id="experience" className="experience section section-full">
            <div className="container">
                <h2 className="section-title" data-aos="fade-up">My <span>Experience</span></h2>
                
                <div className="exp-grid" data-aos="fade-up" data-aos-delay="200">
                    {experiences.map((exp, index) => (
                        <Tilt options={tiltOptions} key={exp.id} className="exp-card-wrapper">
                            <div className="exp-card glass-card" style={{ '--card-color': exp.color }}>
                                <div className="exp-card-inner">
                                    <div className="exp-icon-wrapper">
                                        <i className={exp.icon}></i>
                                    </div>
                                    <div className="exp-details">
                                        <div className="exp-date">{exp.date}</div>
                                        <h4 className="exp-role">{exp.role}</h4>
                                        <p className="exp-company"><i className="far fa-building"></i> {exp.company}</p>
                                    </div>
                                </div>
                                <div className="exp-glow"></div>
                            </div>
                        </Tilt>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
