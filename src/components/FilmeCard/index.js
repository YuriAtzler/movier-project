import styles from "./FilmeCard.module.css";

export default function FilmeCard({ movie }) {
  var style = {
    backgroundImage: `url(../../assets/movies/${movie.thumb})`,
  };

  return (
    <div style={style}>
      <h1>teset</h1>
    </div>
  );
}