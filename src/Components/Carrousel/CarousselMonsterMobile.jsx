import React, { useState } from "react";
import "./CarousselMonsterMobileStyles.scss";
import bellier from "../../ASSETS/Images/Monstre/Bellier.png";
import chevre from "../../ASSETS/Images/Monstre/Chevaucheuse de Chevre.png";
import colosse from "../../ASSETS/Images/Monstre/COLOSSE.png";
import dragounet from "../../ASSETS/Images/Monstre/dragounetglace.png";
import drogon from "../../ASSETS/Images/Monstre/DROGON.png";
import ekipic from "../../ASSETS/Images/Monstre/EKIPIC.png";
import floragide from "../../ASSETS/Images/Monstre/FLORAGIDE.png";
import gelatin from "../../ASSETS/Images/Monstre/GELATIN.png";
import gobelin from "../../ASSETS/Images/Monstre/GOBELINS VOLANTS.png";
import gribouille from "../../ASSETS/Images/Monstre/GRIBOUILLE.png";
import guepi from "../../ASSETS/Images/Monstre/GUEPI.png";
import horde from "../../ASSETS/Images/Monstre/horde scintilou.png";
import rochelame from "../../ASSETS/Images/Monstre/Rochelame.png";
import scorbut from "../../ASSETS/Images/Monstre/SCORBUT.png";
import droite from '../../ASSETS/Images/Icon/iconschevron-right.png'
import gauche from '../../ASSETS/Images/Icon/chevronLeft.png'

const cards = [
    {
        title: "BELLIER",
        img: bellier,
        text:
            "Le bélier massif est équipé d'une armure lourde et d'une tête en forme de bélier, utilisée pour démolir les tours et les défenses ennemies.",
    },
    {
        title: "CHEVAUCHEUSE DE CHEVRE",
        img: chevre,
        text:
            "Armée d'une lance puissante, elle attaque aussi bien à distance qu'au corps à corps.",
    },
    {
        title: "COLOSSE",
        img: colosse,
        text:
            "Géant de pierre concentré uniquement sur la destruction des tours et des défenses ennemies.",
    },
    {
        title: "DRAGONNET DE GLACE",
        img: dragounet,
        text:
            "Petit dragon volant qui attaque les ennemis au sol et dans les airs en crachant des boules de glace.",
    },
    {
        title: "DROGON",
        img: drogon,
        text:
            "Fonce sur les tours et les défenses ennemies avec une vitesse fulgurante. Il est insensible aux attaques des unités terrestres et se concentre exclusivement sur les structures.",
    },
    {
        title: "EKIPIC",
        img: ekipic,
        text:
            "Agile et résistant, cet étonnant monstre est capable de renvoyer les dégâts à ses adversaires grâce à un mécanisme de défense unique.",
    },
    {
        title: "FLORAGIDE",
        img: floragide,
        text:
            "Plante humanoïde capable de lancer des attaques à distance et de soigner les alliés proches.",
    },
    {
        title: "GELATIN",
        img: gelatin,
        text: "Créature gélatineuse et lente qui absorbe une partie des dégâts reçus.",
    },
    {
        title: "GOBELIN VOLANT",
        img: gobelin,
        text:
            "Duo de créatures volantes rapides et agiles qui attaquent les ennemis au sol et dans les airs.",
    },
    {
        title: "GRIBOUILLE",
        img: gribouille,
        text:
            "Chat lumineux et rapide, doté d'une capacité de camouflage temporaire.",
    },
    {
        title: "GUEPI",
        img: guepi,
        text:
            "Créature volante redoutable qui attaque les unités ennemies, y compris les autres unités aériennes.",
    },
    {
        title: "HORDE SCINTILOU",
        img: horde,
        text:
            "Quatuor de petits oiseaux volant rapide, lançant des mini-éclairs sur ses ennemis.",
    },
    {
        title: "ROCHELAME",
        img: rochelame,
        text:
            "Petit golem de pierre robuste et puissant, doté d'une attaque de zone.",
    },
    {
        title: "SCORBUT",
        img: scorbut,
        text:
            "Scorpion enflammé, rapide et agile, infligeant des dégâts de feu sur la durée.",
    },
];

const CarousselMonsterMobile = () => {
    const [currentCard, setCurrentCard] = useState(0);

    const handleNext = () => {
        setCurrentCard((prevCard) => (prevCard === cards.length - 1 ? 0 : prevCard + 1));
    };

    const handlePrev = () => {
        setCurrentCard((prevCard) => (prevCard === 0 ? cards.length - 1 : prevCard - 1));
    };

    return (
        <div className="carouselContainerMobile">
            <div className="carrouselTitleMobile">
                <h2 className='titleMobile'>NOS MONSTRES</h2>
            </div>
            <div className="cardMobile">
                <img className="card-imageMobile" src={cards[currentCard].img} alt={cards[currentCard].title} />
                <div className="card-contentMobile">
                    <h2 className="card-titleMobile">{cards[currentCard].title}</h2>
                    <p className="card-textMobile">{cards[currentCard].text}</p>
                </div>
            </div>
            <div className="carouselButtonsMobile">
                <button className="prevButtonMobile" onClick={handlePrev}>
                    <img src={gauche} alt='image'/>
                </button>
                <button className="nextButtonMobile" onClick={handleNext}>
                    <img src={droite} alt='image'/>
                </button>
            </div>
        </div>
    );
};

export default CarousselMonsterMobile;
