import React, { useEffect, useState } from 'react';

const ScrollProgress = () => {
    const [scrollWidth, setScrollWidth] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            setScrollWidth(scrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="scroll-progress-container">
            <div className="scroll-progress-bar" style={{ width: `${scrollWidth}%` }}></div>
        </div>
    );
};

export default ScrollProgress;
