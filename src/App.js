import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Menu from "./Components/Menu";
import Banner from "./Components/Banner";

import Home from "./Components/Home";
import Blog from "./Components/Blog";
import NewBlog from "./Components/NewBlog";
import BlogView from "./Components/BlogView";
import TutorialList from "./Components/TutorialList";
import TutorialView from "./Components/TutorialView";
import Cursos from "./Components/Cursos";
import Registro from "./Components/Registro";

import Forum from "./Components/Forum";
import NewQuestion from "./Components/NewQuestion";
import QuestionView from "./Components/QuestionView";

function App() {

  const [articulos, setArticulos] = useState([
    {
      titulo: "¿Cuál es el mejor lenguaje para empezar?",
      autor: "Armando López",
      resumen: "JavaScript es la opción más flexible para iniciar en programación.",
      imagen: "",
      contenido: `
        <p>Si estás iniciando en programación, <strong>JavaScript</strong> es la opción más flexible.</p>
        <p>Funciona en:</p>
        <ul>
          <li>Desarrollo web</li>
          <li>Backend con Node.js</li>
          <li>Aplicaciones móviles</li>
          <li>Videojuegos</li>
        </ul>
      `,
      categoria: "Lenguajes",
      fecha: "2026",
    },
    {
      titulo: "La computadora ideal para programar",
      autor: "Armando López",
      resumen: "No necesitas una máquina gamer para programar.",
      imagen: "",
      contenido: `
        <p>Un buen procesador (Ryzen 5 o i5), 16GB de RAM y SSD son suficientes para programar sin problemas.</p>
      `,
      categoria: "Hardware",
      fecha: "2026",
    },
    {
      titulo: "¿Frontend o Backend? ¿Cuál elegir?",
      autor: "Armando López",
      resumen: "Ambas áreas tienen alta demanda y caminos distintos.",
      imagen: "",
      contenido: `
        <p>Frontend se enfoca en interfaces y diseño.</p>
        <p>Backend trabaja con lógica, bases de datos y servidores.</p>
      `,
      categoria: "Carrera",
      fecha: "2026",
    },
    {
      titulo: "¿Qué es la inteligencia artificial en programación?",
      autor: "Armando López",
      resumen: "La IA permite automatizar tareas y crear apps inteligentes.",
      imagen: "",
      contenido: `
        <p>La IA permite automatizar tareas, generar código y crear aplicaciones más inteligentes.</p>
      `,
      categoria: "Tecnología",
      fecha: "2026",
    },
    {
      titulo: "Cómo aprender programación más rápido",
      autor: "Armando López",
      resumen: "Practica todos los días y crea proyectos pequeños.",
      imagen: "",
      contenido: `
        <p>Practica todos los días, crea proyectos pequeños y usa plataformas como CodeCampus.</p>
      `,
      categoria: "Aprendizaje",
      fecha: "2026",
    },
  ]);

  const agregarArticulo = (art) => {
    setArticulos([...articulos, art]);
  };

  const borrarArticulo = (id) => {
    const copia = [...articulos];
    copia.splice(id, 1);
    setArticulos(copia);
  };

  const [preguntas, setPreguntas] = useState([]);

  const agregarPregunta = (p) => setPreguntas([...preguntas, p]);

  const agregarRespuesta = (id, respuesta) => {
    const copia = [...preguntas];
    copia[id].respuestas.push(respuesta);
    setPreguntas(copia);
  };

  return (
    <BrowserRouter>
      <Menu />
      <Banner />
      
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/blog" element={<Blog articulos={articulos} />} />
        <Route path="/blog/nuevo" element={<NewBlog agregarArticulo={agregarArticulo} />} />
        <Route
          path="/blog/:id"
          element={
            <BlogView
              articulos={articulos}
              borrarArticulo={borrarArticulo}
            />
          }
        />

        <Route path="/tutoriales" element={<TutorialList />} />
        <Route path="/tutorial/:id" element={<TutorialView />} />

        <Route path="/cursos" element={<Cursos />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/foro" element={<Forum preguntas={preguntas} />} />
        <Route path="/foro/nueva" element={<NewQuestion agregarPregunta={agregarPregunta} />} />
        <Route
          path="/foro/:id"
          element={
            <QuestionView
              preguntas={preguntas}
              agregarRespuesta={agregarRespuesta}
            />
          }
        />
      </Routes>

      <footer className="home-footer">
  <div className="footer-content">

    <div className="footer-section">
      <h4>Sobre CODECAMPUS</h4>
      <p>
        CODECAMPUS es una plataforma educativa diseñada para ayudarte a
        aprender programación web de manera clara, práctica y guiada.
      </p>
    </div>

    <div className="footer-section">
      <h4>Recursos</h4>
      <ul>
        <li><a href="/tutoriales">Tutoriales</a></li>
        <li><a href="/blog">Blog</a></li>
      </ul>
    </div>

    <div className="footer-section">
      <h4>Comunidad</h4>
      <ul>
        <li><a href="/foro">Participa en el foro</a></li>
      </ul>
    </div>

    <div className="footer-section">
      <h4>Legal</h4>
      <ul>
        <li>Términos y condiciones</li>
        <li>Política de privacidad</li>
      </ul>
    </div>

  </div>

  <div className="footer-bottom">
    © 2026 CODECAMPUS — Todos los derechos reservados
  </div>
</footer>

    </BrowserRouter>
  );
}

export default App;
