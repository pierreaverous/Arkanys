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
            { threshold: 0.1 }
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
            <h2 className='titleH2ModeJeu'>Notre jeu proposera à terme plusieurs variantes pour satisfaire tous les types de joueurs. Que vous préfériez les combats en arène, les défis en coopération ou les campagnes solo, vous trouverez un mode de jeu qui vous convient. Chaque mode offre des récompenses uniques et des expériences de jeu passionnantes.</h2>
            <div className='contenuModeJeu'>
                <div className='mode'>
                    <h2 className='cardModetilte animated  hidden'>Arkanys Arena</h2>
                    <img className='cardimage' src={mode1} alt='image mode jeu 1'/>
                    <p className='textcardmode animated  hidden'>Le mode "Arkanys Arena" d'Arkanys offre une expérience de jeu immersive et stratégique pour satisfaire les joueurs à la recherche de défis compétitifs. Ce mode met l'accent sur la personnalisation des decks, la gestion des ressources et la progression à travers différentes arènes, offrant ainsi une expérience de jeu riche et captivante.
                        Dans le mode "Arkanys Arena", les joueurs construisent des decks composés de héros, de monstres, de sorts et de tours de défense. Ils peuvent améliorer leurs monstres, sorts et tours de défense en fusionnant des cartes de même niveau et rareté. Les héros, quant à eux, sont améliorés en dépensant des gemmes d'expérience, obtenues en augmentant le niveau du compte joueur. Les équipements renforcent les statistiques des héros et nécessitent un certain niveau d'expérience pour être équipés.
                        Gameplay :
                    </p>
                    {/* Ajoutez cette condition pour afficher les éléments supplémentaires */}
                    {showMoreMode1 && (
                        <>
                            <p className='textcardmode' style={{display: showMoreMode1 ? 'block' : 'none'}}>Le gameplay du mode "Arkanys Arena" est basé sur des combats en tour par tour entre deux joueurs, chacun disposant de 150 secondes pour jouer au cours d'une partie et de 15 secondes par tour de jeu. Les combats ont lieu dans différentes arènes, chacune offrant des récompenses et des défis croissants. Le matchmaking est conçu pour associer les joueurs ayant un niveau de compétence similaire, garantissant ainsi des combats équilibrés et stimulants.</p>
                            <p className='textcardmode'style={{display: showMoreMode1 ? 'block' : 'none'}}>Au cours des combats, les joueurs déploient leurs unités et lancent des sorts en utilisant de l'ether, une ressource qui se régénère automatiquement tout au long de la partie. Chaque unité et sort a un coût en ether, obligeant les joueurs à prendre des décisions stratégiques sur la manière de gérer leurs ressources pour déployer efficacement leurs troupes et remporter le combat.</p>
                            <p className='textcardmode' style={{display: showMoreMode1 ? 'block' : 'none'}}>Si aucun joueur n'a atteint l'un des deux objectifs (éliminer tous les personnages adverses ou détruire les tours) dans les 5 minutes imparties, une prolongation est déclenchée. Durant cette prolongation, chaque joueur reçoit 60 secondes supplémentaires et l'octroi d'ether est augmenté par tour, ce qui intensifie l'action et encourage les joueurs à élaborer des stratégies plus agressives pour remporter la victoire.</p>
                            <p className='textcardmode' style={{display: showMoreMode1 ? 'block' : 'none'}}>Les victoires rapportent des trophées pour progresser dans les classements et accéder à des récompenses plus importantes. De plus, les victoires permettent aux joueurs de gagner des coffres contenant des cartes de héros, de monstres, d'équipements et de sorts pour améliorer et personnaliser leurs decks.</p>
                            <p className='textcardmode' style={{display: showMoreMode1 ? 'block' : 'none'}}>Le mode "Arkanys Arena" d'Arkanys offre une expérience de jeu passionnante et stimulante, attirant à la fois les investisseurs et les joueurs grâce à son gameplay stratégique, sa personnalisation approfondie et son système de progression attrayant.</p>

                        </>
                    )}
                    <button onClick={toggleShowMoreMode1}  className="showMoreButton">
                        {showMoreMode1 ? "Voir moins" : "Voir plus"}
                    </button>
                </div>

                <div className='mode' id='modeDeJeux'>
                    <h2 className='cardModetilte animated  hidden'>Le Monde de Tokenia: Les Gardiens d'Arkanys</h2>
                    <img className='cardimage ' src={mode2} alt='image mode jeu 2'/>
                    <p className='textcardmode animated hidden'>Les Gardiens d'Arkanys (LGA) est le mode de jeu final d'Arkanys.
                        Dans ce mode, les joueurs explorent un vaste monde peuplé de monstres, de quêtes et de défis. Les héros, les monstres et les équipements améliorés dans les autres modes de jeu sont essentiels pour progresser dans LGA, où les joueurs devront affronter des ennemis de plus en plus puissants et résoudre des énigmes complexes pour avancer dans l'histoire.
                        Gameplay :
                        LGA est un jeu de rôle et d'exploration où les joueurs contrôlent leur héros et son équipe de monstres dans un monde ouvert et interactif. Les combats dans Evolve sont basés sur un système de combat au tour par tour, où les joueurs doivent utiliser la stratégie et la réflexion pour vaincre leurs ennemis.
                        Les héros, les monstres et les équipements obtenus et améliorés dans les autres modes de jeu sont essentiels pour progresser dans LGA.
                        Les joueurs devront également résoudre des énigmes, accomplir des quêtes et interagir avec des personnages non-joueurs pour avancer dans l'histoire et débloquer de nouvelles zones à explorer.
                        Les récompenses gagnées dans LGA, telles que des cartes de héros, des monstres, des équipements et des ressources, peuvent être utilisées pour améliorer et personnaliser les decks dans tous les modes de jeu, renforçant ainsi l'interconnexion entre les modes et incitant les joueurs à découvrir et profiter de toutes les facettes d'Arkanys.</p>
                    {showMoreMode2 && (
                        <>

                            <ul>
                                <li className= 'listescardmode'>Exploration et quêtes: Les joueurs exploreront un vaste monde ouvert rempli de divers environnements, points d'intérêt, et monstres à affronter. Ils pourront accomplir des quêtes pour progresser dans l'histoire et débloquer de nouvelles zones.</li>
                                <li className= 'listescardmode'>PvM - Combat contre les monstres: Les joueurs pourront former des groupes pour affronter des monstres dans des combats tactiques au tour par tour. Chaque monstre possédera des caractéristiques et des compétences uniques, obligeant les joueurs à élaborer des stratégies pour les vaincre. Les combats PvM offriront des récompenses sous forme d'expérience, d'objets et de ressources.</li>
                                <li className= 'listescardmode'>PvP - Combat entre joueurs: Les joueurs pourront également s'affronter dans des combats PvP au tour par tour. Ces combats pourront être organisés dans des arènes dédiées, permettant aux joueurs de montrer leurs compétences et de se mesurer à d'autres joueurs pour gagner des récompenses et améliorer leur classement.</li>
                                <li className= 'listescardmode'>Personnalisation et progression: Les joueurs pourront personnaliser et améliorer leurs héros en acquérant de nouveaux équipements, compétences, et familiers. Ils gagneront de l'expérience en combattant des monstres et d'autres joueurs, ce qui leur permettra de monter en niveau et de débloquer de nouvelles capacités.</li>
                                <li className= 'listescardmode'>Coopération et interaction sociale: Les joueurs pourront rejoindre des guildes et coopérer avec d'autres joueurs pour relever des défis PvM et PvP plus difficiles. La communication et la coordination avec les coéquipiers seront essentielles pour réussir dans les combats les plus difficiles.</li>
                                <li className= 'listescardmode'>Récompenses et économie du jeu: Les joueurs gagneront des récompenses en accomplissant des quêtes, en combattant des monstres et en participant à des combats PvP. Ils pourront échanger ces récompenses sur le marché pour obtenir des objets rares et améliorer leurs héros.</li>

                            </ul>

                            <p className='textcardmode'>Ce mode de jeu inspiré des meilleurs MMORPG offrira une expérience de jeu riche et immersive, permettant aux joueurs d'explorer un monde fantastique, de combattre des monstres et d'autres joueurs, et de progresser dans un système de combat tactique au tour par tour.</p>
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