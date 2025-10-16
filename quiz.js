// ================================
// QUIZ: Compreendendo as Equipes de Trabalho
// ================================

const quizData = [
  { question: "1️⃣ Qual é o principal foco do trabalho em equipe nas organizações?",
    options: [
      "O crescimento individual dos membros",
      "O crescimento da organização como um todo",
      "Evitar conflitos entre colegas",
      "Aumentar o salário dos líderes"
    ],
    answer: 1
  },
  { question: "2️⃣ O que diferencia um grupo de uma equipe?",
    options: [
      "A equipe busca objetivos individuais",
      "O grupo tem mais autonomia",
      "A equipe é um grupo maduro com metas compartilhadas",
      "O grupo tem mais responsabilidade"
    ],
    answer: 2
  },
  { question: "3️⃣ Qual tipo de equipe reúne pessoas de diferentes áreas?",
    options: [
      "Equipe multifuncional",
      "Equipe autogerenciada",
      "Equipe de solução de problemas",
      "Equipe virtual"
    ],
    answer: 0
  },
  { question: "4️⃣ O que a empresa deve fazer para formar equipes eficazes?",
    options: [
      "Investir em treinamentos e fortalecer habilidades",
      "Aumentar a carga de trabalho",
      "Substituir membros frequentemente",
      "Diminuir a autonomia da equipe"
    ],
    answer: 0
  },
  { question: "5️⃣ Qual destas é uma característica essencial de equipes eficazes?",
    options: [
      "Competição",
      "Persistência e ambição",
      "Indiferença",
      "Hierarquia rígida"
    ],
    answer: 1
  },
  { question: "6️⃣ Qual tipo de equipe trabalha sem líder direto?",
    options: [
      "Equipe de apoio",
      "Equipe autogerenciada",
      "Equipe operacional",
      "Equipe júnior"
    ],
    answer: 1
  },
  { question: "7️⃣ O que significa ser um bom ouvinte em uma equipe?",
    options: [
      "Ignorar sugestões dos colegas",
      "Entender objetivos e mediar conflitos",
      "Falar mais que os outros",
      "Focar apenas no próprio desempenho"
    ],
    answer: 1
  },
  { question: "8️⃣ Qual é o papel da criatividade em uma equipe?",
    options: [
      "Manter tarefas repetitivas",
      "Realizar o trabalho de forma inovadora e cativante",
      "Substituir o líder",
      "Evitar mudanças"
    ],
    answer: 1
  },
  { question: "9️⃣ O que fortalece o espírito de equipe?",
    options: [
      "Postura negativa",
      "Foco individual",
      "Atitude positiva e colaborativa",
      "Competição interna"
    ],
    answer: 2
  },
  { question: "🔟 Qual combinação de valores impulsiona o sucesso coletivo?",
    options: [
      "Persistência e ambição",
      "Crítica e indiferença",
      "Isolamento e orgulho",
      "Medo e dependência"
    ],
    answer: 0
  },
  { question: "1️⃣1️⃣ Qual característica define Vinicius segundo o perfil do grupo?",
    options: [
      "Ouvinte e analítico",
      "Ambicioso e criativo",
      "Observador e inovador",
      "Determinado e produtivo"
    ],
    answer: 0
  },
  { question: "1️⃣2️⃣ Quais traços principais são atribuídos a Vitor?",
    options: [
      "Criativo, positivo, produtivo e inovador",
      "Crítico e persistente",
      "Analítico e reservado",
      "Observador e incentivador"
    ],
    answer: 0
  },
  { question: "1️⃣3️⃣ Como Djavan é descrito no perfil da equipe?",
    options: [
      "Observador, determinado, responsável e incentivador",
      "Persistente e ambicioso",
      "Criativo e analítico",
      "Positivo e inovador"
    ],
    answer: 0
  },
  { question: "1️⃣4️⃣ Quais qualidades caracterizam Adriana?",
    options: [
      "Persistente, criativa, crítica e ambiciosa",
      "Produtiva e inovadora",
      "Observadora e analítica",
      "Disponível e positiva"
    ],
    answer: 0
  },
  { question: "1️⃣5️⃣ O que o grupo reconhece como essencial para evoluir no trabalho em conjunto?",
    options: [
      "Escuta ativa, criatividade e atitude positiva",
      "Competição interna",
      "Isolamento e foco individual",
      "Hierarquia rígida"
    ],
    answer: 0
  },
  { question: "1️⃣6️⃣ Qual combinação de traços fortalece o espírito da equipe apresentada?",
    options: [
      "Persistência, ambição e responsabilidade",
      "Indiferença e crítica",
      "Medo e dependência",
      "Orgulho e isolamento"
    ],
    answer: 0
  }
];

// ================================
// Lógica do Quiz
// ================================

const quizContainer = document.getElementById("quiz");
const feedback = document.getElementById("feedback");
const resultContainer = document.getElementById("result");
const progressBar = document.getElementById("progress");
const timerElement = document.getElementById("timer");

let currentQuestion = 0;
let score = 0;
let timer;
let timeLeft = 25; // Tempo total para responder

function loadQuestion() {
  feedback.textContent = "";
  resultContainer.innerHTML = "";
  timeLeft = 25;

  const questionData = quizData[currentQuestion];
  progressBar.style.width = `${((currentQuestion + 1) / quizData.length) * 100}%`;

  // Fade-out suave antes de trocar
  quizContainer.style.opacity = 0;

  setTimeout(() => {
    quizContainer.innerHTML = `
      <div class="question fade-in">${questionData.question}</div>
      <div class="options">
        ${questionData.options
          .map((option, i) => `<button data-index="${i}">${option}</button>`)
          .join("")}
      </div>
    `;

    document.querySelectorAll(".options button").forEach((btn, i) => {
      btn.addEventListener("click", () => checkAnswer(i, btn));
      setTimeout(() => btn.classList.add("show"), i * 150);
    });

    // Fade-in suave
    quizContainer.style.opacity = 1;
    startTimer();
  }, 400);
}

function startTimer() {
  clearInterval(timer);
  timerElement.textContent = `⏱️ Tempo restante: ${timeLeft}s`;

  timer = setInterval(() => {
    timeLeft--;
    timerElement.textContent = `⏱️ Tempo restante: ${timeLeft}s`;

    if (timeLeft <= 0) {
      clearInterval(timer);
      feedback.textContent = "⏳ Tempo esgotado!";
      showCorrectAnswer();
      setTimeout(nextQuestion, 6000);
    }
  }, 1000);
}

function checkAnswer(selected, button) {
  clearInterval(timer);
  const correct = quizData[currentQuestion].answer;
  const buttons = document.querySelectorAll(".options button");

  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === correct) btn.classList.add("correct", "pulse");
    if (i === selected && selected !== correct) btn.classList.add("wrong");
  });

  feedback.textContent = selected === correct
    ? "✅ Resposta correta!"
    : "❌ Resposta incorreta.";

  if (selected === correct) score++;

  setTimeout(nextQuestion, 6000); // Mais tempo antes de trocar
}

function showCorrectAnswer() {
  const correct = quizData[currentQuestion].answer;
  const correctButton = document.querySelectorAll(".options button")[correct];
  correctButton.classList.add("correct", "pulse");
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  quizContainer.innerHTML = "";
  feedback.textContent = "";
  timerElement.textContent = "";
  progressBar.style.width = "100%";

  const percent = Math.round((score / quizData.length) * 100);
  let msg;

  if (percent >= 90) msg = "🎉 Excelente! Espírito de equipe exemplar!";
  else if (percent >= 70) msg = "👏 Muito bom! Continue se aprimorando!";
  else msg = "💪 Continue praticando o trabalho em equipe!";

  resultContainer.innerHTML = `
    <h2>Você acertou ${score} de ${quizData.length} questões (${percent}%).</h2>
    <p>${msg}</p>
    <button class="restart-btn" onclick="restartQuiz()">🔁 Recomeçar</button>
  `;
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  loadQuestion();
}

// Inicializa o quiz
loadQuestion();
