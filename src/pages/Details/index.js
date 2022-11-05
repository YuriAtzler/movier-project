import styles from './Details.module.css';
import { useLocation } from 'react-router-dom';

export default function Details() {
  const localizacao = useLocation();
  const { data } = localizacao.state;

  const paraDeDarErro = () => console.log(data)

  return(
    <>
      <div className={styles.contentMovie}>
        <img src={require(`../../../public/assets/movies/${data.thumb}`)} alt="Thumb Movie" />
        <div className={styles.detalhes}>
          <h1>{data.titulo} - ({data.lancamento})</h1>
          <p>{data.genero}</p>
          <h2>Direção: <span>{data.diretor}</span></h2>
          <p>Sinopse: {data.sinopse}</p>
          <div className={styles.likes}>
            <span>Likes: {data.rating}</span>
            <button onClick={paraDeDarErro}>Curtir</button>
          </div>
        </div>
        <div className={styles.atores}>
          <h1>Atores:</h1>
          <ul>
            {data.atores.map((ator) => (
              (<li key={ator}>{ator}</li>)
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.comments}>

      </div>
    </>
  );
};