import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../i18n'; // Assure-toi que ce fichier est importé avant tes composants

import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import './PolitiqueDeconfidentialite.scss';

const PolitiqueConfi = () => {
    const { t } = useTranslation();

    return (
        <>
            <NavBar/>

            <div className="privacy-policy-container">
                <h2>{t('privacyPolicy.pageTitle')}</h2>

                <h3>{t('privacyPolicy.introductionTitle')}</h3>
                <p>{t('privacyPolicy.introductionText')}</p>

                <h3>{t('privacyPolicy.collectionTitle')}</h3>
                <p>{t('privacyPolicy.collectionText')}</p>

                <h3>{t('privacyPolicy.useTitle')}</h3>
                <ul>
                    {t('privacyPolicy.useText', { returnObjects: true }).map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>

                <h3>{t('privacyPolicy.blockchainTitle')}</h3>
                <p>{t('privacyPolicy.blockchainText')}</p>

                <h3>{t('privacyPolicy.onlinePrivacyTitle')}</h3>
                <p>{t('privacyPolicy.onlinePrivacyText')}</p>

                <h3>{t('privacyPolicy.thirdPartyDisclosureTitle')}</h3>
                <p>{t('privacyPolicy.thirdPartyDisclosureText')}</p>

                <h3>{t('privacyPolicy.infoProtectionTitle')}</h3>
                <p>{t('privacyPolicy.infoProtectionText')}</p>

                <h3>{t('privacyPolicy.cookiesTitle')}</h3>
                <p>{t('privacyPolicy.cookiesText')}</p>

                <h3>{t('privacyPolicy.consentTitle')}</h3>
                <p>{t('privacyPolicy.consentText')}</p>
            </div>

            <Footer/>
        </>
    );
};

export default PolitiqueConfi;
