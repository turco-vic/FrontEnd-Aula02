import styles from './Card.module.css'; // Importando estilos

export default function Button({ text }) {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{text}</h1>
            <button className={styles.button}>Clique aqui para não fazer nada!</button>
        </div>
    )
}
