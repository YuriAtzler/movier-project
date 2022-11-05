import styles from "./FilmeCard.module.css";

export default function FilmeCard({ movie }) {
  return (
    <div className={styles.card}>
      <div className={styles.imagem}>
        <img src={require(`../../../public/assets/movies/${movie.thumb}`)} alt="Teste" />
      </div>
      <div className={styles.content}>
        <p>{movie.titulo}</p>
        <span>{movie.lancamento}</span>
      </div>
    </div>
  );
}