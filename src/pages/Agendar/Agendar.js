import styles from './Agendar.module.css';
import backgroundImg from '../../img/Salon.png';


function Agendar(){
    return(
    <div className={styles.background} style={{ backgroundImage: `url(${backgroundImg})` }}>
        <div className={styles.formContainer}>

            <form className={styles['form']}
            method="POST" action="create">
                <h1>Marcar Horário</h1>
                
            <input type="text" name="name" id="name" placeholder="Nome da cliente" class="form-control"></input>
            <input type="text" name="number" id="number" placeholder="Número da cliente" class="form-control"></input>
            <input type="text" name="description" id="description" placeholder="Descrição" class="form-control"></input>
            <input type="date" name="date" id="date" placeholder="date" class="form-control"></input>
            <input type="time" name="time" id="time" class="form-control"></input>
            <button type="submit">Marcar</button>
            </form>
        </div>
    </div>
    )
}

export default Agendar;