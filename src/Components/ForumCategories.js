import { Link } from "react-router-dom";
import "./../styles/ForumCategories.css";

function ForumCategories() {
  const categorias = [
    "JavaScript",
    "React",
    "HTML",
    "CSS",
    "Herramientas",
    "Buenas prácticas"
  ];

  return (
    <section className="categories-container">
      <h2 className="categories-title">Categorías del Foro</h2>

      <ul className="categories-list">
        {categorias.map((cat, index) => (
          <li key={index} className="category-item">
            <Link to="/foro" className="category-link">
              {cat}
            </Link>
          </li>
        ))}
      </ul>

      <div className="categories-navigation">
        <Link to="/foro" className="categories-button">
          ← Volver al foro
        </Link>
      </div>
    </section>
  );
}

export default ForumCategories;
