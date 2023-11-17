import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';

const Formulario = () => {
    const times = ['Programação', 'Front-End', 'Data Science', 'Devops', 'UX e Design', 'Mobile', 'Inovação e Gestão']

    const aoSalvar = (event) => {
        event.preventDefault();
        console.log('Foi submetido', event);
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite o seu nome"/>
                <CampoTexto label="Cargo" placeholder="Digite o seu cargo"/>
                <CampoTexto label="Imagem" placeholder="Infome o endereço da sua imagem"/>
                <ListaSuspensa label="Time" itens={times} />
                <Botao>Criar Card</Botao>
            </form>
        </section>
    )
}

export default Formulario;