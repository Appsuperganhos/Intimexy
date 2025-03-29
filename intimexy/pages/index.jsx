import Link from 'next/link';
import '../styles/global.css'; // Importando o arquivo de estilo global

export default function HomePage() {
  return (
    <div className="container">
      <h1>Bem-vindo ao Intimexy</h1>
      <p>Plataforma de conteúdo exclusivo para modelos.</p>
      <div>
        <Link href="/login">
          <a className="button">Login</a>
        </Link>
        <Link href="/signup">
          <a className="button">Cadastro</a>
        </Link>
      </div>
    </div>
  );
}
