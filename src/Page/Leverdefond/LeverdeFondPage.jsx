import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import ContainerLeverDefond from "../../Components/componentsPageLeverDeFond/containerLeverdefond/containerLeverDefond";
import './PageleverdefondStyle.scss'
import logo from '../../ASSETS/Images/Logo/logo arcanys.png'
import arkanys from '../../ASSETS/Images/Logo/arkanys.png'
import allocPrivate from '../../ASSETS/Images/ImgLeverFond/PrivateSale.png'
import allocIno from '../../ASSETS/Images/ImgLeverFond/INO.png'
import allocseed from '../../ASSETS/Images/ImgLeverFond/Sedd.png'

const leverdeFondPage = () => {
    return(
        <>
            <NavBar/>
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
                        <p className='TextLeverdefond'>⚠️Méfiez-vous des sites Web frauduleux et non autorisés, des médias sociaux ou des comptes de messagerie prétendant représenter Arkanys. Arkanys n'assume aucune responsabilité pour les fausses déclarations et les dommages résultant de la tromperie délibérée perpétrée par des tiers frauduleux. Veuillez faire preuve de prudence à tout moment.
                            N'interagissez qu'avec des comptes Arkanys vérifiés.
                        </p>
                        <img  className='logoPageleverFond' src={arkanys} alt='logo'/>
                    </div>
                </div>
            </div>
            <div className='containerPage'>
                <h1 className='titleContainerRightAlloc'>ARKANYS - SEED</h1>
                <div className='containerpageleverFondAlloc'>
                    <div className='containerRight'>
                        <div className='containRight'>

                            <ContainerLeverDefond percentage={90}/>
                        </div>
                    </div>
                    <div className='containerLeft'>
                        <img className='allocPageleverFond' src={allocseed} alt='logo'/>

                    </div>
                </div>
            </div>
            <div className='containerPage'>
                <h1 className='titleContainerRightAlloc'>ARKANYS - INO</h1>
                <div className='containerpageleverFondAlloc'>
                    <div className='containerRight'>
                        <div className='containRight'>

                            <ContainerLeverDefond percentage={90}/>
                        </div>
                    </div>
                    <div className='containerLeft'>
                        <img className='allocPageleverFond' src={allocIno} alt='logo'/>

                    </div>
                </div>
            </div> <div className='containerPage'>
            <h1 className='titleContainerRightAlloc'>ARKANYS - PRIVATE SALE + ICO </h1>
            <div className='containerpageleverFondAlloc'>
                <div className='containerRight'>
                    <div className='containRight'>

                        <ContainerLeverDefond percentage={90}/>
                    </div>
                </div>
                <div className='containerLeft'>
                    <img className='allocPageleverFond' src={allocPrivate} alt='logo'/>

                </div>
            </div>
        </div>
            <Footer/>
        </>
    )
}

export default leverdeFondPage