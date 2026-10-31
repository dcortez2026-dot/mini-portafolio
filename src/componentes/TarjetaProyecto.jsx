
export default function TarjetaProyecto({
  titulo,
  descripcion,
  enlace
}) {
  return (
    <article className="project-card">
      <h2>{titulo}</h2>
      <p>{descripcion}</p>

      {enlace ? (
        <a
          href={enlace}
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver proyecto
        </a>
      ) : (
        <p>Repositorio todavía no disponible.</p>
      )}
    </article>
  );
}
