import { Link } from "react-router-dom";
import "../styles/Menu.css";

function Menu() {
  return (
    <header className="menu-header">
      <div className="menu-logo">
        <Link to="/">CODECAMPUS</Link>
      </div>

      <nav className="menu-nav">
        <Link to="/blog" className="menu-link">Blog</Link>
        <Link to="/tutoriales" className="menu-link">Tutoriales</Link>
        <Link to="/cursos" className="menu-link">Cursos</Link>
        <Link to="/foro" className="menu-link">Foro</Link>
      </nav>

      <div className="menu-actions">
        <Link to="/registro" className="menu-button">Registrarse</Link>
      </div>
    </header>
  );
}

export default Menu;
