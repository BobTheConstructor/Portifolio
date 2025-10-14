import { ArrowDown, Linkedin, Instagram, Github, FileDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Yuri </span>
            <span className="opacity-0 animate-fade-in-delay-1">Costa</span>
          </h1>
          {/*testes foram feitos */}
          <div className="flex items-center justify-center p-1">
            <div className="w-max">
              <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-foreground pr-1 text-5xl font-semibold text-primary ">
                FullStack Developer
              </h1>
            </div>
          </div>
          {/* testes foram encerrados */}
          <button className="cosmic-button w-fit flex items-center mx-auto gap-2">
            <p className="contornotexto">Curriculo</p>
            <FileDown size={20} className="contornotexto" />
          </button>
          {/* links */}
          <div className="flex space-x-15 justify-center">
            <a href="#" target="_blank">
              <Linkedin
                size={35}
                className="border-1 p-1 border-blue-400 rounded-xl hover:border-foreground hover:bg-blue-400 text-blue-400 hover:bg-blue-400 hover:text-foreground"
              />
            </a>
            <a href="#" target="_blank">
              <Instagram
                size={35}
                className="border-1 p-1 hover:bg-purple-500 rounded-xl hover:border-foreground border-purple-500 text-purple-500 hover:text-foreground hover:bg-purple-500"
              />
            </a>
            <a href="#" target="_blank">
              <Github
                size={35}
                className="border-1 p-1 border-gray-400 rounded-xl hover:border-foreground hover:bg-gray-400 text-gray-400 hover:text-foreground hover:bg-gray-400"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Veja Mais</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
