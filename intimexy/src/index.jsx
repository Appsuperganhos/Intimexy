// pages/index.jsx

import Link from 'next/link';
import styles from '../styles/global.css';

export default function HomePage() {
  return (
    <div className={styles.container}>
      <h1>Bem-vindo ao Intimexy</h1>
      <p>Plataforma de conteúdo exclusivo para modelos.</p>
      <div>
        <Link href="/login">
          <a className={styles.button}>Login</a>
        </Link>
        <Link href="/signup">
          <a className={styles.button}>Cadastro</a>
        </Link>
      </div>
    </div>
  );
}
