import "../styles/Cursos.css";

function Cursos() {
  const categorias = [
    {
      nombre: "Desarrollo Web",
      cursos: [
        {
          titulo: "HTML & CSS – Curso completo",
          descripcion: "Aprende HTML y CSS desde cero con proyectos reales.",
          videoId: "1Rs2ND1ryYc", 
        },
        {
          titulo: "JavaScript – Curso completo",
          descripcion: "Curso completo de JavaScript moderno.",
          videoId: "PkZNo7MFNFg", 
        },
        {
          titulo: "React – Curso completo",
          descripcion: "Aprende React paso a paso con proyectos.",
          videoId: "bMknfKXIFA8", 
        },
        {
          titulo: "Node.js – Curso completo",
          descripcion: "Backend con Node.js, Express y APIs.",
          videoId: "Oe421EPjeBE", 
        },
      ],
    },

    {
      nombre: "Desarrollo de Videojuegos",
      cursos: [
        {
          titulo: "Unity – Curso completo",
          descripcion: "Aprende a crear videojuegos en Unity desde cero.",
          videoId: "IlKaB1etrik", 
        },
        {
          titulo: "Godot Engine – Curso completo",
          descripcion: "Curso completo de Godot para crear juegos 2D.",
          videoId: "XgK4Zz6Jd2E", 
        },
        {
          titulo: "Unreal Engine – Curso completo",
          descripcion: "Aprende Unreal Engine para juegos AAA.",
          videoId: "zJ2Z8gZ9Q2I", 
        },
      ],
    },

    {
      nombre: "Inteligencia Artificial",
      cursos: [
        {
          titulo: "Python para IA – Curso completo",
          descripcion: "Aprende Python enfocado en IA y análisis de datos.",
          videoId: "rfscVS0vtbw", 
        },
        {
          titulo: "Machine Learning – Curso completo",
          descripcion: "Curso completo de Machine Learning desde cero.",
          videoId: "Gv9_4yMHFhI", 
        },
        {
          titulo: "Redes Neuronales – Explicación visual",
          descripcion: "Entiende redes neuronales con visualizaciones.",
          videoId: "aircAruvnKk", 
        },
      ],
    },

    {
      nombre: "Programación General",
      cursos: [
        {
          titulo: "Git & GitHub – Curso completo",
          descripcion: "Aprende control de versiones profesional.",
          videoId: "RGOj5yH7evk", 
        },
        {
          titulo: "Lógica de Programación",
          descripcion: "Aprende a pensar como programador.",
          videoId: "QX8IYb8Z1W0", 
        },
        {
          titulo: "Python – Curso completo",
          descripcion: "Curso completo de Python para principiantes.",
          videoId: "kqtD5dpn9C8", 
        },
      ],
    },
  ];

  return (
    <div className="cursos-container">
      <h1 className="cursos-title">Cursos en Video</h1>
      <p className="cursos-subtitle">
        Aprende programación con cursos gratuitos organizados por categorías.
      </p>

      {categorias.map((cat, index) => (
        <div key={index} className="categoria-bloque">
          <h2 className="categoria-titulo">{cat.nombre}</h2>

          <div className="cursos-grid">
            {cat.cursos.map((curso, i) => (
              <div key={i} className="curso-card">
                <iframe
                  src={`https://www.youtube.com/embed/${curso.videoId}`}
                  title={curso.titulo}
                  allowFullScreen
                  className="curso-video"
                ></iframe>

                <h3>{curso.titulo}</h3>
                <p>{curso.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cursos;
