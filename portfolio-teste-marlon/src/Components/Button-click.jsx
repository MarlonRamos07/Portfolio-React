import '../Components/Button-click.css'

function ButtonClick ({link, texto}) {
    return (
        <>
        <button className='ButtonClick'>
            <a href={link} target='_blank' className="ButtonClick" >{texto}</a>
        </button>
        </>
    )
}



export default ButtonClick