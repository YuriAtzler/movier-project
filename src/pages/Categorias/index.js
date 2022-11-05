import styles from './Categorias.module.css';

import allMovies from '../../json/movies.json';

import CategoriasMenu from '../../components/CategoriasMenu';
import FilmeCard from '../../components/FilmeCard'

import { useContext } from 'react';
import { GeneroContext } from '../../contexts/generoContexts';

export default function Categorias() {
  const { genero } = useContext(GeneroContext)

  return (
    <>
      <CategoriasMenu />
      <div className={styles.containerList}>
        {allMovies.map((item) => (
          !genero ? (<FilmeCard key={item.id} movie={item} />) 
            : item.genero === genero ? (<FilmeCard key={item.id} movie={item} />) : ''
        ))}
      </div>
    </>
  );
};