import React from "react";
import { Link } from 'react-router-dom';
import './FooterStyles.scss';


const Footer = () => {

    return(
        <footer className='containerFooter'>
            <div>
                <h2>Nous contacter :</h2>
                <p>Email : exemple@exemple.com</p>
                <p>Téléphone : +33 1 23 45 67 89</p>
                <Link to="/contact" className='footerLink contactButton'>Page Contact</Link>
            </div>
        </footer>
    )
}

export default Footer