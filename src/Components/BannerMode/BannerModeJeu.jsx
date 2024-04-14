import React, { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import mode1 from'../../ASSETS/Images/Banner/modejeu1.png';
import mode2 from '../../ASSETS/Images/Banner/modejeu2.png';

import './BannerModeJeuStyles.scss';

const BannerModeJeu = () => {
    const { t } = useTranslation();
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

    return(
        <div className='containerModeJeu'>
            <h1 className='titleMode'>{t('BannerModeJeu.title')}</h1>
            <h2 className='titleH2ModeJeu'>{t('BannerModeJeu.description')}</h2>
            <div className='contenuModeJeu'>
                <div className='mode'>
                    <h2 className='cardModetilte animated hidden'>{t('BannerModeJeu.mode1Title')}</h2>
                    <img className='cardimage' src={mode1} alt={t('BannerModeJeu.mode1Title')}/>
                    <p className='textcardmode animated hidden'>{t('BannerModeJeu.mode1Description')}</p>
                    {showMoreMode1 && (
                        <>
                            {t('BannerModeJeu.mode1Extended', {returnObjects: true}).map((item, index) => (
                                <p key={index} className='textcardmode' style={{display: 'block'}}>{item}</p>
                            ))}
                        </>
                    )}
                    <button onClick={() => setShowMoreMode1(!showMoreMode1)} className="showMoreButton">
                        {showMoreMode1 ? t('BannerModeJeu.common.see_less') : t('BannerModeJeu.common.see_more')}
                    </button>
                </div>

                <div className='mode' id='modeDeJeux'>
                    <h2 className='cardModetilte animated hidden'>{t('BannerModeJeu.mode2Title')}</h2>
                    <img className='cardimage' src={mode2} alt={t('BannerModeJeu.mode2Title')}/>
                    <p className='textcardmode animated hidden'>{t('BannerModeJeu.mode2Description')}</p>
                    {showMoreMode2 && (
                        <>
                            {t('BannerModeJeu.mode2Extended', {returnObjects: true}).map((item, index) => (
                                <div key={index}>
                                    {index === 0 ?
                                        <p className='textcardmode' style={{display: 'block'}}>{item}</p> : null}
                                    {index > 0 ? <li className='listescardmode'>{item}</li> : null}
                                </div>
                            ))}
                        </>
                    )}
                    <button onClick={() => setShowMoreMode2(!showMoreMode2)} className="showMoreButton">
                        {showMoreMode2 ? t('BannerModeJeu.common.see_less') : t('BannerModeJeu.common.see_more')}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default BannerModeJeu;
