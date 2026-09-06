import "../styles/TutorialList.css";

function TutorialList() {
  const categorias = [
    {
      nombre: "Desarrollo Web",
      temas: [
        "HTML básico",
        "CSS desde cero",
        "JavaScript esencial",
        "React paso a paso",
        "Node.js para principiantes",
        "Git & GitHub",
        "Diseño responsive",
        "APIs REST",
        "JSON",
        "Bootstrap / Tailwind",
      ],
    },
    {
      nombre: "Backend",
      temas: [
        "Node.js",
        "Express",
        "Bases de datos SQL",
        "MongoDB",
        "Autenticación JWT",
        "Creación de APIs",
      ],
    },
    {
      nombre: "Programación General",
      temas: [
        "Lógica de programación",
        "Python desde cero",
        "Java básico",
        "C++",
        "C#",
        "POO",
        "Algoritmos y estructuras de datos",
      ],
    },
    {
      nombre: "Inteligencia Artificial",
      temas: [
        "Python para IA",
        "Machine Learning",
        "Redes neuronales",
        "IA generativa",
        "Data Science",
        "Pandas / NumPy",
      ],
    },
    {
      nombre: "Desarrollo de Videojuegos",
      temas: [
        "Unity",
        "Godot",
        "Unreal Engine",
        "Físicas en videojuegos",
        "Diseño de niveles",
      ],
    },
    {
      nombre: "Ciberseguridad",
      temas: [
        "Seguridad web",
        "Ethical hacking",
        "Redes",
        "Linux básico",
        "OSINT",
      ],
    },
    {
      nombre: "Desarrollo Móvil",
      temas: [
        "Flutter",
        "React Native",
        "Android Studio",
        "Swift básico",
      ],
    },
  ];

  return (
    <div className="tutoriales-container">
      <h1 className="tutoriales-title">Listado de Tutoriales</h1>
      <p className="tutoriales-subtitle">
        Aprende programación con tutoriales organizados por categorías.
      </p>

      {categorias.map((cat, index) => (
        <div key={index} className="tutorial-bloque">
          <h2 className="tutorial-categoria">{cat.nombre}</h2>

          <ul className="tutorial-lista">
            {cat.temas.map((tema, i) => (
              <li key={i} className="tutorial-item">
                {tema}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default TutorialList;
