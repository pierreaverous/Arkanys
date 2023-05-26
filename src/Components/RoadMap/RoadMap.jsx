import React, { useRef } from "react";
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
    const fadeInRefs = useRef([]);

    const onEnter = (index, direction) => () => {
        fadeInRefs.current[index].classList.add(direction === "left" ? "fadeInLeft" : "fadeInRight");
    };

    return (
        <>
            <div className="containerRoadmap">
                <h2 className="titleRoadmap">ROADMAP</h2>
                <div className="timeline-wrapper">
                    <div className="roadmap-container">
                        <div className="vertical-arrow"></div>
                        <div className="arrow-point"></div>
                        <div className="items-container">
                            {[
                                    {
                                        title: "Trimestre 1",
                                        imagePath: roadmap1,
                                        items: [
                                            "White paper v1",
                                            "Conceptualisation des designs des héros, sbires, sorts et équipements",
                                            "Evaluation des besoins financiers",
                                            "Evaluation des besoins humains",
                                            "Elaboration du plan marketing",
                                            "Recherche d'investisseurs pour la private sake du token ARK$",
                                            "Elaboration des plans pour la marketplace interconnectée",
                                            "Elaboration des plans pour la mise en place d'une DAO",
                                        ],
                                    },
                                    {
                                        title: "Trimestre 2",
                                        imagePath: roadmap2,
                                        items: [
                                            "Initiale sale token / SAFT",
                                            "Recrutement de l'équipe",
                                            "Publication du livre blanc v2",
                                            "Seed sale",
                                            "Créations des designs",
                                            "Développement des maps et gameplay du mode 'Arkanys Arena'",
                                            "Private sale",
                                            "Elargissement équipe",
                                        ],
                                    },
                                    {
                                        title: "Trimestre 3",
                                        imagePath: roadmap3,
                                        items: [
                                            "Développement des NFTs",
                                            "Lancement de l'alpha sur testnet pour le mode 'Arkanys Arena'",
                                            "INO",
                                            "Développement de la marketplace",
                                            "Mega Giveaway",
                                        ],
                                    },
                                    {
                                        title: "Trimestre 4",
                                        imagePath: roadmap4,
                                        items: [
                                            "Préparation et lancement de la presale et des 3 rounds d'ICO",
                                            "Finalisation du mode 'Arkanys Arena'",
                                            "TGE du token ARK$",
                                        ],
                                    },
                                    {
                                        title: "Trimestre 5",
                                        imagePath: roadmap5,
                                        items: [
                                            "Développement du mode 'LGA'",
                                            "Mise en place de la semi-DAO et intégration des membres actifs de la communauté",
                                            "Organisation du premier Giga Giveaway",
                                        ],
                                    },
                                    {
                                        title: "Trimestre 6",
                                        imagePath: roadmap6,
                                        items: [
                                            "Alpha du mode 'LGA'",
                                            "Développement des 'lands' pour le métavers",
                                            "Organisation du deuxième événement réel pour la communauté",
                                        ],
                                    },
                                    {
                                        title: "Trimestre 7",
                                        imagePath: roadmap7,
                                        items: [
                                            "Bêta ouverte du mode 'LGA'",
                                            "Vente des 'lands' pour le métavers",
                                            "Organisation du deuxième Mega Giveaway 'coup marketing'",
                                        ],
                                    },
                                    {
                                        title: "Trimestre 8",
                                        imagePath: roadmap8,
                                        items: [
                                            "Consolidation et amélioration de tous les modes de jeu",
                                            "Organisation du troisième événement réel pour la communauté",
                                            "Célébration de l'anniversaire du projet avec un Mega Giveaway spécial",
                                            "Sortie officielle du mode 'LGA'",
                                        ],
                                    },
                            ].map(({title, items, imagePath}, index) => {
                                const direction = index % 2 === 0 ? "left" : "right";
                                return (
                                <ScrollTrigger key={title} onEnter={onEnter(index, direction)}>
                                <div
                                ref={(el) => (fadeInRefs.current[index] = el)}
                                className={`roadmap-item ${direction} ${index % 2 === 0 ? 'odd' : 'even'}`}
                                >
                                <img src={imagePath} className={`roadmap-image ${direction}`} alt={`Image for ${title}`} />
                                <h3>{title}</h3>
                                <div className="point" style={{ right: index % 2 !== 0 ? -87 : "auto", left: index % 2 === 0 ? -84 : "auto" }}></div>
                                <ul>
                            {items.map((item) => (
                                <li key={item}>{item}</li>
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
