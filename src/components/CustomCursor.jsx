import React, { useEffect } from 'react';

const CustomCursor = () => {
    useEffect(() => {
        const cursorDot = document.querySelector('.cursor-dot');
        const cursorOutline = document.querySelector('.cursor-outline');

        const moveCursor = (e) => {
            const posX = e.clientX;
            const posY = e.clientY;

            if (cursorDot) {
                cursorDot.style.left = `${posX}px`;
                cursorDot.style.top = `${posY}px`;
            }
            if (cursorOutline) {
                cursorOutline.animate({
                    left: `${posX}px`,
                    top: `${posY}px`
                }, { duration: 500, fill: "forwards" });
            }
        };

        const handleMouseOver = (e) => {
            const target = e.target;
            if (target.tagName.toLowerCase() === 'a' || 
                target.tagName.toLowerCase() === 'button' ||
                target.closest('.skill-item')) {
                if (cursorOutline) cursorOutline.classList.add('cursor-hover');
            } else {
                if (cursorOutline) cursorOutline.classList.remove('cursor-hover');
            }
        };

        window.addEventListener('mousemove', moveCursor);
        document.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            document.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <>
            <div className="cursor-dot"></div>
            <div className="cursor-outline"></div>
        </>
    );
};

export default CustomCursor;
