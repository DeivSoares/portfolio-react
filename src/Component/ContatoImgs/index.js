import './ContatoImgs.css'

const ContatoImgs = (props) => {
    return (
        <div className='formaDeContato'>
            <h3>Formas de Contato</h3>
            <div>
                <a href="https://api.whatsapp.com/send/?phone=5522992533137" target="_blank" rel="noopener noreferrer">
                    <img src="images/WhatsApp Logo.png" alt="WhatsApp Logo" />
                </a>
            </div>
            <div>
                <a href="https://www.linkedin.com/in/deivsoares-dev/" target="_blank" rel="noopener noreferrer">
                    <img src="images/LinkedIn Logo.png" alt="LinkedIn Logo" />
                </a>
            </div>
            <div>
                <a href="mailto:deivisonsoares1610@outlook.com" target="_blank" rel="noopener noreferrer">
                    <img src="images/Outlook Logo.png" alt="Outlook Logo" />
                </a>
            </div>

            <div>
                <h3>Visite meu GitHub</h3>
                <div>
                    <a href="https://github.com/DeivSoares" target="_blank" rel="noopener noreferrer">
                        <img src="images/GitHub Logo.png" alt="GitHub Logo" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ContatoImgs