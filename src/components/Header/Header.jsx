import styles from "../Header/Header.module.css"; // Importando estilos

export default function Header({title, subtitle, totalProducts}) {
    return (
        <div className={styles.header}>
            <h1 className={styles.title}>{title}</h1>
            <h3 className={styles.subtitle}>{subtitle}</h3>
            <p className={styles.description}>{totalProducts}</p>
        </div>
    );
}