const perguntas = [
  {

    pergunta: "Qual é o nome da Terra onde os Illuminati aparecem em Doutor Estranho no Multiverso da Loucura?",
    alternativas: [
        "Terra-616",
        "Terra-838",
        "Terra-199999",
        "Terra-42",

    ],
    correta: 1
  },

   {

    pergunta: "Qual é o nome da Terra principal do Universo Marvel?",
    alternativas: [
        "Terra-616",
        "Terra-838",
        "Terra-42",
        "Terra-199999",

    ],
    correta: 0
  },

  {

    pergunta: "Qual personagem da Terra-838 usa a cadeira flutuante durante a reunião dos Illuminati?",
    alternativas: [
        "Barão Mordo",
        "Professor Xavier",
        "Reed Richards",
        "Capitã Carter",

    ],
    correta: 0
  },

 {

    pergunta: "Qual era a função principal da TVA antes dos acontecimentos envolvendo Loki?",
    alternativas: [
        "Proteger a Terra-616",
        "Controlar as Joias do Infinito",
        "Impedir ramificações da linha do tempo",
        "Caçar variantes de Kang",

    ],
    correta: 2
  },

  {

    pergunta: "Qual é o nome da entidade que vive no final do tempo na série Loki?",
    alternativas: [
        "Kang",
        "Aquele Que Permanece",
        "Alioth",
        "Victor Timely",

    ],
    correta: 1
  },

  {

    pergunta: "Qual organização monitora as linhas do tempo em Loki?",
    alternativas: [
        "S.H.I.E.L.D.",
        "AVT",
        "Wakanda",
        "Kamar-Taj",

    ],
    correta: 1
  },

  {

    pergunta: "Qual personagem é uma variante de Loki?",
    alternativas: [
        "Sylvie",
        "Dormammu",
        "Jean Gray",
        "Nebulosa",

    ],
    
    correta: 0
  }

];

let perguntaAtual = 0;
let pontos = 0;


function mostrarPergunta() {

    const pergunta = perguntas[perguntaAtual];

    document.getElementById("pergunta").textContent =
      pergunta.pergunta;

    const alternativas = document.getElementById("alternativas");

    alternativas.innerHTML = "";

    pergunta.alternativas.forEach((alternativa, indice) => {

        const botao = document.createElement("button");

        botao.textContent = alternativa;

        botao.onclick = function () {
            verificarResposta(indice);

        };

        alternativas.appendChild(botao);
    });

}


function verificarResposta(indice) {

    if(indice === perguntas[perguntaAtual].correta) {
        pontos++;
    }

    perguntaAtual++;

    if(perguntaAtual < perguntas.length) {

        mostrarPergunta();

    } else {

        mostrarResultado();

    }

}


function mostrarResultado() {

    document.getElementById("pergunta").textContent =
    "Quiz finalizado!";

    document.getElementById("alternativas").innerHTML = "";

    document.getElementById("resultado").textContent =
    "Você acertou " + pontos +
    " de " + perguntas.length + " perguntas.";

}


mostrarPergunta();