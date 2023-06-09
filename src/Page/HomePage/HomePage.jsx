import React, { useState, useEffect } from 'react';
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
// import CaroussellePouvoir from "../../Components/Carrousel/CarrouselSkill";



const HomePage = () => {
    const [isMobile, setIsMobile] = useState(false);

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
        <BannerAcceuil/>
          <div className='containerPage'>
              <div className='containerpageleverFond'>
                  <div className='containerRight'>
                      <div className='containRight'>
                          <h1 className='titleContainerRight'>ARKANYS - Un free-to-play, skill to earn made in France</h1>
                          <p className='TextLeverdefond'>Arkanys est un univers de jeux blockchain combinant plusieurs modes inspirés des meilleurs jeux vidéos. Il démocratise la blockchain, encourage la communauté à prendre des décisions et renforce l'engagement grâce à son token ARK$ et à sa DAO</p>
                          <ContainerLeverDefond percentage={10}/>
                      </div>
                  </div>
                  <div className='containerLeft'>
                      <img className='logoPageleverFond' src={logo} alt='logo'/>
                      <p className='TextLeverdefond'>⚠️Méfiez-vous des sites Web frauduleux et non autorisés, des médias sociaux ou des comptes de messagerie prétendant représenter Akanys. DeeLance n'assume aucune responsabilité pour les fausses déclarations et les dommages résultant de la tromperie délibérée perpétrée par des tiers frauduleux. Veuillez faire preuve de prudence à tout moment.
                          N'interagissez qu'avec des comptes DeeLance vérifiés.
                      </p>
                      <img  className='logoPageleverFond' src={arkanys} alt='logo'/>
                  </div>
              </div>
          </div>
        <BannerModeJeu/>
          <div className='carrouselleContainer'>
              <h1 className='carrouselTitlePage'> Nos Héros</h1>
              <Caroussel items={heroes} />
          </div>
          {isMobile ? (
              <CarousselMonsterMobile />
          ) : (
              <CarousselMonster />
          )}
          <div className='test'>
              <div className='carrouselleContainer'>
                  <h1 className='carrouselTitlePage'> Nos Tours de défense</h1>
                  <Caroussel items={tower} />
              </div>
              <div className='carrouselleContainer'>
                  <h1 className='carrouselTitlePage'> Nos Skill</h1>
                  <Caroussel items={skill} />
              </div>
          </div>


          <Footer/>
      </>

  )
}

export default HomePage;
