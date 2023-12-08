import Colaborador from '../Colaborador';
import './Time.css';

const Time = (props) => {
    return (
        <section className='time' style={{backgroundColor:props.corSecundaria}}>
            <h3 style={{borderBottomColor:props.corPrimaria}}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => 
                    <Colaborador
                        key={colaborador.nome}
                        nome={colaborador.nome}
                        imagem={colaborador.imagem}
                        cargo={colaborador.cargo}
                        corDeFundo={props.corPrimaria}
                    />
                )}
            </div>
        </section>
    )
}

export default Time;