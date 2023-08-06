import './Rodape.css'

const Rodape = (props) => {
    return (
        <footer className='rodape'>
            <img src={props.imagem} alt="Logo" />
            <p>
                <a href={props.link} target="_blank" rel="noopener noreferrer">{props.autor}</a>
                Copyright © 2023.</p>
            <p>Todos os direitos reservados.</p>
        </footer>
    )
}

export default Rodape