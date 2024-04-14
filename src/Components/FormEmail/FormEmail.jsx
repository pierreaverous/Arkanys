import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import logo from '../../ASSETS/Images/Logo/logo arcanys.png';
import './FormEmailStyles.scss';
import '../../i18n'; // Assure-toi que ce fichier est importé avant tes composants

import { useTranslation } from 'react-i18next';

function ContactForm() {
    const { t } = useTranslation();
    const [alertMessage, setAlertMessage] = useState('');

    function handleSubmit(event) {
        event.preventDefault();

        emailjs.sendForm('service_1mk55gb', 'template_3klapii', event.target, 'doGzWGUw06xrtZkbB')
            .then((result) => {
                setAlertMessage(t('contactForm.successMessage'));
                console.log(result.text);
                setTimeout(() => {
                    window.location.reload();
                }, 2000); // Reload after 2 seconds
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div className='containerEmail'>
            <h2 className='titleEmail'>{t('contactForm.title')}</h2>
            <div className='containerEmailService'>
                <div className='containerImage'>
                    <img className='imageCarte' src={logo} alt='cartes' />
                </div>

                <form onSubmit={handleSubmit}>
                    <label>
                        <p>{t('contactForm.name')}</p>
                        <input type="text" name="user_name" />
                    </label>
                    <label>
                        <p>{t('contactForm.email')}</p>
                        <input type="email" name="user_email" />
                    </label>
                    <label>
                        <p>{t('contactForm.phone')}</p>
                        <input type="tel" name="user_tel" />
                    </label>
                    <label>
                        <p>{t('contactForm.message')}</p>
                        <textarea className='labelMessage' name="message" />
                    </label>
                    <button type="submit">{t('contactForm.sendButton')}</button>
                </form>
                {alertMessage && <p>{alertMessage}</p>}
            </div>
        </div>
    );
}

export default ContactForm;
