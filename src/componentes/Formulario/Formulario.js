import { useState } from "react";
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

    const aoSalvar = (evento) =>{
        evento.preventDefault();
        props.aoColaboradorCadastrado({
            nome, cargo, imagem, time
        });
    };

    const [nome, setNome] = useState('');
    const [cargo,setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');



    return (
        <section className="formulario" onSubmit={aoSalvar}>
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>

                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite o seu nome"
                    valor={nome}
                    aoAlterado= {valor => setNome(valor)}
                
                />

                <CampoTexto 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite o seu cargo"
                    valor={cargo}
                    aoAlterado={valor=> setCargo(valor)}
                
                />
                
                <CampoTexto  
                    label= "Imagem" 
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor=> setImagem(valor)}
                />


                <ListaSuspensa 
                    obrigatorio={true} 
                    label= "Time" 
                    itens={times}
                    valor={time}
                    aoAlterado={valor=> setTime(valor)}
                />
                <Botao>
                    Criar card
                </Botao>
            </form>

        </section>
    );
}


