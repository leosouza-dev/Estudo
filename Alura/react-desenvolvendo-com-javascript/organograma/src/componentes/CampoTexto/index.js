import './CampoTexto.css'

const CampoTexto = (props) => {
    const {label, placeholder} = props;
    return (
        <div className="campo-texto">
            <label>{label}</label>
            <input placeholder={placeholder}/>
        </div>
    )
}

export default CampoTexto;