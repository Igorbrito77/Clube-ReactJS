import './Colaborador.css';

export const Colaborador = (props) => {
    return(
        <div className='colaborador'>
            <div className='cabecalho' style={{backgroundColor: props.corCabecalho}}>
                <img src='https://github.com/Igorbrito77.png' alt='Igor Brito'/>
            </div>

            <div className='rodape'>
                <h4>Igor Brito</h4>
                <h5>Instrutor</h5>
            </div>

        </div>
    );
}