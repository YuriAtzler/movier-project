import styles from "./FilmeCard.module.css";

export default function FilmeCard({ movie }) {
  return (
    <>
      <img
        src={require(`../../../public/assets/movies/${movie.thumb}`)}
        alt="thumb"
      />
      <h1>{movie.genero}</h1>
    </>
  );
}
