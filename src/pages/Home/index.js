import { useContext } from "react";
import Aside from "../../components/Aside";
import { GeneroContext } from "../../contexts/generoContexts";
import styles from "./Home.module.css";
import movies from "../../json/movies.json";
import FilmeCard from "../../components/FilmeCard";

export default function Home() {
  const { genero } = useContext(GeneroContext);

  return (
    <main>
      <div className={styles.content}>
        {movies.map((item) => {
          if (!genero) return <FilmeCard key={item.id} movie={item} />;
          else if (item.genero === genero)
            return <FilmeCard key={item.id} movie={item} />;
        })}
      </div>
      <div className={styles.aside}>
        <Aside />
      </div>
    </main>
  );
}
