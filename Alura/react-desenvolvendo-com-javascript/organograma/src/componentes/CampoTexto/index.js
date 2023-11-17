import './CampoTexto.css'

const CampoTexto = (props) => {
    const {label, placeholder, obrigatorio} = props;
    return (
        <div className="campo-texto">
            <label>{label}</label>
            <input required={obrigatorio} placeholder={placeholder}/>
        </div>
    )
}

export default CampoTexto;