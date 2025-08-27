import React from 'react';
import styles from './Footer.module.css';
import imagem from '../../img/fundo-footer.png';

function Footer() {
    return (
        <footer className={styles.footer}
        style={{ backgroundImage: `url(${imagem})` }}>
            <div className={styles.footerContent}>
                <p>Nome: Juliana</p>
                <p>Email: juliana.cabelos@gmail.com</p>
                <p>Numero: 11 09876-5432</p>
        
            </div> 
        </footer>
    )
}

export default Footer;