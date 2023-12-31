import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select 
                value={props.valor} 
                defaultValue={props.itens[0]}
                onChange={evento => props.aoAlterado(evento.target.value)}>
                <option></option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa;