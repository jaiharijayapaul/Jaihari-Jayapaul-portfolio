/* --- Preloader --- */
window.addEventListener('load', () => {
    setTimeout(() => {
        const preloader = document.getElementById('preloader');
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }, 1500); // Show splash screen for 1.5s
});

document.addEventListener('DOMContentLoaded', () => {
    /* --- Mobile Navigation Toggle --- */
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Simple hamburger animation toggle
        if (navMenu.classList.contains('active')) {
            hamburger.style.background = 'transparent';
            hamburger.style.setProperty('--pseudo-top', '0');
            hamburger.style.setProperty('--pseudo-bottom', '0');
        } else {
            hamburger.style.background = 'var(--text-primary)';
        }
    });

    /* --- Close Mobile Nav on Link Click --- */
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                hamburger.style.background = 'var(--text-primary)';
            }
        });
    });

    /* --- Active Link Highlighting & Progress Bar on Scroll --- */
    const sections = document.querySelectorAll('section');
    const progressBar = document.getElementById("myBar");
    
    window.addEventListener('scroll', () => {
        // Progress bar logic
        let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + "%";

        // Scroll spy logic
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    /* --- Custom Cursor Logic --- */
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');

    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        // Add a slight delay to the outline for a fluid effect
        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    });

    // Hover effect on links and buttons
    const hoverElements = document.querySelectorAll('a, button, .nav-toggle, .skill-tags span');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorOutline.classList.add('hovered');
            cursorDot.style.transform = 'translate(-50%, -50%) scale(1.5)';
        });
        el.addEventListener('mouseleave', () => {
            cursorOutline.classList.remove('hovered');
            cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
        });
    });

    /* --- Navbar Glassmorphism on Scroll --- */
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(15, 23, 42, 0.9)';
            navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(15, 23, 42, 0.8)';
            navbar.style.boxShadow = 'none';
        }
    });

    /* --- Plugins Initialization --- */
    // AOS (Animate on Scroll)
    AOS.init({
        once: true,
        offset: 100,
        duration: 800,
        easing: 'ease-out-cubic',
    });

    // Typed.js
    if (document.getElementById('typed')) {
        new Typed('#typed', {
            strings: ['Data Engineer.', 'AI/ML Engineer.', 'Problem Solver.', 'Tech Enthusiast.'],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            loop: true
        });
    }

    // Particles.js config
    if(window.particlesJS) {
        particlesJS("particles-js", {
            "particles": {
                "number": { "value": 60, "density": { "enable": true, "value_area": 800 } },
                "color": { "value": ["#6366f1", "#ec4899", "#06b6d4"] },
                "shape": { "type": "circle" },
                "opacity": { "value": 0.5, "random": false },
                "size": { "value": 3, "random": true },
                "line_linked": { "enable": true, "distance": 150, "color": "#6366f1", "opacity": 0.2, "width": 1 },
                "move": { "enable": true, "speed": 2, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": { "enable": true, "mode": "grab" },
                    "onclick": { "enable": true, "mode": "push" },
                    "resize": true
                },
                "modes": {
                    "grab": { "distance": 140, "line_linked": { "opacity": 1 } },
                    "push": { "particles_nb": 4 }
                }
            },
            "retina_detect": true
        });
    }



    /* --- Modal Logic --- */
    const modal = document.getElementById("certModal");
    const modalImg = document.getElementById("certImage");
    const closeBtn = document.querySelector(".modal-close");
    const showCertBtns = document.querySelectorAll('.show-cert-btn');

    showCertBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const certSrc = e.target.getAttribute('data-cert');
            modal.style.display = "block";
            modalImg.src = certSrc;
            document.body.style.overflow = "hidden"; // Prevent background scrolling
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    });

    // Close modal when clicking outside the image
    window.addEventListener('click', (e) => {
        if (e.target == modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });
});
