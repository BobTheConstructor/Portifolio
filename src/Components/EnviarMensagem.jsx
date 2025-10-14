import { useState } from "react";
import { Send } from "lucide-react";
import emailjs from "@emailjs/browser";

export const EnviarEmail = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    setLoading(true);

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };

    emailjs
      .send(
        "service_uilynsk",
        "template_54g26t8",
        templateParams,
        "bIMQxsytN_XPT1r7t"
      )
      .then(
        () => {
          setTimeout(() => {
            alert("Mensagem enviada com sucesso!");
            setLoading(false);
          }, 1500);
          setName("");
          setEmail("");
          setMessage("");
        },
        (err) => {
          alert("Erro ao enviar mensagem");
          console.log("Erro ao enviar email", err);
        }
      );
  }

  return (
    <div className="bg-card p-8 rounded-lg shadow-xs" onSubmit={sendEmail}>
      <h3 className="text-2xl font-semibold mb-6"> Envie uma Mensagem</h3>
      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Nome
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outlind-hidden focus:ring-2 focus:ring-primary"
            placeholder="Yuri Costa..."
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outlind-hidden focus:ring-2 focus:ring-primary"
            placeholder="exemplo@gmail.com"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Mensagem
          </label>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outlind-hidden focus:ring-2 focus:ring-primary resize-none"
            placeholder="Ola, Eu gostaria de..."
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="cosmic-button w-full flex items-center justify-center gap-2 "
        >
          {loading ? (
            <span className="contornotexto">Enviando...</span>
          ) : (
            <span className="contornotexto">Enviar Mensagem</span>
          )}
          <Send size={16} className="contornotexto" />
        </button>
      </form>
    </div>
  );
};
