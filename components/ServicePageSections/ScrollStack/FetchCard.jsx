'use client';
// import styles from './page.module.scss'


import { useScroll } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Lenis from 'lenis'
import { Projects } from './Projects';
import Card2 from './Card2';

export default function Home() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    useEffect(() => {
        const lenis = new Lenis()

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    })

    return (
        <Card2
            key={`p_${i}`}
            // i={i}
            {...Projects}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
        />
    );
}
