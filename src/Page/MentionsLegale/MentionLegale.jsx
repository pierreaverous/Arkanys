import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../i18n'; // Assure-toi que ce fichier est importé avant tes composants
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import './MentionLegale.scss';

const MentionLegale = () => {
    const { t } = useTranslation();

    return (
        <>
            <NavBar/>
            <div className="legal-notice-container">
                <h2>{t('legalNotice.pageTitle')}</h2>
                <p>{t('legalNotice.introduction')}</p>
                <h3>{t('legalNotice.headOfficeTitle')}</h3>
                <address>
                    {t('legalNotice.headOfficeAddress').split('\n').map((line, index) => (
                        <React.Fragment key={index}>
                            {line}<br/>
                        </React.Fragment>
                    ))}
                </address>
                <p>{t('legalNotice.companyInfo')}</p>
                <p>{t('legalNotice.registrationInfo')}</p>
                <p>{t('legalNotice.vatNumber')}</p>
                <p>{t('legalNotice.email')}</p>
                <p>{t('legalNotice.phoneNumber')}</p>
                <p>{t('legalNotice.hostingProvider')}</p>
            </div>
            <Footer/>
        </>
    );
};

export default MentionLegale;
