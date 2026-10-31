
import { Link } from 'react-router-dom';

export default function Inicio() {
  return (
    <section className="page-section hero">
      <h1>Hola, soy Dangelo Cortez</h1>
      <h2>Estudiante de Ingeniería en Informática</h2>

      <p>
        Me interesa la tecnología y el desarrollo web.
        Te invito a conocer mis habilidades, mis proyectos
        y un poco más sobre mí.
      </p>

      <Link to="/sobre-mi">Explorar mi portafolio</Link>
    </section>
  );
}

