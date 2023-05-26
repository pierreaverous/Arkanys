import React, { useState, useEffect } from "react";
import './containerLeverDeFond.scss'
import {Link} from "react-router-dom";

const ContainerLeverDefond = ({ percentage }) => {
    // Définir la date de fin de votre compte à rebours
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

        // nettoyage de l'intervalle lors du démontage du composant
        return () => clearInterval(timer);
    }, []);

    return (
        <div className='containerLeverdeFond'>
            <div className='titleLeverdefond'>
                <h1 className='leverdefondh1'>1 ARK$ = XXXX$</h1>
                <h2 className='leverdefondh2'>Objectif Initiale Sale = 390 000$</h2>
            </div>
            <div className='titleLeverdefond'>
                <h2 className='leverdefondh2'>Temps restant :</h2>
                <h2 className='leverdefondh2'>{timeLeft.jours} J - {timeLeft.heures} H - {timeLeft.minutes} M - {timeLeft.secondes} S</h2>
                <h3 className='leverdefondh3'>Jusqu'à l'augmentation du prix à XXX$</h3>
            </div>
            <div className='progress-container'>
                <div className='progress-bar' style={{width: `${percentage}%`}}/>
            </div>
            <div className='buttonLeverFond'>
                <Link to="/contact" className='contactButtonLeverFond'>ACHETER MAINTENANT EN USDT</Link>
                <Link to="/" className='contactButtonLeverFond'>ACHETER MAINTENANT EN FIAT</Link>
            </div>
            <p className='footerText'>Prix au lancement : 1 ARK$ = XXX USDT</p>
        </div>
    )
}

export default ContainerLeverDefond;
