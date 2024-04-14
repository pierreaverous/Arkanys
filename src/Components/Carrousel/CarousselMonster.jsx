import React, { useEffect, useRef, useState } from 'react';
import 'swiper/swiper-bundle.css';
import Swiper from 'swiper';
import '../../i18n'; // Assurez-vous que ce fichier est importé avant vos composants
import { useTranslation } from 'react-i18next';
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
        img:bellier ,
    },
    {
        img: chevre,
    },
    {
        img: colosse,
    },
    {
        img: dragounet,
    },
    {
        img: drogon,
    },
    {
        img: ekipic,
    },
    {
        img:floragide,
    },
    {
        img: gelatin,
    },
    {
        img: gobelin,
    },
    {
        img: gribouille,
    },
    {
        img: guepi,
    },
    {
        img: horde,
    },
    {
        img: rochelame,
    },
    {
        img: scorbut,
    },
];

const CarousselMonster = ({ type }) => {
    const { t } = useTranslation();

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
                <h2>{t('monsters.title')}</h2> {/* Utilisation de la fonction de traduction pour le titre */}
            </div>
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    {cards.map((card, index) => (
                        <div className={`swiper-slide ${selectedItemIndex === index ? 'swiper-slide-active' : ''}`} key={index}>
                            <div className="card">
                                <img className="card-image" src={card.img} alt={card.title} />
                                <div className="card-content">
                                    <h2 className="card-title">{t(`monsters.cards.${index}.title`)}</h2> {/* Utilisation de la fonction de traduction pour le titre de la carte */}
                                    <p className="card-text">{t(`monsters.cards.${index}.text`)}</p> {/* Utilisation de la fonction de traduction pour le texte de la carte */}
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
