import React, { useEffect, useRef, useState } from 'react';
import './CarousselStyle.scss';
import ChevronRight from '../../ASSETS/Images/Icon/iconschevron-right.png';
import ChevronLeft from '../../ASSETS/Images/Icon/chevronLeft.png';

const Caroussel = ({ items }) => {
    const carouselRef = useRef(null);
    const rotationRef = useRef(0); // Ajout d'un useRef pour rotation
    const [selectedItemIndex, setSelectedItemIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
    const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

    useEffect(() => {
        const carousel = carouselRef.current;

        if (carousel) {
            const slides = carousel.getElementsByClassName('carousel-slide');
            const angle = (2 * Math.PI) / slides.length;

            const updateCarousel = () => {
                for (let i = 0; i < slides.length; i++) {
                    const slideRotation = i * angle + rotationRef.current; // Utiliser rotationRef.current
                    slides[i].style.transform = `rotateY(${slideRotation}rad) translateZ(400px)`;
                }
            };

            const goToPrevSlide = () => {
                rotationRef.current += angle; // Utiliser rotationRef.current
                updateCarousel();
            };

            const goToNextSlide = () => {
                rotationRef.current -= angle; // Utiliser rotationRef.current
                updateCarousel();
            };

            updateCarousel();

            const selectCard = (index) => {
                setSelectedItemIndex(index);
                rotationRef.current = -index * angle; // Utiliser rotationRef.current
                updateCarousel();
            };

            Array.from(slides).forEach((slide, index) => {
                slide.addEventListener('click', () => selectCard(index));
            });

            carousel.addEventListener('prevItem', goToPrevSlide);
            carousel.addEventListener('nextItem', goToNextSlide);

            // Ajout des écouteurs d'événements pour le touch
            carousel.addEventListener('touchstart', handleTouchStart);
            carousel.addEventListener('touchmove', handleTouchMove);
            carousel.addEventListener('touchend', handleTouch);

            function handleTouch() {
                if (touchStart - touchEnd > 150) {
                    // Swipe gauche
                    goToNextSlide();
                }

                if (touchStart - touchEnd < -150) {
                    // Swipe droite
                    goToPrevSlide();
                }
            }

            return () => {
                Array.from(slides).forEach((slide, index) => {
                    slide.removeEventListener('click', () => selectCard(index));
                });
                carousel.removeEventListener('prevItem', goToPrevSlide);
                carousel.removeEventListener('nextItem', goToNextSlide);
                carousel.removeEventListener('touchstart', handleTouchStart);
                carousel.removeEventListener('touchmove', handleTouchMove);
                carousel.removeEventListener('touchend', handleTouch);
            };
        }
    }, [carouselRef.current, touchStart, touchEnd]);

    return (
        <div className="carouselContainer">
            <div className="carousel" ref={carouselRef}>
                {items.map((item, index) => (
                    <div
                        className={`carousel-slide ${selectedItemIndex === index ? 'selected' : ''}`}
                        key={index}
                    >
                        <div className="card">
                            <img className="card-image" src={item.img} alt={item.title} />
                            <div className="card-content">
                                <h2 className="card-title">{item.title}</h2>
                                <p className="card-text">{item.text}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="navigationButtons">
                <button className="prev-button" onClick={() => carouselRef.current.dispatchEvent(new Event('prevItem'))}>
                    <img src={ChevronLeft} alt="Previous" />
                </button>
                <button className="next-button" onClick={() => carouselRef.current.dispatchEvent(new Event('nextItem'))}>
                    <img src={ChevronRight} alt="Next" />
                </button>
            </div>
        </div>
    );
};

export default Caroussel;
