import "../styles/Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">

      <section className="home-banner">
        <div className="home-banner-text">
          <h1>CODECAMPUS</h1>
          <h2>Bienvenido a CODECAMPUS</h2>
          <p>Tu plataforma educativa para aprender programación web paso a paso.</p>

          <p className="home-description">
            CODECAMPUS es un espacio diseñado para que cualquier persona, sin importar su nivel,
            pueda aprender programación web de manera clara, práctica y guiada. Aquí encontrarás
            recursos creados para ayudarte a comprender los fundamentos del desarrollo web y avanzar
            hacia proyectos más completos.

            Nuestra plataforma combina tutoriales interactivos, explicaciones sencillas, ejemplos
            reales y una comunidad donde puedes resolver dudas y compartir tus avances. Todo está
            organizado para que aprendas a tu ritmo, desde los conceptos básicos hasta temas más
            avanzados.
          </p>

          <Link to="/tutoriales" className="home-button">Comenzar ahora</Link>
        </div>

        <img
          src="https://images.unsplash.com/photo-1653387300291-bfa1eeb90e16?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Estudiantes programando"
          className="home-banner-img"
        />
      </section>

      <section className="home-features">
        <h2>¿Qué puedes hacer en CODECAMPUS?</h2>

        <div className="home-cards">

          <div className="home-card">
            <img src="https://cdn-icons-png.flaticon.com/512/2721/2721290.png" alt="Tutoriales" />
            <h3>Tutoriales paso a paso</h3>
            <p>Aprende HTML, CSS y JavaScript con explicaciones claras y ejemplos prácticos.</p>
          </div>

          <div className="home-card">
            <img src="https://cdn-icons-png.flaticon.com/512/3064/3064197.png" alt="Foro" />
            <h3>Foro de preguntas</h3>
            <p>Comparte dudas, ayuda a otros y aprende en comunidad.</p>
          </div>

          <div className="home-card">
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Progreso" />
            <h3>Tu progreso</h3>
            <p>Registra tus avances y guarda tus tutoriales favoritos.</p>
          </div>

        </div>
      </section>

    </div>
  );
}

export default Home;
