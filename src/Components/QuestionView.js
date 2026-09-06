import { useParams } from "react-router-dom";
import { useState } from "react";
import "../styles/Forum.css";

function QuestionView({ preguntas, agregarRespuesta }) {
  const { id } = useParams();
  const pregunta = preguntas[id];

  const [texto, setTexto] = useState("");

  const enviarRespuesta = (e) => {
    e.preventDefault();
    if (!texto) return;

    agregarRespuesta(id, texto);
    setTexto("");
  };

  return (
    <div className="foro-container">
      <h1 className="foro-title">{pregunta.pregunta}</h1>

      <h2 className="foro-subtitle">Respuestas</h2>

      <div className="foro-lista">
        {pregunta.respuestas.map((r, index) => (
          <div key={index} className="foro-card">
            <p>{r}</p>
          </div>
        ))}
      </div>

      <form className="foro-formulario" onSubmit={enviarRespuesta}>
        <label>Responder</label>
        <textarea
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Escribe tu respuesta"
        ></textarea>

        <button className="foro-btn" type="submit">Enviar respuesta</button>
      </form>
    </div>
  );
}

export default QuestionView;
