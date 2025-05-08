import '../Components/Projects.css'
import Projeto1 from '../assets/Projeto1.png'
import Projeto2 from '../assets/Projeto2.png'
import Projeto3 from '../assets/Projeto3.png'
import Projeto4 from '../assets/Projeto4.png'
import ButtonClick from '../Components/Button-click'

function Projects () {
    return (
        <>
        <div id='Projects' className='project__title__container'>
        <h1 className='project__title'>Projetos</h1>
        </div>

            <div className='Container'>
                <div className='borda__card'>
                <img className='projeto__image' src={Projeto1}/>
                    <div className='card'>
                        <div className='card__titulo'>
                            <h5 className='card__title__text'>Arc Project</h5>
                        </div>
                        <p className='card__desc'>Projeto utilizando react sobre uma página de uma empresa fictítia de Arquitetura, onde foram consumidas
                            Api´s e também utilizei a componentização e ReactHooks
                        </p>
                        <ButtonClick link='https://dnc-arq-marlon.vercel.app/' texto='Clique Aqui'/>
                    </div>
                </div>
                <div className='borda__card'>
                <img className='projeto__image' src={Projeto2}/>
                    <div className='card'>
                        <div className='card__titulo'>
                            <h5 className='card__title__text'>Digital Agency</h5>
                        </div>
                        <p className='card__desc'>Layout Desenvolvido em Tailwind CSS, HTML e também CSS puro, parte de uma atividade da disciplina de Desenvolvimento de Interfaces Web</p>
                        <ButtonClick link='https://tailwind-lp-1-pugm.vercel.app/' texto='Clique Aqui'/>
                    </div>
                </div>
                <div className='borda__card'>
                <img className='projeto__image' src={Projeto3}/>
                    <div className='card'>
                        <div className='card__titulo'>
                            <h5 className='card__title__text'>Fit Quest</h5>
                        </div>
                        <p className='card__desc'>Projeto Integrado de UX e Desenvolvimento de Interfaces Web, onde foi criada desde a concepção visual, a landing page de um aplicativo
                            fitness. </p>
                        <ButtonClick link='https://fit-quest-landing-page.vercel.app/' texto='Clique Aqui'/>
                    </div>
                </div>
                <div className='borda__card'>
                <img className='projeto__image' src={Projeto4}/>
                    <div className='card'>
                        <div className='card__titulo'>
                            <h5 className='card__title__text'>Dnc Weather</h5>
                        </div>
                        <p className='card__desc'>Projeto utilizando HTML, CSS, Bootstrap e Javascript, onde foram consumidas Apis de localização e previsão do tempo.</p>
                        <ButtonClick link='https://desafio2-dnc.netlify.app/' texto='Clique Aqui'/>
                    </div>
                </div>

                
            </div>
        </>
    )
}

export default Projects
