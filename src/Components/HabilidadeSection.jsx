import { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
  // Frontend
  {
    name: "HTML",
    level: "Avançado",
    poder: 3,
    category: "Frontend",
    icon: "html5",
  },
  {
    name: "CSS",
    level: "Avançado",
    poder: 3,
    category: "Frontend",
    icon: "css",
  },
  {
    name: "JavaScript",
    level: "Avançado",
    poder: 3,
    category: "Frontend",
    icon: "javascript",
  },
  {
    name: "React",
    level: "Intermediario",
    poder: 2,
    category: "Frontend",
    icon: "react",
  },
  {
    name: "React Native",
    level: "Intermediario",
    poder: 2,
    category: "Frontend",
    icon: "reactnative",
  },

  // Backend
  {
    name: "Node.js",
    level: "Intermediario",
    poder: 2,
    category: "Backend",
    icon: "nodejs",
  },
  {
    name: "Python",
    level: "Intermediario",
    poder: 2,
    category: "Backend",
    icon: "python",
  },
  {
    name: "Pandas",
    level: "Intermediario",
    poder: 2,
    category: "Backend",
    icon: "pandas",
  },
  { name: "C", level: "Iniciante", poder: 1, category: "Backend", icon: "c" },
  {
    name: "SQL",
    level: "Iniciante",
    poder: 1,
    category: "Backend",
    icon: "mysql",
  },

  // Ferramentas
  {
    name: "Git",
    level: "Intermediario",
    poder: 2,
    category: "Ferramentas",
    icon: "git",
  },
  {
    name: "Figma",
    level: "Iniciante",
    poder: 1,
    category: "Ferramentas",
    icon: "figma",
  },
  {
    name: "VS Code",
    level: "Intermediario",
    poder: 2,
    category: "Ferramentas",
    icon: "vscode",
  },
  {
    name: "Axios",
    level: "Iniciante",
    poder: 1,
    category: "Ferramentas",
    icon: "Axios",
  },
  {
    name: "TailwindCss",
    level: "Intermediario",
    poder: 2,
    category: "Ferramentas",
    icon: "tailwindcss",
  },
  {
    name: "Styled Components",
    level: "Intermediario",
    poder: 2,
    category: "Ferramentas",
    icon: "styledcomponents",
  },
  {
    name: "Excel",
    level: "Intermediario",
    poder: 2,
    category: "Ferramentas",
    icon: "excel",
  },
  {
    name: "PowerBI",
    level: "Iniciante",
    poder: 1,
    category: "Ferramentas",
    icon: "powerbi",
  },
];

const categorias = ["Todos", "Frontend", "Backend", "Ferramentas"];

const cores = {
  1: "bg-green-500", // Iniciante
  2: "bg-yellow-500", // Intermediário
  3: "bg-red-500", // Avançado
};

export const HabilidadeSection = () => {
  const [categoriaAtiva, setCategoriaAtiva] = useState("Todos");

  const filtroSkills = skills.filter(
    (skill) => categoriaAtiva === "Todos" || skill.category === categoriaAtiva
  );

  return (
    <section id="habilidades" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Minhas <span className="text-primary"> Habilidades</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categorias.map((categ, key) => (
            <button
              key={key}
              onClick={() => setCategoriaAtiva(categ)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                categoriaAtiva === categ
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bd-secondary"
              )}
            >
              <span className="contornotexto">{categ}</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtroSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card pb-6 pt-6 pl-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4 flex items-center justify-between">
                <h3 className="font-semibold text-lg"> {skill.name} </h3>
                <span className="text-sm text-muted-foreground mr-4">
                  {skill.level}
                </span>
              </div>
              <div className="flex items-center justify-between mt-2">
                <img
                  src={`Icones/${skill.icon.toLowerCase()}.svg`}
                  className="w-10 h-10 bg-white/10 rounded-sm"
                />
                <div className="flex mr-4 gap-2">
                  {[1, 2, 3].map((bola) => (
                    <span
                      key={bola}
                      className={cn(
                        "w-4 h-4 rounded-full",
                        bola <= skill.poder ? cores[skill.poder] : "bg-gray-300"
                      )}
                    ></span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
