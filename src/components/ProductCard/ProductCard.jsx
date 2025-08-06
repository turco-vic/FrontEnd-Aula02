import styles from './ProductCard.module.css';
import Image from 'next/image';

export default function ProductCard({ title, image, description, price }) {
    return (
        <div className={styles.card}>
            <h2 className={styles.title}>{title}</h2>
            {image && image !== "" && (
                <Image src={image} alt={title} className={styles.image} width={200} height={200} />
            )}
            <p className={styles.description}>{description}</p>
            <p className={styles.price}>R$ {price.toFixed(2)}</p>
            <button className={styles.button}>Comprar</button>
        </div>
    );
}