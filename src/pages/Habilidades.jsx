
export default function Habilidades() {
  const habilidades = [
    { id: 1, nombre: 'HTML', nivel: 'Básico' },
    { id: 2, nombre: 'CSS', nivel: 'Básico' },
    { id: 3, nombre: 'JavaScript', nivel: 'Principiante' },
    { id: 4, nombre: 'React', nivel: 'Principiante' },
    { id: 5, nombre: 'Git y GitHub', nivel: 'Básico' }
  ];

  const herramientas = [
    'Visual Studio Code',
    'Git',
    'GitHub',
    'Node.js',
    'React'
  ];

  return (
    <section className="page-section">
      <h1>Mis habilidades</h1>

      <div className="skills-grid">
        {habilidades.map((habilidad) => (
          <article className="skill-card" key={habilidad.id}>
            <h3>{habilidad.nombre}</h3>
            <p>Nivel: {habilidad.nivel}</p>
          </article>
        ))}
      </div>

      <h2>Herramientas</h2>
      <ul className="tools-list">
        {herramientas.map((herramienta) => (
          <li key={herramienta}>{herramienta}</li>
        ))}
      </ul>
    </section>
  );
}
