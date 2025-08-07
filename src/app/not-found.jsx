import styles from "./not.module.css"; // Importando estilos
import Link from "next/link";

export default function NotFound() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>ERROR 404</h1>
            <h2 className={styles.message}>Página não encontrada</h2>
            <p className={styles.suggestion}>Desculpe, a página que você está procurando não existe! Por favor, verifique o URL ou volte para a página inicial.</p>
            <Link href="/" className={styles.homeLink}>
                Voltar para a página inicial
            </Link>
        </div>
    );
}
