import { useState } from "react";
import "../styles/Registro.css";

function Registro() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registrar = (e) => {
    e.preventDefault();

    if (!nombre || !email || !password) {
      alert("Por favor llena todos los campos.");
      return;
    }

    const usuario = { nombre, email, password };

    // Guardar en localStorage
    localStorage.setItem("usuario", JSON.stringify(usuario));

    alert("Registro exitoso. ¡Bienvenido a CodeCampus!");

    // Limpiar
    setNombre("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="registro-container">
      <h1 className="registro-title">Crear cuenta</h1>
      <p className="registro-subtitle">Regístrate para acceder a CodeCampus</p>

      <form className="registro-form" onSubmit={registrar}>
        <label>Nombre</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Tu nombre"
        />

        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="correo@ejemplo.com"
        />

        <label>Contraseña</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="********"
        />

        <button className="registro-btn" type="submit">
          Registrarme
        </button>
      </form>
    </div>
  );
}

export default Registro;
