import styles from "./Header.module.css";
import Image from "next/image";

export default function Header({ title, subtitle, totalProducts }) {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <Image src="/images/logoturco.png" alt="Logo" width={100} height={100} priority />
            </div>
            <div className={styles.text}>
                <h1 className={styles.title}>{title}</h1>
                <h3 className={styles.subtitle}>{subtitle}</h3>
                <p className={styles.description}>{totalProducts}</p>
            </div>
        </div>
    );
}