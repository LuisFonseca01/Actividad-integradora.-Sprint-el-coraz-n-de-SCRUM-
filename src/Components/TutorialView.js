import { useParams } from "react-router-dom";
import "../styles/TutorialList.css";


function TutorialView({ tutoriales }) {
  const { id } = useParams();

  if (!tutoriales[id]) {
    return (
      <div className="tutoriales-container">
        <h1 className="tutoriales-title">Tutorial no encontrado</h1>
      </div>
    );
  }

  const tuto = tutoriales[id];

  return (
    <div className="tutoriales-container">
      <h1 className="tutoriales-title">{tuto.titulo}</h1>

      <div className="tutorial-meta">
        <span><strong>Autor:</strong> {tuto.autor}</span>
        <span><strong>Fecha:</strong> {tuto.fecha}</span>
        <span><strong>Categoría:</strong> {tuto.categoria}</span>
      </div>

      {tuto.imagen && (
        <img src={tuto.imagen} alt={tuto.titulo} className="tutorial-image-full" />
      )}

      <div
        className="tutorial-content"
        dangerouslySetInnerHTML={{ __html: tuto.contenido }}
      />
    </div>
  );
}

export default TutorialView;
