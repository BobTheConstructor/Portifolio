import { TrocaTema } from "@/Components/ThemeToggle";
import { StarBackground } from "@/Components/StarBackground";
import { NavBar } from "@/Components/NavBar";
import { HeroSection } from "../Components/HeroSection";
import { SobreSetcion } from "../Components/SobreSection";
import { HabilidadeSection } from "../Components/HabilidadeSection";
import { ProjectSection } from "../Components/ProjectSection";
import { ContatoSection } from "../Components/ContatoSection";
import { Rodape } from "../Components/Rodape";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Transição de temas */}
      {/* Efeitos de Fundo  */}
      <StarBackground />
      {/* NavBar  */}
      <NavBar />
      {/* Conteudo Principal  */}
      <main>
        <HeroSection />
        <SobreSetcion />
        <HabilidadeSection />
        <ProjectSection />
        <ContatoSection />
      </main>
      {/* Rodape ( Footer ) */}
      <Rodape />
    </div>
  );
};
