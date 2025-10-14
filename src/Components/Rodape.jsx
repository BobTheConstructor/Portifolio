import { ArrowUp } from "lucide-react";
import { cn } from "../lib/utils";

export const Rodape = () => {
  return (
    <footer className="py-10 bg-card relative border-t border-border mt-12 pt-8  justify-center items-center">
      <div className="grid grid-cols-1">
        <a
          href="#hero"
          className={cn(
            "w-full flex items-center justify-center gap-3 text-primary hover:text-primary/80"
          )}
        >
          Voltar Ao Topo <ArrowUp />
        </a>
        <p className="text-sm text-muted-foreground mt-5">
          {" "}
          &copy; {new Date().getFullYear()} YuriDevops.co Todos os direitos
          reservados
        </p>
      </div>
    </footer>
  );
};
