import React, { useRef } from 'react';

import computer from '../../../assets/computer.svg';

const Hero = () => {
    const svg = useRef();

    const animate = () => {
        const img = svg.current.contentDocument;
        const cup = img.getElementById('cup');

        const rect0 = img.getElementById('rect0');
        const rect1 = img.getElementById('rect1');
        const rect2 = img.getElementById('rect2');

        rect0.animate(
            [
                { transform: 'translateY(0px)' },
                { transform: 'translateY(-10px)' },
                { transform: 'translateY(10px)' },
                { transform: 'translateY(0px)' },
            ],
            {
                duration: 5000,
                iterations: Infinity,
                easing: 'linear',
            }
        );

        rect1.animate(
            [
                { transform: 'translateY(0px)' },
                { transform: 'translateY(10px)' },
                { transform: 'translateY(-10px)' },
                { transform: 'translateY(0px)' },
            ],
            {
                duration: 5000,
                iterations: Infinity,
                easing: 'linear',
            }
        );

        rect2.animate(
            [
                { transform: 'translateY(0px)' },
                { transform: 'translateY(10px)' },
                { transform: 'translateY(-10px)' },
                { transform: 'translateY(0px)' },
            ],
            {
                duration: 5000,
                iterations: Infinity,
                easing: 'linear',
            }
        );

        let paths = img.querySelectorAll('path');
        [...paths].forEach((item, index) => {
            item.style.strokeDasharray = item.getTotalLength();
            item.style.fillOpacity = 0;
            item.style.strokeWidth = '0.5px';
            item.animate(
                [
                    {
                        strokeDashoffset: item.getTotalLength(),
                        stroke: '#333',
                        fillOpacity: 0,
                    },
                    { strokeDashoffset: 0, stroke: '#333', fillOpacity: 0 },
                    { stroke: 'white', fillOpacity: 0.5 },
                    { stroke: 'white', fillOpacity: 1 },
                ],
                {
                    duration: 3000,
                    fill: 'forwards',
                    easing: 'linear',
                }
            );
        });
        cup.animate(
            [
                { transform: 'translateY(0px)' },
                { transform: 'translateY(-20px)' },
                { transform: 'translateY(0px)' },
            ],
            {
                duration: 5000,
                iterations: Infinity,
                easing: 'linear',
            }
        );
    };

    return <object data={computer} ref={svg} onLoad={animate} aria-label="Hero Image"></object>;
};

export default Hero;
