import { Link } from "react-router-dom";
import logo from '../../img/w-hair.png';
import styles from './Cabecalho.module.css';
import CabecalhoLink from '../CabecalhoLink';
import imagem from '../../img/Bannersalao.png';

function Cabecalho(){
    return(
        <div className={styles.capa}
            style={{ backgroundImage: `url(${imagem})` }}>
        <header className={styles.cabecalho}>
           
            <Link to="./">
                <img src={logo} alt="Logo"/>
            </Link>
            <nav>
                <CabecalhoLink url="./marcar">
                    Marcar Horário
                </CabecalhoLink>
                <p/>
                <CabecalhoLink url="./servicos">
                    Serviços
                </CabecalhoLink>
                <p/>
                <CabecalhoLink url="./Agenda">
                    Agenda 
                </CabecalhoLink>
            </nav> 
            
        </header>
        </div>
    )
}


export default Cabecalho; 