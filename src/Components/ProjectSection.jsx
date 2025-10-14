import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: 1,
    title: "API GitHub",
    description: "Aplicação que retorna os dados de um usuário do GitHub",
    image: "Projetos/ApiGitgub.png",
    tags: ["Html5", "CSS", "JavaScript", "React", "StyledComponents", "Json"],
    gitUrl: "#",
  },
  {
    id: 2,
    title: "ooooooooohhhh aiaiaiai",
    description: "a que viria um lore impsun pra descrever o bgl",
    image: null,
    tags: ["React", "TailwindCSS", "supabase"],
    gitUrl: "#",
  },
  {
    id: 3,
    title: "oouh mulher",
    description: "a que viria um lore impsun pra descrever o bgl",
    image: null,
    tags: ["React", "TailwindCSS", "supabase"],
    gitUrl: "#",
  },
];

export const ProjectSection = () => {
  return (
    <section id="projetos" className="py-24 px-4 bgsection">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          Projetos <span className="text-primary"> Desenvolvidos</span>
        </h2>
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 xl:gap-50 lg:gap-15 justify-items-center">
          {projects.map((project, key) => (
            <a
              key={key}
              href={project.gitUrl}
              className="relative w-[350px] h-[200px] group overflow-hidden shadow-lg"
            >
              <div className="h-full w-full overflow-hidden border-1 border-primary-foreground/20 rounded-sm">
                {project.image === null ? (
                  <div className="w-full h-full flex justify-center items-center bg-black ">
                    <h1 className="relative w-full xl:text-md md:text-1xl text-4xl sm:tracking-[10px] tracking-[10px] uppercase text-center leading-[1em] outline-none animate-dimlight box-reflect">
                      Em Breve
                    </h1>
                  </div>
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                )}
              </div>
              <div
                className={cn(
                  "absolute inset-0 bg-black/60 text-white flex flex-col items-center justify-center text-center",
                  "opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                )}
              >
                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="p-1">
                  <div className="flex flex-wrap-reverse gap-2 mb-1">
                    {project.tags.map((tag) => (
                      <img
                        src={`Icones/${tag.toLowerCase()}.svg`}
                        className="w-9 h-9 bg-white/10 rounded-lg border-1 border-primary px-1 py-1"
                        alt={tag}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* <div className="flex justify-between items-center">
                <div className="flex space-x-3">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors durations-300"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.gitUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors durations-300"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div> */}
            </a>
          ))}
        </div>
      </div>
      <div className="text-center mt-12 ">
        <a
          className="cosmic-button w-fit flex items-center mx-auto gap-2"
          href="#"
          target="_blank"
        >
          <span className="contornotexto">Check My Github</span>{" "}
          <ArrowRight size={20} className="contornotexto" />
        </a>
      </div>
    </section>
  );
};
