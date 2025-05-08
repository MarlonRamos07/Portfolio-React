import '../Components/Hero.css'

function Hero () {
    return (
        <>
      
        <div className='Hero'>
            <h1 className='Hero__titulo'>Olá, me chamo Marlon!</h1>
            <p className='Hero__texto'>
            Sou um Desenvolvedor Front End Júnior e também aluno de Análise e Desenvolvimento de Sistemas, seja bem-vindo ao meu portfólio.
            </p>
            <button type="submit" className='btn-sabermais'>
                <a href="#Projects">Saber mais </a>
            </button>
        </div>
    
        

        </>
    )
}


export default Hero