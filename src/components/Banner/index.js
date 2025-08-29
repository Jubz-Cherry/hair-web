import React from 'react';
import styles from './Banner.module.css'; 
import imagem from '../../img/Bannersalao.png';
import logo from '../../img/w-hair.png';
import CabecalhoLink from '../CabecalhoLink'

function Banner() {
  return (
     <div className={styles.banner}>
      <div
        className={styles.capa}
        style={{ backgroundImage: `url(${imagem})` }}> 
                <img src={logo} alt="Logo"/>
          
            <nav>
                <CabecalhoLink url="/marcar">
                    Marcar Horário
                </CabecalhoLink>
                <p/>
                <CabecalhoLink url="/">
                    Home
                </CabecalhoLink>
            </nav>   
      </div>
    </div>
  );
}

export default Banner;
