// 'use client'
import Image from 'next/image';
import styles from './style.module.scss';
import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { AiOutlineArrowDown } from 'react-icons/ai';
import "./style.css"
const Card = ({ i, title, description, image, src, url, color, progress, range, targetScale }) => {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'start start']
    });
    // ******************************************************************************
    const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
    const scale = useTransform(progress, range, [1, targetScale]);
    const opacity = useTransform(
        progress,
        [range[0] - 0.1, range[0], range[1]],
        [0, 1, 1]
    );
    const y = useTransform(
        progress,
        [range[0], range[1]],
        [120, 0]
    );
    return (
        <div ref={container} className={`${styles.cardContainer} pbr pbl`}>
            <motion.div
                style={{ scale, top: 0, opacity, y }}
                className={styles.card}
            >

                <section className="d-none d-lg-block">
                    <div className="container-fluid ">
                        <div className="row">
                            <div className="col-12">
                                <div className="cards">

                                    <div
                                        // key={index}
                                        className={`custom-card `}
                                    // style={}
                                    >
                                        <div className="row">
                                            <div className="col-lg-5">
                                                <div className="scrollStack_content ">
                                                    <div className="content">
                                                        <div className="stack_icon  ">
                                                            <AiOutlineArrowDown />
                                                        </div>
                                                        <div className="stack_title">
                                                            <h5 className="capitalize">{title}</h5>
                                                            <h2 className='text-start'>Talent sourcing</h2>
                                                            <p>{description}</p>
                                                            <div className="button scroll_stack_button flex  items-center">
                                                                <Link href={""} className="rounded-2xl">
                                                                    <span>
                                                                        <AiOutlineArrowDown />
                                                                    </span>
                                                                    <span>Read more</span>
                                                                    <span>
                                                                        <AiOutlineArrowDown />
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div></div>
                                            </div>
                                            <div className="col-lg-7">
                                                <div className="stack_img">
                                                    {/* <img src={item.image} alt={item.title} /> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </motion.div>
        </div>
    )
}

export default Card