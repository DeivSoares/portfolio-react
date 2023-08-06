import CardProjeto from '../CardProjeto'
import './Projetos.css'

const Projetos = () => {
    return (
        <>
        <h1>Meus Projetos</h1>
        <section className='projetos'>
            <CardProjeto
                nome="Decodificador de Texto"
                descricao="Projeto desenvolvido durante o curso da Oracle"
                obs="Obs: Site Responsivo"
                link="https://deivsoares.github.io/Challange/"
                imagem="images/decodificador.png"
            />
            <CardProjeto
                nome="Relógio Digital"
                descricao="Relogio Digital em tempo real"
                obs="Obs: Site Responsivo"
                link="https://deivsoares.github.io/Relogio-Digital/"
                imagem="images/relogio-digital.png"
            />
            <CardProjeto
                nome="Site com Login e Registro"
                descricao="Projeto desenvolvido apenas para fixar o aprendizado"
                obs="Obs: Site não Responsivo"
                link="https://deivsoares.github.io/website-w-login/"
                imagem="images/Site com login e registro.png"
            />
            <CardProjeto
                nome="The Last of Us - Série"
                descricao="Projeto desenvolvido durante o evento do Zero ao Programador Contratado - Devemdobro"
                obs="Obs: Site Responsivo"
                link="https://deivsoares.github.io/the-last-of-us/"
                imagem="images/deivsoares.github.io_the-last-of-us_ (2).png"
            />
            <CardProjeto
                nome="Portfólio"
                descricao="Esse é o meu Portfólio ❤"
                obs="Obs: Site Responsivo"
                link="https://deivsoares.github.io/Portfolio/index.html"
                imagem="images/MeuPortfólio.png"
            />
            <CardProjeto
                nome="Elemental Wiki"
                descricao="Esse é um projeto interno que desenvolvi para o Elemental Priston Tale!"
                obs="Obs: Site Responsivo"
                link="https://deivsoares.github.io/Wiki/"
                imagem="images/Elemental Wiki.png"
            />
            <CardProjeto
                nome="DoctorCare"
                descricao="Participei da NLW-Return e sai com um projeto maravilhoso!"
                obs="Obs: Site Responsivo"
                link="https://deivsoares.github.io/NLW-Return/index.html"
                imagem="images/NLW-Return.png"
            />
        </section>        
        </>
    )
}

export default Projetos