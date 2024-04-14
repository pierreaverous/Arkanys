import React, { useState, useEffect } from "react";
import './containerLeverDeFond.scss'
import '../../../i18n'; // Assurez-vous que ce fichier est importé avant vos composants
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

const ContainerLeverDefond = ({ percentage }) => {
    const { t } = useTranslation();

    const endDate = new Date('2024-01-01T00:00:00');

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    function calculateTimeLeft() {
        const difference = +endDate - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                jours: Math.floor(difference / (1000 * 60 * 60 * 24)),
                heures: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                secondes: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className='containerLeverdeFond'>
            <div className='titleLeverdefond'>
                <h1 className='leverdefondh1'>{t('leverdefond.title')}</h1>
                <h2 className='leverdefondh2'>{t('leverdefond.initialGoal')}</h2>
            </div>
            <div className='titleLeverdefond'>
                <h2 className='leverdefondh2'>{t('leverdefond.timeLeft')}</h2>
                <h2 className='leverdefondh2'>{timeLeft.jours} J - {timeLeft.heures} H - {timeLeft.minutes} M - {timeLeft.secondes} S</h2>
                <h3 className='leverdefondh3'>{t('leverdefond.untilPriceIncrease')}</h3>
            </div>
            <div className='progress-container'>
                <div className='progress-bar' style={{width: `${percentage}%`}}/>
            </div>
            <div className='buttonLeverFond'>
                <Link to="/contact" className='contactButtonLeverFond'>{t('leverdefond.buyNowInUSDT')}</Link>
                <Link to="/" className='contactButtonLeverFond'>{t('leverdefond.buyNowInFiat')}</Link>
            </div>
            <p className='footerText'>{t('leverdefond.launchPrice')}</p>
        </div>
    )
}

export default ContainerLeverDefond;
