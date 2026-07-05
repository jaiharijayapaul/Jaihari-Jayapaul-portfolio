import React, { useEffect, useState } from 'react';

const Preloader = () => {
    const [loading, setLoading] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        // Wait for 1.5s to show the splash screen, then fade it out
        const timer = setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => setLoading(false), 500); // 500ms is the CSS transition duration
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    if (!loading) return null;

    return (
        <div className={`preloader ${fadeOut ? 'fade-out' : ''}`}>
            <div className="preloader-content">
                <h1 className="preloader-text">Jaihari<span>.</span></h1>
                <div className="preloader-bar">
                    <div className="preloader-fill"></div>
                </div>
            </div>
        </div>
    );
};

export default Preloader;
