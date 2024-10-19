import { useEffect, useState } from "react";

export default function Greetings() {
  const allText = "Bem vindo ao meu mundo literário.";
  const [texto, setTexto] = useState("");
  function writingText() {
    for (const i in allText) {
      setTimeout(() => {
        setTexto((oldValue) => {
          return oldValue += allText[i];
        });
      }, 75 * i);
    }
  }
  useEffect(() => {
    writingText();
  }, []);
  return (
    <section id="greetings">
      <article>
        <h1>{texto}</h1>
        <p>
          Aqui você vai encontrar todos os livros que eu já li junto da minha
          humilde opinião sobre os mesmos. Lembrando que não sou nenhum expert
          literário, apenas um leitor comum! 😉
        </p>
        <p>Eu espero que você consiga tirar proveito de tudo!</p>
      </article>
    </section>
  );
}
