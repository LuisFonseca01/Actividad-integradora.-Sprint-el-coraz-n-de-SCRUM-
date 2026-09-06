import { Link } from "react-router-dom";
import "../styles/Blog.css";

function Blog({ articulos }) {
  return (
    <div className="blog-container">
      <h1 className="blog-title">Artículos de Programación y Tecnología</h1>
      <p className="blog-subtitle">
        Mini artículos para aprender, mejorar y elegir tu camino en el mundo del desarrollo.
      </p>

      <div className="blog-grid">
        {articulos.map((art, index) => (
          <Link key={index} to={`/blog/${index}`} className="blog-card">
            {art.imagen && (
              <img src={art.imagen} alt={art.titulo} className="blog-thumb" />
            )}

            <h3>{art.titulo}</h3>
            <p>{art.resumen}</p>

            <div className="blog-meta">
              <span>{art.categoria}</span>
              <span>{art.fecha}</span>
            </div>
          </Link>
        ))}
      </div>

      <div className="blog-actions">
        <Link to="/blog/nuevo" className="blog-btn">
          Añadir nuevo blog
        </Link>
      </div>
    </div>
  );
}

export default Blog;
