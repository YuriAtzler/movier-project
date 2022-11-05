import styles from "./Home.module.css";
import movies from "../../json/movies.json";
import FilmeCard from "../../components/FilmeCard";

export default function Home() {
  return (
    <main>
      <div className={styles.containerList}>
        {movies.map((item) => ( (<FilmeCard key={item.id} movie={item} />) ))}
      </div>
    </main>
  );
}
