import '../Components/SobreMim.css'
import GithubIcon from '../assets/Github-Icon.svg'
import LinkedinIcon from '../assets/Linkedin.svg'
import FigmaIcon from '../assets/Figma-Icon.svg'

function SobreMim () {
    return(
        <>
        <div id='SobreMim' className='SobreMim__title'>
        <h2>Sobre mim</h2>
        </div>
       
        <div className='timeline__container'>
  <div className='timeline'>
    <div id='2023' className='timeline__point'>
      <div  className='timeline__title'>2023</div>
      <div className='timeline__item'></div>
      <div className='timeline__desc'>
      Comecei a estudar programação por conta própria.
        </div>
    </div>
    <div id='2024' className='timeline__point'>
      <div   className='timeline__title'>2024</div>
      <div className='timeline__item'></div>
      <div className='timeline__desc'>
      Comecei meus estudos na DNC e na Faculdade, já desenvolvendo pequenos projetos.
        </div>
    </div>
    <div  id='2025'className='timeline__point'>
      <div className='timeline__title'>2025</div>
      <div className='timeline__item'></div>
      <div className='timeline__desc'>
      Desenvolvendo projetos utilizando diversas tecnologias e já trabalhando na área da Tecnologia, sigo na faculdade e com a DNC.
        </div>
    </div>
  
  </div>
</div>
<div className='footer__container'>

    <div className='footer__contact__container'>
    <div className='footer__contact'>
        <h5>Meu contato:</h5>
        <p>12 98888888</p>
    </div>

    <div className='footer__contact'>
        <h5>Email:</h5>
        <p>12 98888888</p>
    </div>
    </div>
   
    <div>
        <ul className='footer__list'>
            <li><a href="">< img className='footer__item' src={GithubIcon}/></a></li>
            <li><a href=""><img  className='footer__item' src={LinkedinIcon}/></a></li>
            <li><a href=""><img  className='footer__item' src={FigmaIcon}/></a></li>
        </ul>
    </div>

</div>
    </>
    )
}


export default SobreMim