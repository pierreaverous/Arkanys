import React from 'react';
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import './PolitiqueDeconfidentialite.scss'

const PolitiqueConfi = () => {
    return (
        <>
            <NavBar/>

            <div className="privacy-policy-container">
                <h2>Politique de Confidentialité</h2>

                <h3>Introduction</h3>
                <p>Nous attachons une grande importance à la protection de la vie privée de nos utilisateurs. Cette politique décrit comment nous collectons, utilisons, conservons et divulguons vos informations personnelles.</p>

                <h3>Collecte d'informations</h3>
                <p>Nous collectons des informations lorsque vous vous inscrivez sur notre site, passez une commande ou participez à d'autres activités sur notre site.</p>
                <p>Les informations collectées peuvent inclure votre nom, adresse e-mail, numéro de téléphone, etc.</p>

                <h3>Utilisation des informations</h3>
                <p>Les informations que nous collectons peuvent être utilisées pour :</p>
                <ul>
                    <li>Personnaliser votre expérience et répondre à vos besoins individuels.</li>
                    <li>Améliorer notre site Web.</li>
                    <li>Améliorer le service client et vos besoins de prise en charge.</li>
                    <li>Vous contacter par e-mail.</li>
                </ul>

                <h3>La technologie blockchain et vos données</h3>
                <p>NFT. La technologie Blockchain (ou chaîne de blocs) est au cœur des Services que Sorare fournit. Nos Cartes à Collectionner reposent sur cette technologie sous forme de jetons non fongibles (“NFT” ou “JNF” en français) émis par Arkanys et qui permettent d’assurer l'authenticité, la rareté et l'interopérabilité de vos NFT utilitaires.</p>
                <p>Layer 2 et ImmutableX. Pour vous offrir la meilleure expérience possible, Arkanys utilise la technologie ImmutableX afin de bâtir une infrastructure de deuxième niveau (“Layer 2”) reposant sur une solution de scalabilité de couche 2 construite sur la blockchain Ethereum. Elle permet de résoudre les problèmes de coût et de rapidité des transactions, deux aspects cruciaux pour le succès d'un projet basé sur les NFTs. Grâce à l'utilisation des Zero-Knowledge (ZK) Rollups, les utilisateurs peuvent échanger leurs NFTs sans payer de frais de gaz, ce qui réduit considérablement les coûts de transaction. Cette infrastructure permet à Arkanys de bénéficier d’un second niveau complémentaire de la blockchain publique Ethereum de niveau</p>
                <p>Vos données. Votre clé publique de portefeuille et les informations relatives à vos achats, transferts, retraits et échanges de Cartes à Collectionner sont stockées sur notre serveur qui fournit le second niveau décrit ci-dessus et par notre comité de disponibilité des données dont les membres assurent la sauvegarde de ces informations et sont soumis à des obligations de confidentialité strictes. Aucune donnée personnelle de nos Utilisateurs n'est stockée par Arkanys sur la blockchain publique Ethereum. Toutefois, veuillez noter que si vous retirez vos fonds ou une Carte à Collectionner de la plateforme Arkanys (par exemple pour les transférer vers un autre service ou vers un autre portefeuille externe), ce transfert impliquera le stockage des informations liées à ce transfert sur une blockchain publique. Tous les transferts vers des portefeuilles externes sont soumis à la politique de confidentialité et/ou aux conditions de service du service tiers concerné, veillez à consulter les politiques et pratiques de confidentialité des tiers concernés avant de procéder à ce transfert. Comme indiqué dans nos conditions générales, Arkanys ne sera pas tenu responsable du contenu ou du service d'un tiers et décline toute responsabilité pour tous les services fournis à un utilisateur par un fournisseur de services tiers.</p>
                <p>La base légale de ce traitement est contractuelle. La blockchain est au cœur de nos services. Ces technologies permettent à Arkanys d’assurer l’authenticité, la rareté et l’interopérabilité de vos Cartes à Collectionner.</p>

                <h3>Confidentialité du commerce en ligne</h3>
                <p>Nous sommes les seuls propriétaires des informations recueillies sur ce site. Vos informations personnelles ne seront pas vendues, échangées, transférées ou données à une autre entreprise pour n'importe quelle raison, sans votre consentement.</p>

                <h3>Divulgation à des tiers</h3>
                <p>Nous ne vendons, n'échangeons et ne transférons pas vos informations personnelles identifiables à des tiers. Cela ne comprend pas les partenaires de confiance qui nous aident à exploiter notre site Web ou à mener nos affaires, tant que ces parties conviennent de garder ces informations confidentielles.</p>

                <h3>Protection des informations</h3>
                <p>Nous mettons en œuvre une variété de mesures de sécurité pour préserver la sécurité de vos informations personnelles.</p>

                <h3>Cookies</h3>
                <p>Nos cookies améliorent l'accès à notre site et identifient les visiteurs réguliers. De plus, nos cookies améliorent l'expérience de l'utilisateur en suivant et en ciblant ses intérêts. Cependant, cette utilisation des cookies n'est en aucune façon liée à des informations personnelles identifiables sur notre site.</p>

                <h3>Consentement</h3>
                <p>En utilisant notre site, vous consentez à notre politique de confidentialité.</p>

                <h3>Conditions d'utilisation :</h3>
                <p>Conditions générales :</p>
                <p>En utilisant notre site, vous acceptez les conditions d'utilisation de notre politique de confidentialité.</p>

                <h3>Utilisation des informations :</h3>
                <p>Tout le contenu inclus ou disponible sur ce site, y compris les sites, images, graphiques, logos, icônes, textes et compilations, est la propriété de EJ INVEST. et est protégé par des droits d'auteur internationaux.</p>

                <h3>Limitations :</h3>
                <p>Nous ne sommes pas responsables des erreurs typographiques ou des inexactitudes affichées sur ce site Web.</p>
            </div>

            <Footer/>
        </>
    );
};

export default PolitiqueConfi