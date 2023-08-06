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
                <CardCurso nome="Business Agility" instituicao="Oracle Next Education - ONE" link="https://drive.google.com/file/d/16uwoK4Lcht4QOxvY5we7A76UoEBza6az/preview" formacao="06/23" />
                <CardCurso nome="Empreendedorismo" instituicao="Oracle Next Education - ONE" link="https://drive.google.com/file/d/1i8VgNEqG50uQiC9sKHbnZzL4MDI0B642/preview" formacao="06/23" />
                <CardCurso nome="Desenvolvimento Pessoal" instituicao="Oracle Next Education - ONE" link="https://drive.google.com/file/d/1jRHLSZrIgM_J5uJ1RPCmfJoOdkAnT18P/preview" formacao="04/23" />
                <CardCurso nome="Iniciante em Programação" instituicao="Oracle Next Education - ONE" link="https://drive.google.com/file/d/1X8nIfNCwokkF3H7FBFzPx_QUTem5wVGF/preview" formacao="04/23" />
                <CardCurso nome="Lógica de Programação Essencial" instituicao="Digital Innovation One" link="https://drive.google.com/file/d/1hfDRZhaa7DxQJLx9ptf8wMlgI3vbae27/preview" formacao="08/22" />
                <CardCurso nome="The Complete Full-Stack JavaScript" instituicao="Udemy" link="https://drive.google.com/file/d/1H_c6GSIE3EgfDJkUQSeZmWcNG1rOH7tb/preview" formacao="10/21" />
                <CardCurso nome="Lógica de Programação" instituicao="Microlins" link="https://drive.google.com/file/d/1PasKrHrlp-R-YbkVjWxrZ5kX_FZUqiDc/preview" formacao="10/21" />
                <CardCurso nome="Programação C#" instituicao="Microlins" link="https://drive.google.com/file/d/1PasKrHrlp-R-YbkVjWxrZ5kX_FZUqiDc/preview" formacao="10/21" />
                <CardCurso nome="Banco de Dados SQL" instituicao="Microlins" link="https://drive.google.com/file/d/1PasKrHrlp-R-YbkVjWxrZ5kX_FZUqiDc/preview" formacao="10/21" />
                <CardCurso nome="Pacote Office" instituicao="Microlins" link="https://drive.google.com/file/d/1PasKrHrlp-R-YbkVjWxrZ5kX_FZUqiDc/preview" formacao="10/21" />
                <CardCurso nome="Excel" instituicao="Microlins" link="https://drive.google.com/file/d/1PasKrHrlp-R-YbkVjWxrZ5kX_FZUqiDc/preview" formacao="10/21" />
            </section>
        </>
    )
}

export default Cursos