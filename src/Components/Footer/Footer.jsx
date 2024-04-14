import React from "react";
import { Link } from 'react-router-dom';
import './FooterStyles.scss';
import logo from '../../ASSETS/Images/Logo/logo arcanys.png';
import '../../i18n'; // Assure-toi que ce fichier est importé avant tes composants
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer>
            <div className='containerFooter'>
                <div className='containerMentions'>
                    <img src={logo} alt='logo Arkanys' />
                    <Link to="/MentionLégales" className='footerLink'>{t('footer.legalNotice')}</Link>
                    <Link to="/PolitiqueConfidentialite" className='footerLink'>{t('footer.privacyPolicy')}</Link>
                </div>
                <div className='containerMentions'>
                    <h2>{t('footer.contactUs')} :</h2>
                    <p>{t('footer.email')}</p>
                    <Link to="/contact" className='footerLink contactButton'>{t('footer.contactPage')}</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
