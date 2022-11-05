import GenreLink from "../GenreLink";
import styles from "./Aside.module.css";

export default function Aside() {
  return (
    <div>
      <GenreLink genre={false}>Todos</GenreLink>
      <GenreLink genre={"Terror"}>Terror</GenreLink>
      <GenreLink genre={"Romance"}>Romance</GenreLink>
      <GenreLink genre={"Comédia"}>Comédia</GenreLink>
      <GenreLink genre={"Ação"}>Ação</GenreLink>
      <GenreLink genre={"Aventura"}>Aventura</GenreLink>
    </div>
  );
}
