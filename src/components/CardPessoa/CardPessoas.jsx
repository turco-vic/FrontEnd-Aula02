import styles from './CardPessoas.module.css'; // Importando estilos

export default function CardPessoas({ nome, email, idade }) {
    const nomeExibido = nome ? nome : "Nome não informado";
    const emailExibido = email ? email : "Email não informado";
    const idadeExibida = idade ? `${idade} anos de idade`: "Idade não informada";

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>{nomeExibido}</h2>
            <p className={styles.email}>{emailExibido}</p>
            <p className={styles.idade}>{idadeExibida}</p>
            <hr />
        </div>
    );
}