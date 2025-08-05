import styles from "./not.module.css"; // Importando estilos

export default function NotFound() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>ERROR 404</h1>
            <h2 className={styles.message}>Página não encontrada</h2>
            <p className={styles.suggestion}>Desculpe, a página que você está procurando não existe! Por favor, verifique o URL ou volte para a página inicial.</p>
        </div>
    );
}
