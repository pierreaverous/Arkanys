import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../../i18n'; // Assurez-vous que ce fichier est importé avant vos composants

import '../../i18n'; // Assurez-vous que ce fichier est importé avant vos composants
import './_HomePageStyle.scss';
import NavBar from "../../Components/NavBar/NavBar";
import BannerAcceuil from "../../Components/BannerAcceuil/BannerAcceuil";
import BannerModeJeu from "../../Components/BannerMode/BannerModeJeu";
import Footer from "../../Components/Footer/Footer";
import ContainerLeverDefond from "../../Components/componentsPageLeverDeFond/containerLeverdefond/containerLeverDefond";
import logo from "../../ASSETS/Images/Logo/logo arcanys.png";
import arkanys from "../../ASSETS/Images/Logo/arkanys.png";
import Caroussel from "../../Components/Carrousel/Caroussel";
import { heroes, skill, tower } from '../../Components/Carrousel/CarrousselData';
import CarousselMonster from "../../Components/Carrousel/CarousselMonster";
import CarousselMonsterMobile from "../../Components/Carrousel/CarousselMonsterMobile";

const HomePage = () => {
    const [isMobile, setIsMobile] = useState(false);
    const { t } = useTranslation();

    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint value as per your design
        };

        checkIsMobile();

        window.addEventListener('resize', checkIsMobile);

        return () => {
            window.removeEventListener('resize', checkIsMobile);
        };
    }, []);

    return(
        <>
            <NavBar />
            <div className='containerHome'>
                <BannerAcceuil />
                <div className='containerPage'>
                    <div className='containerpageleverFond'>
                        <div className='containerRight'>
                            <div className='containRight'>
                                <h1 className='titleContainerRight'>{t('homepage.title')}</h1>
                                <p className='TextLeverdefond'>{t('homepage.introText')}</p>
                                <ContainerLeverDefond percentage={10}/>
                            </div>
                        </div>
                        <div className='containerLeft'>
                            <img className='logoPageleverFond' src={logo} alt='logo'/>
                            <p className='TextLeverdefond'>{t('homepage.warningText')}</p>
                            <img className='logoPageleverFond' src={arkanys} alt='logo'/>
                        </div>
                    </div>
                </div>
                <BannerModeJeu/>
                <div className='carrouselleContainer'>
                    <h1 className='carrouselTitlePage'>{t('homepage.heroesTitle')}</h1>
                    <Caroussel items={heroes} type="heroes" />
                </div>
                {isMobile ? (
                    <CarousselMonsterMobile />
                ) : (
                    <CarousselMonster />
                )}
                <div className='test'>
                    <div className='carrouselleContainer'>
                        <h1 className='carrouselTitlePage'>{t('homepage.towersTitle')}</h1>
                        <Caroussel items={tower} type="tower" />
                    </div>
                    <div className='carrouselleContainer'>
                        <h1 className='carrouselTitlePage'>{t('homepage.skillsTitle')}</h1>
                        <Caroussel items={skill} type="skill" />
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default HomePage;
