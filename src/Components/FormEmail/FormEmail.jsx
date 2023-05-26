import './FormEmailStyles.scss'
import emailjs from 'emailjs-com';
import logo from '../../ASSETS/Images/Logo/logo arcanys.png'
import React, { useState } from 'react';
function ContactForm() {
    const [alertMessage, setAlertMessage] = useState('');
    function handleSubmit(event) {
        event.preventDefault();

        emailjs.sendForm('service_1mk55gb', 'template_3klapii', event.target, 'doGzWGUw06xrtZkbB')
            .then((result) => {
                alert('E-mail envoyé avec succès!');
                console.log(result.text);
                window.location.reload();
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <div className='containerEmail'>
            <h2 className='titleEmail'> Nous contacter</h2>
            <div className='containerEmailService'>
                <div className='containerImage'>
                    <img className='imageCarte' src={logo} alt='cartes'/>
                    <p className='textEmailFooter'>Téléphone: +33.6.13.80.05.04</p>
                    <p className='textEmailFooter'>Addresse: 2027 chemin de exemple</p>
                </div>

                <form onSubmit={handleSubmit}>
                    <label>
                        <p>Nom:</p>
                        <input type="text" name="user_name" />
                    </label>
                    <label>
                        <p>Email:</p>
                        <input type="email" name="user_email" />
                    </label>
                    <label>
                        <p>Telephone:</p>
                        <input type="tel" name="user_tel" />
                    </label>
                    <label>
                        <p>Message:</p>
                        <textarea  className='labelMessage' name="message" />
                    </label>
                    <button type="submit">Envoyer</button>
                </form>
                {alertMessage && <p>{alertMessage}</p>}
            </div>

        </div>
    );
}
export default ContactForm