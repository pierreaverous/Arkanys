import React from 'react';
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import './MentionLegale.scss'
const MentionLegale = () => {
    return (
        <>
            <NavBar/>

            <div className="legal-notice-container">
                <h2>Mentions légales :</h2>
                <p>Le site Arkanys.io est exploité par EJ INVEST :</p>

                <h3>Siège social :</h3>
                <address>
                    EJ INVEST <br />
                    Rte de Gréasque <br />
                    13120 GARDANNE <br />
                    FRANCE <br />
                </address>

                <p>L'entreprise est une société par action simplifiée (SAS) créée conformément à la législation française, avec un capital social de 15 000 €.</p>
                <p>Société enregistrée au RCS d'AIX EN PROVENCE sous le numéro d'immatriculation 909 300 584 00010</p>
                <p>Numéro de TVA intracommunautaire : FR5809300584</p>
                <p>Adresse email : <a href="mailto:hello@arkanys.io">hello@arkanys.io</a></p>
                <p>Numéro de téléphone : XX XX XX XX XX</p>
                <p>Hébergeur : Ionos SARL</p>
            </div>

            <Footer/>
        </>
    );
};

export default MentionLegale;
