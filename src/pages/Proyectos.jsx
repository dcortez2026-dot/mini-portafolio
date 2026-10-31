


import TarjetaProyecto from '../componentes/TarjetaProyecto.jsx';

export default function Proyectos() {
  const proyectos = [
    {
      id: 1,
      titulo: 'Mi primera página web',
      descripcion:
        'Una página web creada con HTML y CSS para practicar el diseño y la estructura.',
      enlace: ''
    },
    {
      id: 2,
      titulo: 'Hola Mundo React',
      descripcion:
        'Un proyecto para aprender a crear componentes y páginas con React.',
      enlace: ''
    },
    {
      id: 3,
      titulo: 'Mi portafolio personal',
      descripcion:
        'Un sitio web para mostrar mis habilidades y trabajos de Ingeniería en Informática.',
      enlace: ''
    }
  ];

  return (
    <section className="page-section">
      <h1>Mis proyectos</h1>

      <div className="projects-grid">
        {proyectos.map((proyecto) => (
          <TarjetaProyecto
            key={proyecto.id}
            titulo={proyecto.titulo}
            descripcion={proyecto.descripcion}
            enlace={proyecto.enlace}
          />
        ))}
      </div>
    </section>
  );
}
