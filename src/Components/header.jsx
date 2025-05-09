import './header.css'
import GithubIcon from '../assets/Github-Icon.svg'
import LinkedinIcon from '../assets/Linkedin.svg'
import Relogio from './Relógio'
function Header () {
    return(
    <>
    <header>
    <Relogio/>
    <nav className='Nav'>
    <ul className='Nav__list'>
        <li><a href="#Projects">Projetos</a></li>
        <li><a href="">Tecnologias</a></li>
        <li><a href="#SobreMim">Sobre mim </a></li>
    </ul>
    <div className='Nav__icons'>
    <ul className='Nav__icons__list'>
    <li><a href="https://github.com/MarlonRamos07" target='_blank'><img src={GithubIcon}/></a></li>
    <li><a href="https://www.linkedin.com/in/marlon-ramos-da-costa/" target='_blank'><img src={LinkedinIcon}/></a></li>
    
    </ul>
    </div>
    </nav>     
    </header>
    </>)
    }


    export default Header