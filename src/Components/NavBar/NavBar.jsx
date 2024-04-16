import React, { useState } from "react";
import { HashLink as Link } from 'react-router-hash-link';
import './NavBarStyles.scss';
import logoArcanys from "../../ASSETS/Images/Logo/logo arcanys.png";
import '../../i18n'; // Assure-toi que ce fichier est importé avant tes composants

import { useTranslation } from 'react-i18next';

const NavBar = () => {
    const currentPath = window.location.pathname;
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    return (
        <>
            <header>
                <div className='NavBar'>
                    <div className='container-logo-title'>
                        <div className='logo'>
                            <Link to="/">
                                <img className='logoImages' src={logoArcanys} alt='Logo Arcanys'/>
                            </Link>
                        </div>
                    </div>

                    <div className={`buttonLink ${isMenuOpen ? 'open' : ''}`}>
                        <Link to="/" className={`HeaderLink ${currentPath === '/' ? 'active' : ''}`}>{t('navBar.home')}</Link>
                        <Link to="/#modeDeJeux" className={`HeaderLink ${currentPath === '/' ? 'active' : ''}`}>{t('navBar.gameModes')}</Link>
                        <Link to="/roadmap" className={`HeaderLink ${currentPath === '/roadmap' ? 'active' : ''}`}>{t('navBar.roadmap')}</Link>
                        <Link to="/lever-de-fond" className={`HeaderLink ${currentPath === '/lever-de-fond' ? 'active' : ''}`}>{t('navBar.fundraising')}</Link>
                        <Link to="/contact" className={`HeaderLink ${currentPath === '/contact' ? 'active' : ''}`}>{t('navBar.contact')}</Link>
                        <Link to="/Faq" className={`HeaderLink ${currentPath === '/contact' ? 'active' : ''}`}>{t('navBar.faq')}</Link>
                        <a href="https://arkanys.gitbook.io/white-paper/" className='HeaderLink'>{t('navBar.whitePaper')}</a>
                        <button onClick={() => changeLanguage('fr')} className="lang-btn">FR</button>
                        <button onClick={() => changeLanguage('en')} className="lang-btn">EN</button>
                    </div>

                    <div className={`mobile-menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                                <path fill="#FFF" d="M12 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414L13.414 12l3.293 3.293a1 1 0 1 1-1.414 1.414L12 13.414l-3.293 3.293a1 1 0 0 1-1.414-1.414L10.586 12 7.293 8.707a1 1 0 0 1 1.414-1.414L12 10.586z" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                                <path fill="#FFF" d="M6 8h12v2H6zm0 4h12v2H6zm0 4h12v2H6z" />
                            </svg>
                        )}
                    </div>
                </div>
            </header>
        </>
    );
}

export default NavBar;
