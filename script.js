const perguntas = [
  {

    pergunta: "Qual linguagem é responsável pela estrutura da página web?",
    alternativas: [
        "CSS",
        "HTML",
        "JS",
        "Python",

    ],
    correta: 1
  },

   {

    pergunta: "Qual linguagem usamos para estilizar uma página?",
    alternativas: [
        "HTML",
        "Java",
        "CSS",
        "Python",

    ],
    correta: 2
  },

   {

    pergunta: "Qual linguagem permite adicionar interatividade a uma página?",
    alternativas: [
        "JS",
        "HTML",
        "CSS",
        "SQL",

    ],
    correta: 0
  },

   {

    pergunta: "Qual evento ocorre quando o usuário clica em um elemento?",
    alternativas: [
        "mouseover",
        "click",
        "load",
        "change",

    ],
    correta: 1
  },

  {

  pergunta: "Qual comando pode localizar um elemento pelo seu ID?",
    alternativas: [
        "document.getElementById()",
        "cosole.log()",
        "alert()",
        "document.write()",

    ],
    correta: 0
  },


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