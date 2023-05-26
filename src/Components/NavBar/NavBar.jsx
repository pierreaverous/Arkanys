import React from "react";
import './NavBarStyles.scss';
import { HashLink as Link } from 'react-router-hash-link';
import logoArcanys from "../../ASSETS/Images/Logo/logo arcanys.png";

const NavBar = () => {
    // Obtenez le chemin de l'URL actuelle
    const currentPath = window.location.pathname;

    return (
        <>
            <header>
                <div className='NavBar'>
                    <div className='container-logo-title'>
                        <div className='logo'>
                            <img className='logoImages' src={logoArcanys} alt='Logo Arcanys' />
                        </div>
                    </div>

                    <div className='buttonLink'>
                        <Link to="/" className={`HeaderLink ${currentPath === '/' ? 'active' : ''}`}>ACCUEIL</Link>
                        <Link to="/#modeDeJeux" className={`HeaderLink ${currentPath === '/' ? 'active' : ''}`}>MODES DE JEU</Link>
                        <Link to="/roadmap" className={`HeaderLink ${currentPath === '/roadmap' ? 'active' : ''}`}>ROAD MAP</Link>
                        <Link to="/lever-de-fond" className={`HeaderLink ${currentPath === '/lever-de-fond' ? 'active' : ''}`}>LEVÉE DE FONDS</Link>
                        <Link to="/contact" className={`HeaderLink ${currentPath === '/contact' ? 'active' : ''}`}>CONTACT</Link>
                        <a href="https://arkanys.gitbook.io/white-paper/" className='HeaderLink'>WHITE PAPER</a>
                    </div>
                </div>
            </header>
        </>
    )
}

export default NavBar;
