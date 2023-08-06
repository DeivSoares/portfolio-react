import './CardCurso.css'

const CardCurso = (props) => {
    return (
        <div className='cardcurso'>
            <embed src={props.link} alt={props.nome}/>
            <p>{props.nome}</p>
            <p>{props.instituicao}</p>
            <span>{props.formacao}</span>
            <a href={props.link} target="_blank" rel="noopener noreferrer">
                <button>Abrir PDF</button>
            </a>
        </div>
    )
}

export default CardCurso