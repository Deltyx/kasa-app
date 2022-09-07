import './about.scss'

import About_Banner from '../../img/about_banner.png'

import Banner from '../../components/banner/banner.js'
import Dropdown from '../../components/dropdown/dropdown'

export default function Home() { 
    return (
        <div className='about-container'>
            <Banner img={About_Banner} title=""/>
            <Dropdown style="dropdown-container-wide" title="Fiabilité" 
            content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, 
            et toutes les informations sont régulièrement vérifiées par nos équipes"/>
            <Dropdown style="dropdown-container-wide" title="Respect" 
            content="La bienveillance fait partie des valeurs fondatrices de Kasa. 
            Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
            <Dropdown style="dropdown-container-wide" title="Service" 
            content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite.
            N'hésitez pas à nous contacter si vous avez la moindre question."/>
            <Dropdown style="dropdown-container-wide"title="Responsabilité" 
            content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. 
            En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. 
            Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."/>
        </div>
    )
}