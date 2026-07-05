import React, { useState } from 'react';
import { Tilt } from 'react-tilt';

const tiltOptions = {
    max: 5,
    speed: 400,
    glare: true,
    "max-glare": 0.2
};

const Certifications = () => {
    const [selectedCert, setSelectedCert] = useState(null);

    const certifications = [
        {
            id: 1,
            title: "Microsoft Azure AI Essentials",
            date: "December 22, 2025",
            issuer: "Microsoft & LinkedIn",
            description: "Demonstrated foundational knowledge of machine learning and AI concepts on Microsoft Azure.",
            image: "certificates/WhatsApp Image 2026-07-05 at 3.06.40 PM.jpeg"
        },
        {
            id: 2,
            title: "Innovating with Google Cloud AI",
            date: "December 23, 2025",
            issuer: "Simplilearn & Google Cloud",
            description: "Learned to leverage Google Cloud's AI and ML services to build intelligent applications.",
            image: "certificates/WhatsApp Image 2026-07-05 at 3.07.15 PM.jpeg"
        },
        {
            id: 3,
            title: "GenAI Powered Data Analytics Job Simulation",
            date: "December 27, 2025",
            issuer: "Forage & TATA",
            description: "Applied Generative AI techniques to analyze complex datasets and derive actionable insights.",
            image: "certificates/WhatsApp Image 2026-07-05 at 3.06.39 PM.jpeg"
        },
        {
            id: 4,
            title: "Data Analytics Job Simulation",
            date: "July 4th, 2026",
            issuer: "Deloitte & Forage",
            description: "Completed practical tasks in Data analysis and Forensic technology for Deloitte.",
            image: "certificates/deloitte data analysis job simulation_page-0001.jpg"
        },
        {
            id: 5,
            title: "AWS S3 Basics",
            date: "June 7, 2026",
            issuer: "Coursera",
            description: "Gained practical experience in deploying, configuring, and securing Amazon S3 buckets for scalable cloud storage.",
            image: "certificates/WhatsApp Image 2026-07-05 at 3.06.39 PM (1).jpeg"
        },
        {
            id: 6,
            title: "JavaScript Algorithms and Data Structures V7",
            date: "January 5, 2026",
            issuer: "freeCodeCamp",
            description: "Mastered core programming concepts, data structures, and algorithms using modern JavaScript.",
            image: "certificates/WhatsApp Image 2026-07-05 at 3.06.38 PM.jpeg"
        }
    ];

    const openModal = (cert) => {
        setSelectedCert(cert);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedCert(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <section id="certifications" className="certifications section section-full">
            <div className="container">
                <h2 className="section-title" data-aos="fade-up">My <span>Certifications</span></h2>
                <div className="cert-grid">
                    {certifications.map(cert => (
                        <Tilt options={tiltOptions} key={cert.id} className="cert-card glass-card" data-aos="zoom-in" data-aos-delay="100" style={{ display: 'flex', flexDirection: 'column' }}>
                            <div>
                                <h3>{cert.title}</h3>
                                <p className="cert-issuer" style={{color: 'var(--accent-color)', fontSize: '0.9rem', marginBottom: '0.5rem', fontWeight: 'bold'}}>{cert.issuer}</p>
                                <p style={{color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '1rem', lineHeight: '1.4'}}>{cert.description}</p>
                                {cert.date && <p className="cert-date" style={{fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '1rem'}}><i className="fas fa-calendar-alt"></i> {cert.date}</p>}
                            </div>
                            <div style={{ marginTop: 'auto' }}>
                                <button className="btn btn-primary btn-sm" onClick={() => openModal(cert)}>
                                    <i className="fas fa-certificate"></i> Show Certificate
                                </button>
                            </div>
                        </Tilt>
                    ))}
                </div>
            </div>

            {selectedCert && (
                <div className="cert-modal-overlay" onClick={closeModal}>
                    <div className="cert-modal glass-card" onClick={(e) => e.stopPropagation()}>
                        
                        <div className="cert-modal-header">
                            <div className="cert-modal-title-group">
                                <span className="cert-modal-issuer">{selectedCert.issuer}</span>
                                <h3>{selectedCert.title}</h3>
                                <p className="cert-modal-date">{selectedCert.date}</p>
                            </div>
                            <button className="cert-modal-close" onClick={closeModal}>
                                <i className="fas fa-times"></i>
                            </button>
                        </div>
                        
                        <div className="cert-modal-body">
                            <img src={selectedCert.image} alt={selectedCert.title} draggable="false" style={{ userSelect: 'none', WebkitUserDrag: 'none' }} />
                        </div>
                        
                        <div className="cert-modal-footer">
                            <button className="btn btn-secondary btn-sm" disabled style={{ opacity: 1, color: 'var(--primary-color)', borderColor: 'var(--primary-color)' }}>
                                <i className="fas fa-star"></i> Verified Certificate
                            </button>
                            <a href={selectedCert.image} download className="btn btn-primary btn-sm">
                                <i className="fas fa-download"></i> Download
                            </a>
                        </div>

                    </div>
                </div>
            )}
        </section>
    );
};

export default Certifications;
