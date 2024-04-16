import React from "react";
import { useTranslation } from 'react-i18next';
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import ContainerLeverDefond from "../../Components/componentsPageLeverDeFond/containerLeverdefond/containerLeverDefond";
import './PageleverdefondStyle.scss'
import logo from '../../ASSETS/Images/Logo/logo arcanys.png'
import arkanys from '../../ASSETS/Images/Logo/arkanys.png'
import allocPrivate from '../../ASSETS/Images/ImgLeverFond/PrivateSale.png'
import allocIno from '../../ASSETS/Images/ImgLeverFond/INO.png'
import allocseed from '../../ASSETS/Images/ImgLeverFond/Sedd.png'

const LeverdeFondPage = () => {
    const { t } = useTranslation();

    return(
        <>
            <NavBar/>
            <div className='containerPage'>
                <div className='containerpageleverFond'>
                    <div className='containerRight'>
                        <div className='containRight'>
                            <h1 className='titleContainerRight'>{t('fundraisingPage.title')}</h1>
                            <p className='TextLeverdefond'>{t('fundraisingPage.introText')}</p>
                            <ContainerLeverDefond percentage={10}/>
                        </div>

                    </div>
                    <div className='containerLeft'>
                        <img className='logoPageleverFond' src={logo} alt='logo'/>
                        <p className='TextLeverdefond'>{t('fundraisingPage.warningText')}</p>
                        <img className='logoPageleverFond' src={arkanys} alt='logo'/>
                    </div>
                </div>
            </div>
            <div className='containerPage'>
                <h1 className='titleContainerRightAlloc'>{t('fundraisingPage.seedTitle')}</h1>
                <div className='containerpageleverFondAlloc'>
                    <div className='containerRight'>
                        <div className='containRight'>
                            <ContainerLeverDefond percentage={90}/>
                        </div>
                    </div>
                    <div className='containerLeft'>
                        <img className='allocPageleverFond' src={allocseed} alt='Seed stage'/>
                    </div>
                </div>
            </div>
            <div className='containerPage'>
                <h1 className='titleContainerRightAlloc'>{t('fundraisingPage.inoTitle')}</h1>
                <div className='containerpageleverFondAlloc'>
                    <div className='containerRight'>
                        <div className='containRight'>
                            <ContainerLeverDefond percentage={90}/>
                        </div>
                    </div>
                    <div className='containerLeft'>
                        <img className='allocPageleverFond' src={allocIno} alt='INO'/>
                    </div>
                </div>
            </div>
            <div className='containerPage'>
                <h1 className='titleContainerRightAlloc'>{t('fundraisingPage.privateSaleTitle')}</h1>
                <div className='containerpageleverFondAlloc'>
                    <div className='containerRight'>
                        <div className='containRight'>
                            <ContainerLeverDefond percentage={90}/>
                        </div>
                    </div>
                    <div className='containerLeft'>
                        <img className='allocPageleverFond' src={allocPrivate} alt='Private Sale'/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default LeverdeFondPage;
