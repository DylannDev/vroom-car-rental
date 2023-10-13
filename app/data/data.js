/* eslint-disable react/no-unescaped-entities */
import {
  PiTimerLight,
  PiMapPinLight,
  PiFilesLight,
  PiCarLight,
  PiHouseLight,
  PiStarLight,
  PiQuestionLight,
  PiPencilLineLight,
} from "react-icons/pi";
import { FaGooglePlay, FaApple } from "react-icons/fa6";
import Link from "next/link";

export const navBarPhoneInfos = [
  {
    link: "Accueil",
    icon: <PiHouseLight className="text-xl" />,
    href: "/",
  },
  {
    link: "Nos Véhicules",
    icon: <PiCarLight className="text-xl" />,
    href: "/vehicules",
  },
  {
    link: "Avis",
    icon: <PiStarLight className="text-xl" />,
    href: "/avis",
  },
  {
    link: "Aide",
    icon: <PiQuestionLight className="text-xl" />,
    href: "/aide",
  },
  {
    link: "Contact",
    icon: <PiPencilLineLight className="text-xl" />,
    href: "/contact",
  },
];

export const logosImg = [
  "/audi-logo.png",
  "/bmw-logo.png",
  "/mercedes-logo.png",
  "/seat-logo.png",
  "/tesla-logo.png",
  "/volkswagen-logo.png",
];

export const argumentsInfos = [
  {
    title: "La location comme vous l’aimerez",
    paragraph:
      "Sans contact, sans attente. Avec annulation gratuite, support client et accès aux véhicules 24/7, prolongation facile et plus encore. À la demande.",
  },
  {
    title: "Mieux qu’une voiture individuelle",
    paragraph:
      "La flexibilité d’une gamme complète de voitures sans les tracas de l'assurance, de l'entretien, du stationnement, etc. Plus pratique pour vous, mieux pour votre ville.",
  },
];

export const carInfos = [
  {
    carModel: "Audi S3",
    pricePerDay: 64,
    gearBox: "Automatique",
    seats: "5 places",
    carTrunk: "4 bagages",
    carType: "Thermique",
    image: "/audi-s3.png",
  },
  {
    carModel: "Audi A1",
    pricePerDay: 48,
    gearBox: "Manuelle",
    seats: "4 places",
    carTrunk: "3 bagages",
    carType: "Electrique",
    image: "/audi-a1.png",
  },
  {
    carModel: "Audi Q5",
    pricePerDay: 82,
    gearBox: "Automatique",
    seats: "5 places",
    carTrunk: "5 bagages",
    carType: "Thermique",
    image: "/audi-q5.png",
  },
  {
    carModel: "VW Golf",
    pricePerDay: 59,
    gearBox: "Manuelle",
    seats: "5 places",
    carTrunk: "3 bagages",
    carType: "Thermique",
    image: "/golf-gti.png",
  },
  {
    carModel: "VW Polo",
    pricePerDay: 38,
    gearBox: "Automatique",
    seats: "5 places",
    carTrunk: "3 bagages",
    carType: "Thermique",
    image: "/volkswagen-polo.png",
  },
  {
    carModel: "VW Tiguan",
    pricePerDay: 74,
    gearBox: "Automatique",
    seats: "5 places",
    carTrunk: "5 bagages",
    carType: "Thermique",
    image: "/volkswagen-tiguan.png",
  },
  {
    carModel: "Seat Ibiza",
    pricePerDay: 54,
    gearBox: "Automatique",
    seats: "5 places",
    carTrunk: "5 bagages",
    carType: "Thermique",
    image: "/seat-ibiza.png",
  },
  {
    carModel: "Seat Ateca",
    pricePerDay: 68,
    gearBox: "Automatique",
    seats: "7 places",
    carTrunk: "5 bagages",
    carType: "Electrique",
    image: "/seat-ateca.png",
  },
];

export const location = [
  "Paris",
  "Lyon",
  "Marseille",
  "Bordeaux",
  "Toulouse",
  "Montpellier",
];

const iconStyle = { color: "#fff ", fontSize: "22px" };

export const conceptInfos = [
  {
    icon: <PiTimerLight style={iconStyle} />,
    paragraph:
      "Finie l’attente au comptoir, déverrouillez votre voiture avec l'app",
  },
  {
    icon: <PiFilesLight style={iconStyle} />,
    paragraph:
      "Les formalités réglées une fois pour toutes à l’ouverture du compte",
  },
  {
    icon: <PiMapPinLight style={iconStyle} />,
    paragraph: "Accès à nos stations 24h/24, 7j/7, ou en livraison",
  },
  {
    icon: <PiCarLight style={iconStyle} />,
    paragraph: "Modèle de véhicule garanti et haut de gamme",
  },
];

const iconStyleGoogle = { color: "#fff ", fontSize: "30px" };
const iconStyleApple = { color: "#fff ", fontSize: "36px" };

export const storesInfos = [
  {
    icon: <FaApple style={iconStyleApple} />,
    paragraph: "l'App Store",
    rating1: 4.9,
    rating2: 7908,
  },
  {
    icon: <FaGooglePlay style={iconStyleGoogle} />,
    paragraph: "Google Play",
    rating1: 4.8,
    rating2: 5637,
  },
];

export const testimonialsInfos = [
  {
    source: "Vroom • FR",
    name: "Eric",
    testimonial: "Pas de paperasse à remplir, c'est génial !",
  },
  {
    source: "Vroom • FR",
    name: "Sonia",
    testimonial:
      "Simple, rapide, efficace. Le tout avec un véhicule de qualité à un super prix.",
  },
  {
    source: "Twitter • FR",
    name: "Peter",
    testimonial:
      "Enfin un service de location parfait ! Adieu les agences, le futur appartient à Vroom !",
  },
  {
    source: "Instagram • FR",
    name: "Marc",
    testimonial:
      "La prestation est d'une grande qualité et le service client archi réactif et très pro",
  },
  {
    source: "Vroom • FR",
    name: "Dylan",
    testimonial: "Récupérer la voiture à nimporte quelle heure, c'est TOP !",
  },
  {
    source: "Twitter • FR",
    name: "Sophia",
    testimonial:
      "Ce service de livraison et de reprise est fantastique. Vous faites une grosse différence par rapport à vos concurrents.",
  },
];

export const faqInfos = [
  {
    question: "Tout savoir sur une location de voiture avec Vroom",
    content: (
      <>
        <span>
          Réserver et utiliser une voiture de location n'a jamais été aussi
          facile avec Vroom. Voici un guide étape par étape sur le
          fonctionnement de notre expérience entièrement digitale :
        </span>
        <ul className="flex flex-col gap-4 my-6">
          <li>
            1. Inscription : Commencez par télécharger l'application Vroom.
            Inscrivez-vous en prenant rapidement un selfie et en photographiant
            à la fois le recto et le verso de votre permis de conduire.
          </li>
          <li>
            2.Réservation : Une fois inscrit, parcourez les véhicules
            disponibles et sélectionnez vos dates préférées et votre station.
          </li>
          <li>
            3. Clé Digitale : Oubliez les clés de voiture traditionnelles ! Avec
            Vroom, 12 heures avant le début de votre location, une clé digitale
            est disponible en téléchargement. Cela vous permet de déverrouiller
            et d'accéder à votre voiture de location via le Bluetooth. Aucune
            interaction physique n'est requise.
          </li>
          <li>
            4. État des lieux : Lorsque vous accédez à votre véhicule,
            l'application vous guidera à travers un rapport d’état des lieux.
            Cette procédure assure la transparence quant à l'état actuel de la
            voiture. Prenez quelques photos si nécessaire et assurez-vous que
            vous et Vroom êtes sur la même page concernant l’état du véhicule.
          </li>
          <li>
            5. Conduisez et profitez : Une fois toutes les formalités remplies,
            vous êtes prêt à prendre la route !
          </li>
          <li>
            6. Retour et état des lieux final : À la fin de votre voyage,
            retournez la voiture à la station d'origine. À l'aide de
            l'application, effectuez un rapport final pour confirmer l'état du
            véhicule à la suite de la location.
          </li>
          <li>
            7. Concluez la location : Une fois satisfait, verrouillez à l'aide
            de la clé numérique et mettez fin à votre réservation sur
            l'application. C'est aussi simple que ça !
          </li>
        </ul>
        <span>
          Vroom a tout simplement transformé le processus traditionnellement
          fastidieux de location de voiture en une expérience conviviale et
          facile à utiliser. Profitez du voyage !
        </span>
      </>
    ),
  },
  {
    question: "Les stations où nous sommes disponibles",
    content: (
      <>
        <span>
          Découvrez l'expérience de location de voiture sans faille de Vroom
          dans différentes villes de France ! Nous sommes disponibles dans les
          villes suivantes :
        </span>
        <ul className="list-disc list-inside my-6">
          <li>Paris</li>
          <li>Lyon</li>
          <li>Marseille</li>
          <li>Bordeaux</li>
          <li>Toulouse</li>
          <li>Montpellier</li>
        </ul>
        <span>
          Pour connaître nos empalcements dans ces villes, il vous suffit
          d'ouvrir l'application Vroom ou de visiter notre site Web. Que vous
          planifiiez un voyage d'affaires, une escapade d'un week-end ou des
          vacances prolongées, Vroom vous couvre dans toutes ces villes
          françaises.
        </span>
      </>
    ),
  },
  {
    question: "Laisser la voiture dans une autre station",
    content:
      "Actuellement, Vroom ne permet pas de prendre une voiture dans une ville et de la déposer dans une autre. Vous devez donc retourner le véhicule à l'endroit initial.",
  },
  {
    question: "Le kilométrage avec Vroom",
    content:
      "Avec Vroom, nous offrons un kilométrage de base inclus dans votre location. Vous avez la possibilité d'étendre ce kilométrage jusqu'à une certaine limite. Si vous dépassez cette limite en conduisant, vous serez facturé à un tarif plus élevé, notamment pour les véhicules électriques. Pour mieux comprendre les spécificités de ce forfait, consultez les conditions générales.",
  },
  {
    question: "Les moyens de paiement acceptés",
    content:
      "Nous acceptons la plupart des principales cartes de débit et de crédit, dont Visa, MasterCard et American Express. Cependant, veuillez noter que les cartes prépayées, comme Visa Electron, ne sont pas acceptées. De plus, nous prenons en charge Apple Pay et PayPal.",
  },
];
