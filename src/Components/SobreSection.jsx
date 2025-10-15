import { Code, ChartNetwork, Paintbrush } from "lucide-react";

export const SobreSetcion = () => {
  return (
    <section id="sobre" className="py-24 px-4 bgsection ">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Sobre <span className="text-primary"> Mim</span>
        </h2>

        <div className="grid grid-rows md:grid-cols-2 gap-12 items-center">
          <div className="space-y-1">
            <img
              src={"Perfil/Perfil.png"}
              alt="Perfil"
              className="h-50 w-50 border-primary/30 place-self-center border-1 rounded-full"
            />

            <p className="text-muted-foreground p-10 w-full text-center">
              Comecei minha jornada na programação em 2020 e, desde então, venho
              me dedicando ao desenvolvimento de aplicações web e mobile. Tenho
              experiência tanto no front-end quanto no back-end, criando
              interfaces modernas e responsivas, além de trabalhar com controle
              de versões e colaboração em projetos. Também atuo na área de
              análise de dados, utilizando ferramentas para transformar
              informações em insights valiosos. Estou sempre buscando aprender
              mais e entregar soluções eficientes e bem estruturadas.
            </p>
          </div>
          {/* cards */}
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                {/* icone */}
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                {/* texto */}
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> FullStackDeveloper</h4>
                  <p className="text-muted-foreground">
                    Desenvolvo aplicações completas, cuidando tanto do front-end
                    quanto do back-end.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <ChartNetwork className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Data Analytics</h4>
                  <p className="text-muted-foreground">
                    Trabalho com coleta, análise e interpretação de dados para
                    gerar insights estratégicos.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Paintbrush className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Designer</h4>
                  <p className="text-muted-foreground">
                    Crio interfaces visuais e experiências de usuário intuitivas
                    e atraentes para sites.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
