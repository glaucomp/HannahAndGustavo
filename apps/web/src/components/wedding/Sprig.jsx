import React from 'react';

const Sprig = ({ className = '', flip = false }) => (
    <svg
        viewBox="0 0 120 40"
        fill="none"
        aria-hidden="true"
        className={className}
        style={flip ? { transform: 'scaleX(-1)' } : undefined}
    >
        <path d="M4 20 C40 20 80 20 116 20" stroke="currentColor" strokeWidth="0.8" />
        <g stroke="currentColor" strokeWidth="0.8">
            <path d="M30 20 C34 12 42 10 48 12 C44 19 36 21 30 20Z" />
            <path d="M30 20 C34 28 42 30 48 28 C44 21 36 19 30 20Z" />
            <path d="M56 20 C60 13 68 11 74 13 C70 19 62 21 56 20Z" />
            <path d="M56 20 C60 27 68 29 74 27 C70 21 62 19 56 20Z" />
            <path d="M82 20 C86 14 93 12 98 14 C94 19 88 21 82 20Z" />
        </g>
    </svg>
);

export default Sprig;
