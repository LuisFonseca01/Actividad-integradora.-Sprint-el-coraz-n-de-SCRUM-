import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Forum.css";

function NewQuestion({ agregarPregunta }) {
  const [pregunta, setPregunta] = useState("");
  const navigate = useNavigate();

  const enviar = (e) => {
    e.preventDefault();
    if (!pregunta) return alert("Escribe una pregunta");

    agregarPregunta({
      pregunta,
      respuestas: []
    });

    navigate("/foro");
  };

  return (
    <div className="foro-container">
      <h1 className="foro-title">Crear nueva pregunta</h1>

      <form className="foro-formulario" onSubmit={enviar}>
        <label>Pregunta</label>
        <input
          type="text"
          value={pregunta}
          onChange={(e) => setPregunta(e.target.value)}
          placeholder="Escribe tu pregunta"
        />

        <button className="foro-btn" type="submit">Publicar pregunta</button>
      </form>
    </div>
  );
}

export default NewQuestion;
