import React, { useEffect } from "react";
import '../../i18n'; // Assure-toi que ce fichier est importé avant tes composants
import { useTranslation } from 'react-i18next';
import './_BannerAcceuilStyles.scss';
import banner from '../../ASSETS/Images/Banner/BannerAceuilArcanys.png';

const BannerAcceuil = () => {
    const { t } = useTranslation();
    useEffect(() => {
        const elementsToAnimate = document.querySelectorAll(".title, .textBanner, .imageBanner");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.style.animationPlayState = "running";
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.5 }
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

    return (
        <main>
            <div className='containerAcceuil'>
                <div className='containerBanner'>
                    <div className='title-Banner'>
                        <h1 className='title'>{t('BannerAcceuil.title')}</h1>
                        <p className='textBanner'>{t('BannerAcceuil.description')}</p>
                    </div>
                    <img className='imageBanner' src={banner} alt="banner image"/>
                </div>
            </div>
        </main>
    );
}

export default BannerAcceuil;
