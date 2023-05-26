import React, { useEffect, useState } from "react";
import mode1 from'../../ASSETS/Images/Banner/modejeu1.png'
import mode2 from '../../ASSETS/Images/Banner/modejeu2.png'

import './BannerModeJeuStyles.scss'
const BannerModeJeu = () => {
    useEffect(() => {
        const elementsToAnimate = document.querySelectorAll(".cardimage.animated, .cardModetilte.animated, .textcardmode.animated, .listescardmode.animated");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.remove("hidden");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.9 }
        );

        elementsToAnimate.forEach((element) => {
            observer.observe(element);
        });

        return () => {
            elementsToAnimate.forEach((element) => {
                observer.unobserve(element);
            });
        };
    }, []);
    const [showMoreMode1, setShowMoreMode1] = useState(false);
    const [showMoreMode2, setShowMoreMode2] = useState(false);

    // Fonctions pour basculer l'affichage des éléments supplémentaires
    const toggleShowMoreMode1 = () => setShowMoreMode1(!showMoreMode1);
    const toggleShowMoreMode2 = () => setShowMoreMode2(!showMoreMode2);
    return(
        <div className='containerModeJeu'>
            <h1 className='titleMode'>Modes de jeu :</h1>
            <div className='contenuModeJeu'>
                <div className='mode'>
                    <h2 className='cardModetilte animated  hidden'>Clash - 1V1 / 2V2</h2>
                    <img className='cardimage' src={mode1} alt='image mode jeu 1'/>
                    <p className='textcardmode animated  hidden'>Clash est un jeu de stratégie en temps réel dans lequel les joueurs s'affrontent dans des arènes en utilisant leurs héros, monstres et sorts pour détruire les tours de défense de l'adversaire et finalement, leur château. Les combats se déroulent en 1 contre 1 ou 2 contre 2 où les joueurs choisissent un deck composé d’un  héro, de monstres, sorts et tours pour élaborer des stratégies et tenter de prendre le dessus sur leur adversaire.</p>
                    {/* Ajoutez cette condition pour afficher les éléments supplémentaires */}
                    {showMoreMode1 && (
                        <>
                            <p className='textcardmode' style={{display: showMoreMode1 ? 'block' : 'none'}}>Les joueurs déploient leurs unités et lancent des sorts en utilisant d’ether, une ressource qui se régénère automatiquement tout au long de la partie. Chaque unité et sort a un coût en ether, obligeant les joueurs à prendre des décisions stratégiques sur la manière de gérer leurs ressources pour déployer efficacement leurs troupes et sortir victorieux du combat.</p>
                            <p className='textcardmode'style={{display: showMoreMode1 ? 'block' : 'none'}}>Au fur et à mesure de leur progression, les joueurs déverrouillent de nouvelles arènes avec des récompenses et des défis plus importants. Les combats sont basés sur un système de matchmaking qui met en relation les joueurs ayant un niveau de compétence similaire, assurant ainsi des combats équilibrés et stimulants.</p>
                            <p className='textcardmode' style={{display: showMoreMode1 ? 'block' : 'none'}}>En remportant des combats, les joueurs gagnent des trophées qui leur permettent de grimper dans les classements et d'accéder à des récompenses plus importantes. De plus, les victoires permettent aux joueurs de gagner des coffres contenant des cartes de héros, de monstres, d'équipements et de sorts pour améliorer et personnaliser leurs decks.</p>
                            <p className='textcardmode' style={{display: showMoreMode1 ? 'block' : 'none'}}>Ce mode de jeu principal offre une expérience de jeu compétitive et engageante, où la stratégie, la réflexion rapide et la maîtrise de son deck sont essentielles pour réussir et progresser dans les rangs.</p>
                        </>
                    )}
                    <button onClick={toggleShowMoreMode1}  className="showMoreButton">
                        {showMoreMode1 ? "Voir moins" : "Voir plus"}
                    </button>
                </div>

                <div className='mode' id='modeDeJeux'>
                    <h2 className='cardModetilte animated  hidden'>Battle Brawl</h2>
                    <img className='cardimage ' src={mode2} alt='image mode jeu 2'/>
                    <p className='textcardmode animated hidden'>Le mode Battle Brawl propose une expérience de jeu plus simple et rapide. Dans ce mode, les joueurs prendront le contrôle de leurs héros préférés pour s'affronter dans des matchs en équipe ou en solo. Voici un aperçu du déroulement de ce mode de jeu:</p>
                    {showMoreMode2 && (
                        <>

                            <ul>
                                <li className= 'listescardmode'>Lobby et matchmaking: Les joueurs rejoindront un lobby et seront associés à d'autres joueurs ayant un niveau de compétence similaire, soit en équipe ou en solo. Le système de matchmaking veillera à créer des parties équilibrées et captivantes.</li>
                                <li className= 'listescardmode'>Arène de combat: Les joueurs seront placés dans une arène de taille réduite par rapport au mode Battle Royale. L'arène comportera divers obstacles et terrains, offrant des opportunités de tactiques variées.</li>
                                <li className= 'listescardmode'>Objectif de la partie: L'objectif principal dans ce mode de jeu sera d'éliminer les autres joueurs ou équipes adverses. Les parties seront plus courtes et plus intenses que dans le mode Battle Royale.</li>
                                <li className= 'listescardmode'>Contrôle du héros: Les joueurs contrôleront directement leur héros à l'aide d'un joystick virtuel ou d'autres commandes adaptées à leur appareil mobile. Ils pourront utiliser les compétences spéciales de leur héros pour infliger des dégâts aux ennemis et soutenir leur équipe.</li>
                                <li className= 'listescardmode'>Progression et récompenses: Les joueurs gagneront des points d'expérience et des récompenses en fonction de leur performance dans chaque partie. Ces récompenses pourront être utilisées pour améliorer leurs héros, débloquer de nouveaux personnages, et obtenir des objets cosmétiques.</li>
                            </ul>

                            <p className='textcardmode'>Ce mode de jeu Battle Brawl offre une alternative rapide et amusante au mode principal inspiré de Clash Royale, permettant aux joueurs de profiter d'une expérience de jeu variée et engageante.</p>
                        </>
                    )}
                        <button onClick={toggleShowMoreMode2}  className="showMoreButton">
                        {showMoreMode2 ? "Voir moins" : "Voir plus"}
                    </button>
                </div>
            </div>

        </div>
    )
}

export default BannerModeJeu