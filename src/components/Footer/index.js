import styles from './Footer.module.css'

import { ReactComponent as MarcaRegistrada } from '../../assets/marca-registrada.svg';

export default function Footer() {
    return (
        <>
          <footer className={styles.rodape}>
            <MarcaRegistrada />
            Movies, 2022 - Todos os direitos reservados.
          </footer>
        </>
    );
};