import CardCurso from '../CardCurso'
import './Cursos.css'

const Cursos = () => {
    // const cursos = [
    //     {
    //         nome: 'Front End T5',
    //         instituicao: 'Oracle Next Education - ONE',
    //         formacao: '',
    //         link: 'https://drive.google.com/drive/folders/1gqBPdczDFJkWXML3DwTHtZAfEHtCgmgZ?usp=sharing'
    //     },
    // ]

    return (
        <>
            <h1>Meus Cursos</h1>
            <section className='cursos'>
                <CardCurso nome="Business Agility" instituicao="Oracle Next Education - ONE" link="docs/BA.pdf" formacao="06/23" />
                <CardCurso nome="Empreendedorismo" instituicao="Oracle Next Education - ONE" link="docs/Emp.pdf" formacao="06/23" />
                <CardCurso nome="Desenvolvimento Pessoal" instituicao="Oracle Next Education - ONE" link="docs/DP.pdf" formacao="04/23" />
                <CardCurso nome="Iniciante em Programação" instituicao="Oracle Next Education - ONE" link="docs/IP.pdf" formacao="04/23" />
                <CardCurso nome="Lógica de Programação Essencial" instituicao="Digital Innovation One" link="docs/LP.pdf" formacao="08/22" />
                <CardCurso nome="The Complete Full-Stack JavaScript" instituicao="Udemy" link="docs/CFSJS.pdf" formacao="10/21" />
                <CardCurso nome="Lógica de Programação" instituicao="Microlins" link="docs/MICROLINS.pdf" formacao="10/21" />
                <CardCurso nome="Programação C#" instituicao="Microlins" link="docs/MICROLINS.pdf" formacao="10/21" />
                <CardCurso nome="Banco de Dados SQL" instituicao="Microlins" link="docs/MICROLINS.pdf" formacao="10/21" />
                <CardCurso nome="Pacote Office" instituicao="Microlins" link="docs/MICROLINS.pdf" formacao="10/21" />
                <CardCurso nome="Excel" instituicao="Microlins" link="docs/MICROLINS.pdf" formacao="10/21" />
            </section>
        </>
    )
}

export default Cursos