import briseLame from '../../ASSETS/Images/HerosARKANYS/briseLame.png';
import celeste from '../../ASSETS/Images/HerosARKANYS/celeste.png';
import ramedo from '../../ASSETS/Images/HerosARKANYS/RAMEDO.png';
import ombrage from '../../ASSETS/Images/HerosARKANYS/Ombrage.png';
import nicedem from '../../ASSETS/Images/HerosARKANYS/NICEDEM.png';
import gardien from '../../ASSETS/Images/HerosARKANYS/gardien.png'
import bellier from '../../ASSETS/Images/Monstre/Bellier.png';
import chevre from '../../ASSETS/Images/Monstre/Chevaucheuse de Chevre.png';
import colosse from '../../ASSETS/Images/Monstre/COLOSSE.png';
import dragounet from '../../ASSETS/Images/Monstre/dragounetglace.png';
import drogon from '../../ASSETS/Images/Monstre/DROGON.png';
import ekipic from '../../ASSETS/Images/Monstre/EKIPIC.png';
import floragide from '../../ASSETS/Images/Monstre/FLORAGIDE.png';
import gelatin from '../../ASSETS/Images/Monstre/GELATIN.png';
import gobelin from '../../ASSETS/Images/Monstre/GOBELINS VOLANTS.png';
import gribouille from '../../ASSETS/Images/Monstre/GRIBOUILLE.png';
import guepi from '../../ASSETS/Images/Monstre/GUEPI.png';
import horde from '../../ASSETS/Images/Monstre/horde scintilou.png';
import rochelame from '../../ASSETS/Images/Monstre/Rochelame.png';
import scorbut from '../../ASSETS/Images/Monstre/SCORBUT.png';
import aspirine from '../../ASSETS/Images/Tower/aspirine.png'
import canon from '../../ASSETS/Images/Tower/CANON.png'
import glacier from '../../ASSETS/Images/Tower/GLACIER.png'
import tourelle from '../../ASSETS/Images/Tower/tourelle.png'
import poisonier from '../../ASSETS/Images/Tower/POISONIER.png'
import ampoule from '../../ASSETS/Images/Tower/AMPOULE.png'
import epine from "../../ASSETS/Images/skill/epine.png";
import fortLevant from "../../ASSETS/Images/skill/fortLevant.png";
import soins from "../../ASSETS/Images/skill/soins.png";
import Ombre from "../../ASSETS/Images/skill/Ombre.png";
import zap from "../../ASSETS/Images/skill/zap.png";


export const heroes = [
    {
        title: 'Brise Lame',
        img: briseLame,
        text: 'Ce guerrier audacieux et intrépide se spécialise dans les attaques puissantes et les dégâts de zone.',
    },
    {
        title: 'Celeste',
        img: celeste,
        text: 'Un mage défensif qui invoque des barrières pour protéger ses alliés et contrôler le champ de bataille.',
    },
    {
        title: 'Ramedo',
        img: ramedo,
        text: 'Un puissant sorcier qui manipule le temps pour ralentir les ennemis, accélérer les alliés et infliger des dégâts à distance.',
    },
    {
        title: 'Ombrage',
        img: ombrage,
        text: 'Un assassin discret et mortel qui se déplace furtivement pour infliger de lourds dégâts aux ennemis imprudents.',
    },
    {
        title: 'Nicedem',
        img: nicedem,
        text: 'Un soigneur agile qui utilise les pouvoirs des vents pour soigner ses alliés et attaquer ses ennemis à distance.',
    },
    {
        title: 'Gardien de la fôret',
        img: gardien,
        text: 'Le Gardien de la Forêt est un héros mystique qui contrôle la nature pour protéger ses alliés et affaiblir ses ennemis.',
    },
];

export const Monster = [
    {
        title: 'BELLIER',
        img:bellier ,
        text: 'bélier massif est équipé d\'une armure lourde et d\'une tête en forme de bélier, utilisée pour démolir les tours et les défenses ennemies.',
    },
    {
        title: 'CHEVAUCHEUSE DE CHEVRE',
        img: chevre,
        text: 'Armée d\'une lance puissante, elle attaque aussi bien à distance qu\'au corps à corps.',
    },
    {
        title: 'COLOSSE',
        img: colosse,
        text: 'Géant de pierre concentrée uniquement sur la destruction des tours et des défenses ennemies.',
    },
    {
        title: 'DRAGONNET DE GLACE',
        img: dragounet,
        text: 'Petit dragon volant qui attaque les ennemis au sol et dans les airs en crachant des boules de glace.',
    },
    {
        title: 'DROGON',
        img: drogon,
        text: 'Fonce sur les tours et les défenses ennemies avec une vitesse fulgurante. Il est insensible aux attaques des unités terrestres et se concentre exclusivement sur les structures.',
    },
    {
        title: 'EKIPIC',
        img: ekipic,
        text: 'Agile et résistant, cet étonnant monstre est capable de renvoyer les dégâts à ses adversaires grâce à un mécanisme de défense unique.',
    },
    {
        title: 'FLORAGIDE',
        img:floragide,
        text: 'Plante humanoïde capable de lancer des attaques à distance et de soigner les alliés proches.',
    },
    {
        title: 'GELATIN',
        img: gelatin,
        text: 'Créature gélatineuse et lente qui absorbe une partie des dégâts reçus.',
    },
    {
        title: 'GOBELIN VOLANT',
        img: gobelin,
        text: 'Duo de créatures volantes rapides et agiles qui attaquent les ennemis au sol et dans les airs.',
    },
    {
        title: 'GRIBOUILLE',
        img: gribouille,
        text: 'Chat lumineux et rapide, doté d\'une capacité de camouflage temporaire..',
    },
    {
        title: 'GUEPI',
        img: guepi,
        text: 'Créature volante redoutable qui attaque les unités ennemies, y compris les autres unités aériennes.',
    },
    {
        title: 'HORDE SCINTILOU',
        img: horde,
        text: 'Quatuor de petits oiseaux volant rapide, lançant des mini-éclairs sur ses ennemis.',
    },
    {
        title: 'ROCHELAME',
        img: rochelame,
        text: 'Petit golem de pierre robuste et puissant, doté d\'une attaque de zone.',
    },
    {
        title: 'SCORBUT',
        img: scorbut,
        text: 'Scorpion enflammé, rapide et agile, infligeant des dégâts de feu sur la durée.',
    },
];
export const tower = [
    {
        title: 'Aspirine',
        img: aspirine,
        text: 'Tour de défense qui soigne les alliés proches lorsqu\'elle n\'est pas en train d\'attaquer.',
    },
    {
        title: 'Canon',
        img: canon,
        text: 'Tour de défense classique qui tire des projectiles sur les ennemis terrestres.',
    },
    {
        title: 'Glacier',
        img: glacier,
        text: 'Tour de défense qui tire des projectiles glacés, ralentissant les ennemis touchés.',
    },
    {
        title: 'Poisonier',
        img: poisonier,
        text: 'Tour de défense qui tire des fioles empoisonnés, infligeant des dégâts sur la durée aux ennemis touchés.',
    },
    {
        title: 'Tourelle',
        img: tourelle,
        text: 'Tour de défense classique qui tire des projectiles sur les ennemis terrestres et aériens.',
    },{
        title: 'Ampoule',
        img: ampoule,
        text: 'Tour de défense électrique qui inflige des dégâts en chaîne aux ennemis proches.²',
    },
];

export const  skill = [
    {
        title: "Eclat d'épines",
        img: epine,
        text: "Crée un tourbillon d'épines sur le champ de bataille, infligeant des dégâts aux ennemis qui le traversent.",
    },
    {
        title: "Fort Levant",
        img: fortLevant,
        text: "Érige un mur de glace sur le champ de bataille, bloquant les attaques ennemies et ralentissant les unités qui le traversent.",
    },
    {
        title: "Soins",
        img: soins,
        text: "Invoque une vague d'énergie purificatrice qui soigne les alliés dans la zone d'effet.",
    },
    {
        title: "Ombre",
        img: Ombre,
        text: "Rend les troupes ciblées invisibles pendant un court laps de temps, évitant ainsi les attaques ennemies.",
    },
    {
        title: "Zap",
        img: zap,
        text: "Electrocute un ennemi créant une chaîne d'électrocution aux troupes les plus proches.",
    },
];

