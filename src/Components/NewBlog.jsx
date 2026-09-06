import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Blog.css";

function NewBlog({ agregarArticulo }) {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [fecha, setFecha] = useState("2026");
  const [resumen, setResumen] = useState("");
  const [imagen, setImagen] = useState("");
  const [contenido, setContenido] = useState("");
  const [categoria, setCategoria] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevoArticulo = {
      titulo,
      autor,
      fecha,
      resumen,
      imagen,
      contenido,
      categoria
    };

    agregarArticulo(nuevoArticulo);
    navigate("/blog");
  };

  return (
    <div className="blog-container">
      <h1 className="blog-title">Crear nuevo artículo</h1>

      <form className="blog-form" onSubmit={handleSubmit}>
        <input className="blog-input" placeholder="Título" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
        <input className="blog-input" placeholder="Autor" value={autor} onChange={(e) => setAutor(e.target.value)} />
        <input className="blog-input" placeholder="Imagen (URL)" value={imagen} onChange={(e) => setImagen(e.target.value)} />
        <input className="blog-input" placeholder="Categoría" value={categoria} onChange={(e) => setCategoria(e.target.value)} />
        <input className="blog-input" placeholder="Resumen" value={resumen} onChange={(e) => setResumen(e.target.value)} />

        <textarea
          className="blog-input"
          placeholder="Contenido HTML (puedes usar <p>, <h2>, <strong>, <ul>, etc.)"
          value={contenido}
          onChange={(e) => setContenido(e.target.value)}
        />

        <button className="blog-btn">Publicar artículo</button>
      </form>
    </div>
  );
}

export default NewBlog;
