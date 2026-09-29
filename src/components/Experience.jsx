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
            role: "AI & Machine Learning Intern",
            company: "InternPe",
            date: "2026",
            description: "Developed predictive machine learning models and applied Python data science workflows to build practical intelligent systems.",
            icon: "fas fa-brain",
            color: "#8b5cf6"
        },
        {
            id: 2,
            role: "Web Development Intern",
            company: "Zidio Development",
            date: "2026",
            description: "Collaborated in an agile team to engineer IntellMeet, an AI-powered enterprise meeting and collaboration platform.",
            icon: "fas fa-laptop-code",
            color: "#06b6d4"
        },
        {
            id: 3,
            role: "Artificial Intelligence Intern",
            company: "MAIYYAM",
            date: "2025",
            description: "Gained core hands-on experience in machine learning algorithms, model training, and AI application workflows.",
            icon: "fas fa-robot",
            color: "#6366f1"
        },
        {
            id: 4,
            role: "UI/UX Design Intern",
            company: "MAIYYAM",
            date: "Internship",
            description: "Crafted intuitive user experiences, interactive wireframes, and modern component design systems for web apps.",
            icon: "fas fa-pen-nib",
            color: "#ec4899"
        },
        {
            id: 5,
            role: "Video Editing & Motion Graphics",
            company: "MAIYYAM",
            date: "Internship",
            description: "Created high-impact motion graphics, multimedia assets, and visual storytelling content for digital platforms.",
            icon: "fas fa-video",
            color: "#14b8a6"
        },
        {
            id: 6,
            role: "Training & Placement Intern",
            company: "RVS College of Arts & Science, Coimbatore",
            date: "Internship",
            description: "Facilitated campus placement drives, student engagement, and professional training operations.",
            icon: "fas fa-user-graduate",
            color: "#f59e0b"
        }
    ];

    return (
        <section id="experience" className="experience section section-full">
            <div className="container">
                <h2 className="section-title" data-aos="fade-up">My <span>Experience</span></h2>
                
                <div className="exp-grid" data-aos="fade-up" data-aos-delay="200">
                    {experiences.map((exp) => (
                        <Tilt options={tiltOptions} key={exp.id} className="exp-card-wrapper">
                            <div className="exp-card glass-card" style={{ '--card-color': exp.color }}>
                                <div className="exp-card-inner">
                                    <div className="exp-icon-wrapper">
                                        <i className={exp.icon}></i>
                                    </div>
                                    <div className="exp-details" style={{ width: '100%', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                                        <div className="exp-date">{exp.date}</div>
                                        <h4 className="exp-role">{exp.role}</h4>
                                        <p className="exp-company"><i className="far fa-building"></i> {exp.company}</p>
                                        {exp.description && (
                                            <p className="exp-description" style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.6rem', lineHeight: '1.4' }}>
                                                {exp.description}
                                            </p>
                                        )}
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
