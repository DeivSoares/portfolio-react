import CvButton from '../CvButton'
import Perfil from '../Perfil'
import './About.css'

const About = () => {
    return (
        <section className='about'>
            <Perfil/>
            <div className='wrapper-a'>
                <div>
                    <h1>Seja muito bem vindo ao meu Portfólio</h1>
                    <p>Olá, sou Deivison Soares e sou morador da Região dos Lagos - RJ. Atualmente, estou cursando o Terceiro Período do curso de Análise e Desenvolvimento de Sistemas fornecidos pela UVA - Universidade Veiga de Almeida.</p>
                </div>
                <div>
                    <h2>Objetivos</h2>
                    <p>O meu propósito é obter o tão esperado primeiro emprego e nele adquirir experiências desafiadoras neste ramo em que escolhi me profissionalizar; Desenvolvedor Front-End, comprometendo-me com as atribuições que serão me direcionados e sempre oferecendo o meu melhor serviço.</p>
                <CvButton/>
                </div>
            </div>
        </section>
    )
}

export default About