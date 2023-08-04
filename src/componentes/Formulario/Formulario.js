import { Botao } from "../Botao/Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import './Formulario.css';

export const Formulario = (props) =>{

    const times = [
        'Programação',
        'Front-End',
        'Back-End',
        'Mobile',
        'BigData',
        'Inovação e Gestão'
    ];

    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto label="Nome" placeholder="Digite o seu nome"/>
                <CampoTexto label="Cargo" placeholder="Digite o seu cargo"/>
                <CampoTexto label= "Imagem" placeholder="Digite o endereço da imagem"/>
                <ListaSuspensa label= "Time" itens={times}/>
                <Botao>
                    Criar card
                </Botao>
            </form>

        </section>
    );
}


