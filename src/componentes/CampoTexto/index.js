import './CampoTexto.css';

const CampoTexto = (props) => {

    console.log(props);

    const msg = `${props.placeholder}...`;

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input required={props.obrigatorio} placeholder={msg}/>
        </div>
    );
    
}

export default CampoTexto;