
import { useState } from 'react';

export default function Contacto() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');

  function manejarEnvio(event) {
    event.preventDefault();

    const asunto = encodeURIComponent(
      `Mensaje de contacto de ${nombre}`
    );

    const cuerpo = encodeURIComponent(
      `Nombre: ${nombre}\nCorreo: ${correo}\n\nMensaje:\n${mensaje}`
    );

    window.location.href =
      `mailto:ayaladangelo62@gmail.com?subject=${asunto}&body=${cuerpo}`;
  }

  return (
    <section className="page-section">
      <h1>Contacto</h1>

      <p>
        ¿Tienes alguna consulta o quieres conocer más sobre
        mis proyectos? Puedes escribirme mediante este formulario.
      </p>

      <form onSubmit={manejarEnvio}>
        <div>
          <label htmlFor="nombre">Nombre</label>
          <input
            id="nombre"
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="correo">Correo electrónico</label>
          <input
            id="correo"
            type="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="mensaje">Mensaje</label>
          <textarea
            id="mensaje"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            rows="5"
            required
          />
        </div>

        <button type="submit">Enviar mensaje</button>
      </form>

      <h2>Otros medios de contacto</h2>

      <p>
        Gmail:{' '}
        <a href="mailto:ayaladangelo62@gmail.com">
          ayaladangelo62@gmail.com
        </a>
      </p>

      <p>
        Instagram:{' '}
        <a
          href="https://www.instagram.com/daa_n.lov/"
          target="_blank"
          rel="noopener noreferrer"
        >
          @daa_n.lov
        </a>
      </p>
    </section>
  );
}
