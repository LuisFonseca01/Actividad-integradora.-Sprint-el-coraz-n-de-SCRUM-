import { useParams, useNavigate } from "react-router-dom";
import "../styles/Blog.css";

function BlogView({ articulos, borrarArticulo }) {
  const { id } = useParams();
  const navigate = useNavigate();

  // Si el artículo NO existe → evitar error
  if (!articulos[id]) {
    return (
      <div className="blog-container">
        <h1 className="blog-title">Artículo no encontrado</h1>
        <p className="blog-subtitle">El artículo que buscas no existe.</p>

        <button className="blog-btn" onClick={() => navigate("/blog")}>
          Volver al blog
        </button>
      </div>
    );
  }

  const art = articulos[id];

  const eliminar = () => {
    borrarArticulo(id);
    navigate("/blog");
  };

  return (
    <div className="blog-container">
      <h1 className="blog-title">{art.titulo}</h1>

      <div className="blog-meta-full">
        <span><strong>Autor:</strong> {art.autor}</span>
        <span><strong>Fecha:</strong> {art.fecha}</span>
        <span><strong>Categoría:</strong> {art.categoria}</span>
      </div>

      {art.imagen && (
        <img src={art.imagen} alt={art.titulo} className="blog-image-full" />
      )}

      <div
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: art.contenido }}
      />

      <button className="blog-delete-btn" onClick={eliminar}>
        Borrar artículo
      </button>
    </div>
  );
}

export default BlogView;
