import { Colaborador } from '../Colaborador/Colaborador'
import './Time.css'

export const Time = (props) => {

    return (


        (props.colaboradores.length > 0) ?

        <section className='time' style={ {backgroundColor: props.corSecundaria}}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>

            <div className='colaboradores'>
                {props.colaboradores.map( colaborador => 
                    <Colaborador  /*colaborador= {colaborador}*/ 
                        nome = {colaborador.nome} 
                        cargo = {colaborador.cargo} 
                        imagem = {colaborador.imagem}
                        corCabecalho = {props.corPrimaria}
                    />
                )}
            </div>
        </section> : ''
    )
} 