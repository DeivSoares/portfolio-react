import './FormAPIContato.css'

const FormAPIContato = () => {
    return (

        <div className='form'>
            <form action="https://api.staticforms.xyz/submit" method="POST">
                <input type="hidden" name="accessKey" value="8f72f5f8-0317-4ed7-a8e3-fd329de7fec5" />
                <input type="hidden" name="redirectTo" value="https://deivsoares.github.io/Portfolio/index.html" />
                <label for="inome">Seu Nome:</label>
                <input type="text" name="name" id="inome" required />
                <label for="iemail">Seu endereço de email:</label>
                <input type="email" name="email" id="iemail" required />
                <label for="imsg">Digite sua mensagem:</label>
                <textarea name="message" id="imsg" cols="30" rows="10" required />
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default FormAPIContato