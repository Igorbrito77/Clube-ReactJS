import { Colaborador } from '../Colaborador/Colaborador'
import './Time.css'

export const Time = (props) => {

    return (
        <section className='time' style={ {backgroundColor: props.corSecundaria}}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>

            {props.colaboradores.map( colaborador => 
                <Colaborador  /*colaborador= {colaborador}*/ 
                    nome = {colaborador.nome} 
                    cargo = {colaborador.cargo} 
                    imagem = {colaborador.imagem}
                    corCabecalho = {props.corPrimaria}
                />
            )}

         
        </section>
    )
} 