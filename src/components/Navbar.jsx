import React, { useEffect, useState } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Scroll spy
            const sections = document.querySelectorAll('section');
            let current = 'home';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
                    current = section.getAttribute('id');
                }
            });
            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        if (isMenuOpen) setIsMenuOpen(false);
    };

    return (
        <header className="navbar" style={{
            background: isScrolled ? 'rgba(15, 23, 42, 0.9)' : 'rgba(15, 23, 42, 0.8)',
            boxShadow: isScrolled ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none'
        }}>
            <div className="container nav-container">
                <a href="#" className="logo">Jaihari<span>.</span></a>
                <button className="nav-toggle" aria-label="toggle navigation" onClick={toggleMenu}>
                    <span className="hamburger" style={{
                        background: isMenuOpen ? 'transparent' : 'var(--text-primary)'
                    }}></span>
                </button>
                <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    <ul className="nav-list">
                        <li><a href="#home" onClick={closeMenu} className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}>Home</a></li>
                        <li><a href="#about" onClick={closeMenu} className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}>About</a></li>
                        <li><a href="#skills" onClick={closeMenu} className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}>Skills</a></li>
                        <li><a href="#projects" onClick={closeMenu} className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}>Projects</a></li>
                        <li><a href="#experience" onClick={closeMenu} className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}>Experience</a></li>
                        <li><a href="#education" onClick={closeMenu} className={`nav-link ${activeSection === 'education' ? 'active' : ''}`}>Education</a></li>
                        <li><a href="#certifications" onClick={closeMenu} className={`nav-link ${activeSection === 'certifications' ? 'active' : ''}`}>Certifications</a></li>
                        <li><a href="#contact" onClick={closeMenu} className="nav-link btn-contact">Contact Me</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
