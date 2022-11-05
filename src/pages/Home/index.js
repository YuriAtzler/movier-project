import styles from "./Home.module.css";
import FilmeCard from "../../components/FilmeCard";
import {  useEffect } from "react";
import GetMovies from "../../services/getMovies";
import { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContexts";

export default function Home() {
  const {movies, setMovies} = useContext(MoviesContext)

  useEffect(() => {
    GetMovies().then((response) => setMovies(response))
  }, [])

  return (
    <main>
      <div className={styles.containerList}>
        {movies ? movies.map((item) => ( (<FilmeCard key={item.id} movie={item} />) )) : ""}
      </div>
    </main>
  );
}
