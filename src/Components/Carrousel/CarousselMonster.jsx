import React, { useEffect, useRef, useState } from 'react';
import 'swiper/swiper-bundle.css';
import Swiper from 'swiper';
import './CarousselMonsterStyle.scss';
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

const cards = [
    {
        title: 'BELLIER',
        img:bellier ,
        text: 'bélier massif est équipé d\'une armure lourde et d\'une tête en forme de bélier, utilisée pour démolir les tours et les défenses ennemies.',
    },
    {
        title: 'CHEVAUCHEUSE DE CHEVRE',
        img: chevre,
        text: 'Armée d\'une lance puissante, elle attaque aussi bien à distance qu\'au corps à corps.',
    },
    {
        title: 'COLOSSE',
        img: colosse,
        text: 'Géant de pierre concentrée uniquement sur la destruction des tours et des défenses ennemies.',
    },
    {
        title: 'DRAGONNET DE GLACE',
        img: dragounet,
        text: 'Petit dragon volant qui attaque les ennemis au sol et dans les airs en crachant des boules de glace.',
    },
    {
        title: 'DROGON',
        img: drogon,
        text: 'Fonce sur les tours et les défenses ennemies avec une vitesse fulgurante. Il est insensible aux attaques des unités terrestres et se concentre exclusivement sur les structures.',
    },
    {
        title: 'EKIPIC',
        img: ekipic,
        text: 'Agile et résistant, cet étonnant monstre est capable de renvoyer les dégâts à ses adversaires grâce à un mécanisme de défense unique.',
    },
    {
        title: 'FLORAGIDE',
        img:floragide,
        text: 'Plante humanoïde capable de lancer des attaques à distance et de soigner les alliés proches.',
    },
    {
        title: 'GELATIN',
        img: gelatin,
        text: 'Créature gélatineuse et lente qui absorbe une partie des dégâts reçus.',
    },
    {
        title: 'GOBELIN VOLANT',
        img: gobelin,
        text: 'Duo de créatures volantes rapides et agiles qui attaquent les ennemis au sol et dans les airs.',
    },
    {
        title: 'GRIBOUILLE',
        img: gribouille,
        text: 'Chat lumineux et rapide, doté d\'une capacité de camouflage temporaire..',
    },
    {
        title: 'GUEPI',
        img: guepi,
        text: 'Créature volante redoutable qui attaque les unités ennemies, y compris les autres unités aériennes.',
    },
    {
        title: 'HORDE SCINTILOU',
        img: horde,
        text: 'Quatuor de petits oiseaux volant rapide, lançant des mini-éclairs sur ses ennemis.',
    },
    {
        title: 'ROCHELAME',
        img: rochelame,
        text: 'Petit golem de pierre robuste et puissant, doté d\'une attaque de zone.',
    },
    {
        title: 'SCORBUT',
        img: scorbut,
        text: 'Scorpion enflammé, rapide et agile, infligeant des dégâts de feu sur la durée.',
    },
];

const CarousselMonster = () => {
    const swiperRef = useRef(null);
    const [selectedItemIndex, setSelectedItemIndex] = useState(0);

    useEffect(() => {
        swiperRef.current = new Swiper(".swiper-container", {
            loop: true,
            slidesPerView: "auto",
            centeredSlides: true,
            spaceBetween: 60,
            grabCursor: true,
            effect: "coverflow",
            coverflowEffect: {
                rotate: 0,
                stretch: 100,
                depth: 200,
                modifier: 1,
                slideShadows: true,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });

        // Effectuer le défilement vers la première diapositive lorsque le composant est monté
        swiperRef.current.slideTo(2, 0, false);

        return () => {
            swiperRef.current.destroy();
        };
    }, []);

    const goToPrevSlide = () => {
        const swiper = swiperRef.current;
        if (swiper.isBeginning) {
            swiper.slideTo(swiper.slides.length - 1);  // Aller au dernier slide
        } else {
            swiper.slideTo(swiper.activeIndex - 1);  // Aller au slide précédent
        }
    };


    const goToNextSlide = () => {
        if (swiperRef.current) {
            const swiper = swiperRef.current;
            const isLastSlide = swiper.isEnd;

            if (isLastSlide) {
                swiper.slideTo(0); // Revenir à la première diapositive
                swiper.update(); // Mettre à jour le carrousel
            } else {
                swiper.slideNext();
            }
        }
    };


    return (
        <div className='carouselContainer'>
            <div className='carrouselTitle'>
                <h2>NOS MONSTRES</h2>
            </div>
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    {cards.map((card, index) => (
                        <div className={`swiper-slide ${selectedItemIndex === index ? 'swiper-slide-active' : ''}`} key={index}>
                            <div className="card">
                                <img className="card-image" src={card.img} alt={card.title} />
                                <div className="card-content">
                                    <h2 className="card-title">{card.title}</h2>
                                    <p className="card-text">{card.text}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="navigationButtons">
                    <button className="swiper-button-prev" onClick={goToPrevSlide}></button>
                    <button className="swiper-button-next" onClick={goToNextSlide}></button>
                </div>
            </div>
        </div>
    );
};

export default CarousselMonster;