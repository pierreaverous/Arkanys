import React, { useState } from "react";
import './NavBarStyles.scss';
import { HashLink as Link } from 'react-router-hash-link';
import logoArcanys from "../../ASSETS/Images/Logo/logo arcanys.png";

const NavBar = () => {
    // Obtenez le chemin de l'URL actuelle
    const currentPath = window.location.pathname;

    // Ajout de l'état pour le menu déroulant
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <header>
                <div className='NavBar'>
                    <div className='container-logo-title'>
                        <div className='logo'>
                            <img className='logoImages' src={logoArcanys} alt='Logo Arcanys' />
                        </div>
                    </div>

                    <div className={`buttonLink ${isMenuOpen ? 'open' : ''}`}>
                        <Link to="/" className={`HeaderLink ${currentPath === '/' ? 'active' : ''}`}>ACCUEIL</Link>
                        <Link to="/#modeDeJeux" className={`HeaderLink ${currentPath === '/' ? 'active' : ''}`}>MODES DE JEU</Link>
                        <Link to="/roadmap" className={`HeaderLink ${currentPath === '/roadmap' ? 'active' : ''}`}>ROAD MAP</Link>
                        <Link to="/lever-de-fond" className={`HeaderLink ${currentPath === '/lever-de-fond' ? 'active' : ''}`}>LEVÉE DE FONDS</Link>
                        <Link to="/contact" className={`HeaderLink ${currentPath === '/contact' ? 'active' : ''}`}>CONTACT</Link>
                        <a href="https://arkanys.gitbook.io/white-paper/" className='HeaderLink'>WHITE PAPER</a>
                    </div>

                    {/* Bouton du menu déroulant */}
                    <div className='mobile-menu-icon' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? 'Close' : 'Menu'}
                    </div>
                </div>
            </header>
        </>
    )
}

export default NavBar;
