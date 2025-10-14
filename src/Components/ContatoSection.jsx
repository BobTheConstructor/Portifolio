import { Mail, Phone, MapPin, Linkedin, Instagram, Github } from "lucide-react";
import { EnviarEmail } from "./EnviarMensagem";

export const ContatoSection = () => {
  return (
    <section id="contato" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text4xl font-bold text-center">
          Entre em <span className="text-primary"> Contato </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A reposta pode varias a depender do dia e hora
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center">
          <div className="space-y-15 flex flex-col gap-6 items-center ">
            <h3 className="text-2xl font-semibold mb-6">
              Informações de Contato
            </h3>
            {/*div base*/}
            <div className="space-y-6">
              {/* icone email */}
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                {/* palavra Email e o email */}
                <div>
                  <h4 className="font-medium"> Email</h4>
                  <a
                    href="mailto:yuric.oliveira@proton.me"
                    className="text-muted-foreground hover:text-primary transition-colors "
                  >
                    yuric.oliveira@proton.me
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium"> Whatsapp</h4>
                  <a
                    href="tel:+5521972541859"
                    className="text-muted-foreground hover:text-primary transition-colors "
                  >
                    &nbsp;&nbsp;&nbsp;+55 (21)
                    97254-1859&nbsp;&nbsp;&nbsp;&nbsp;
                  </a>
                </div>
              </div>
              <div className="flex justify-start space-x-4 place-content-center">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium"> Localização</h4>
                  <p className="text-muted-foreground hover:text-primary transition-colors ">
                    &nbsp;&nbsp;Rio de Janeiro, RJ, Brasil&nbsp;&nbsp;
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-1 mb-2">
              <h4 className="font-medium mb-4"> Redes Socias</h4>
              <div className="flex space-x-4 justify-center">
                <a href="#" target="_blank">
                  <Linkedin className="hover:text-primary" />
                </a>
                <a href="#" target="_blank">
                  <Instagram className="hover:text-primary" />
                </a>
                <a href="#" target="_blank">
                  <Github className="hover:text-primary" />
                </a>
              </div>
            </div>
          </div>
          <EnviarEmail />
        </div>
      </div>
    </section>
  );
};
