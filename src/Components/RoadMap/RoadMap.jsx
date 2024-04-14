import React, { useRef } from "react";
import { useTranslation } from 'react-i18next';
import ScrollTrigger from "react-scroll-trigger";
import "./RoadMapStyles.scss";
import roadmap1 from '../../ASSETS/Images/RoadMap/imageroadmap1.png';
import roadmap2 from '../../ASSETS/Images/RoadMap/roadmap2.png';
import roadmap3 from '../../ASSETS/Images/RoadMap/roadmap3.png';
import roadmap4 from '../../ASSETS/Images/RoadMap/roadmap4.png';
import roadmap5 from '../../ASSETS/Images/RoadMap/roadmap5.png';
import roadmap6 from '../../ASSETS/Images/RoadMap/roadmap6.png';
import roadmap7 from '../../ASSETS/Images/RoadMap/roadmap7.png';
import roadmap8 from '../../ASSETS/Images/RoadMap/roadmap8.png';
import Footer from "../Footer/Footer";

const RoadMap = () => {
    const { t } = useTranslation();
    const fadeInRefs = useRef([]);
    const onEnter = (index, direction) => () => {
        fadeInRefs.current[index].classList.add(direction === "left" ? "fadeInLeft" : "fadeInRight");
    };

    const images = [roadmap1, roadmap2, roadmap3, roadmap4, roadmap5, roadmap6, roadmap7, roadmap8];
    const quarters = t('roadmap.quarters', { returnObjects: true });

    return (
        <>
            <div className="containerRoadmap">
                <h2 className="titleRoadmap">{t('roadmap.title')}</h2>
                <div className="timeline-wrapper">
                    <div className="roadmap-container">
                        <div className="vertical-arrow"></div>
                        <div className="arrow-point"></div>
                        <div className="items-container">
                            {quarters.map(({title, items, imagePath}, index) => {
                                const direction = index % 2 === 0 ? "left" : "right";
                                return (
                                    <ScrollTrigger key={title} onEnter={onEnter(index, direction)}>
                                        <div ref={(el) => (fadeInRefs.current[index] = el)} className={`roadmap-item ${direction} ${index % 2 === 0 ? 'odd' : 'even'}`}>
                                            <img src={images[index]} className={`roadmap-image ${direction}`} alt={`Image for ${title}`} />
                                            <h3>{title}</h3>
                                            <div className="point" style={{ right: index % 2 !== 0 ? -87 : "auto", left: index % 2 === 0 ? -84 : "auto" }}></div>
                                            <ul>
                                                {items.map((item, idx) => (
                                                    <li key={idx}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </ScrollTrigger>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default RoadMap;
