import { Link } from "react-router-dom";
import styles from "./RankingCard.module.css";
import likeSvg from "../../assets/like-svgrepo-com.svg"

export default function FilmeCard({ movie, index }) {
  return (
    <Link to={'/details'} state={{ data: movie }} className={styles.card}>
      <div className={styles.imagem}>
        <img src={require(`../../../public/assets/movies/${movie.thumb}`)} alt="Thumb Movie" />
      </div>

      <div className={styles.contentContainer}>

        <div className={styles.contentTitulo}>

          <div className={styles.content}>
            <h1>{movie.titulo}</h1>
            <span>{movie.lancamento}</span>
          </div>
         
          <div>
            <h2>#{index}</h2>
          </div>

        </div>

        <div className={styles.content}>
            <p>Direção: {movie.diretor}</p>   
        </div>

        <div className={styles.content}>
          <div className={styles.contentLike}>
            <img src={likeSvg} alt="aaaa"/>
            <h2>{movie.rating}</h2>
          </div>
        </div>

      </div>
     
    </Link>
  );
}