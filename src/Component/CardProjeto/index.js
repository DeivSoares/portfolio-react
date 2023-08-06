import './CardProjeto.css'

const CardProjeto = (props) => {
    return (
        <div className="cardprojeto">
            <h3>{props.nome}</h3>
            <p>{props.descricao}
                <br />
                <strong><em>{props.obs}</em></strong>
            </p>
            <a href={props.link} target="_blank" rel="noopener noreferrer">
                <img src={props.imagem} alt={props.nome} />
            </a>
        </div>
    )
}

export default CardProjeto