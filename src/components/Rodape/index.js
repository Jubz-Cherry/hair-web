import styles from './Rodape.module.css';

function Rodape({ titulo }) {
    return (
        <footer className={styles.rodape}>
            <h1>{titulo}</h1>
        </footer>
    )
}

export default Rodape;