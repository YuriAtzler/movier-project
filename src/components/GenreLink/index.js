import { useContext } from "react";
import { GeneroContext } from "../../contexts/generoContexts";
import styles from "./GenreLink.module.css";

export default function GenreLink({ children, genre }) {
  const { setGenero } = useContext(GeneroContext);

  return <p onClick={() => setGenero(genre)}>{children}</p>;
}
