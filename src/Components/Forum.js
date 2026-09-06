import { Link } from "react-router-dom";
import "../styles/Forum.css";

function Forum({ preguntas }) {
  return (
    <div className="foro-container">
      <h1 className="foro-title">Foro de Programación</h1>
      <p className="foro-subtitle">Comparte tus dudas y ayuda a otros programadores.</p>

      <div className="foro-lista">
        {preguntas.map((p, index) => (
          <Link key={index} to={`/foro/${index}`} className="foro-card">
            <h3>{p.pregunta}</h3>
            <p className="foro-preview">{p.respuestas.length} respuestas</p>
          </Link>
        ))}
      </div>

      <div className="foro-acciones">
        <Link to="/foro/nueva" className="foro-btn">
          Crear nueva pregunta
        </Link>
      </div>
    </div>
  );
}

export default Forum;
