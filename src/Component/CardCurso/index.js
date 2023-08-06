import './CardCurso.css'

const CardCurso = (props) => {
    return (
        <div className='cardcurso'>
            <iframe title={props.nome} src={props.link}></iframe>
            <p>{props.nome}</p>
            <p>{props.instituicao}</p>
            <span>{props.formacao}</span>
        </div>
    )
}

export default CardCurso