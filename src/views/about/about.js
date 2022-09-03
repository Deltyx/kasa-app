import './about.scss'

import About_Banner from '../../img/about_banner.png'

import Banner from '../../components/banner/banner.js'
import Dropdown from '../../components/dropdown/dropdown'

export default function Home() { 
    return (
        <div className='about-container'>
            <Banner img={About_Banner} title=""/>
            <Dropdown style="dropdown-container-wide" title="Fiabilité" content=""/>
            <Dropdown style="dropdown-container-wide" title="Respect" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
            <Dropdown style="dropdown-container-wide" title="Service" content=""/>
            <Dropdown style="dropdown-container-wide"title="Responsabilité" content=""/>
        </div>
    )
}