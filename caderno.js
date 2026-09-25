const questions = [
  {
    question: "O que muda quando Brás Cubas narra a própria vida depois de morto?",
    options: ["A narração passa a ser neutra, pois o narrador não participa mais dos acontecimentos.", "O narrador ganha liberdade para reorganizar lembranças e falar diretamente com o leitor, sem deixar de ser parcial.", "A história deixa de tratar da sociedade e passa a ser apenas fantástica.", "Os acontecimentos são narrados por um personagem diferente em cada capítulo."],
    answer: 1,
    feedback: "A posição de ‘defunto autor’ permite a Brás brincar com a forma e com o leitor. A morte não o torna imparcial: ele continua escolhendo como apresentar a própria vida."
  },
  {
    question: "Por que o começo pelo fim é importante para a leitura do romance?",
    options: ["Porque a ordem das lembranças acompanha exatamente a cronologia da vida de Brás.", "Porque o romance revela primeiro o desfecho e depois reconstrói a vida em lembranças que avançam e se desviam.", "Porque Brás só recorda os acontecimentos depois de conhecer o resultado de cada eleição.", "Porque o livro apresenta duas histórias paralelas que nunca se encontram."],
    answer: 1,
    feedback: "Brás abre a narrativa com sua morte e depois percorre episódios da vida sem seguir uma linha cronológica rígida. A forma fragmentada faz parte do sentido do livro."
  },
  {
    question: "Qual atitude do narrador nos leva a desconfiar da versão que ele conta?",
    options: ["Ele admite que suas lembranças podem ser incompletas, mas nunca comenta o leitor.", "Ele descreve os outros com neutralidade e evita falar de si.", "Ele interrompe a narrativa, muda de assunto e tenta conduzir a impressão do leitor sobre suas escolhas.", "Ele conta somente acontecimentos que presenciou na infância."],
    answer: 2,
    feedback: "Brás chama o leitor, faz digressões e comenta o próprio relato. Esse controle da narrativa permite perceber contradições entre a imagem que deseja construir e o que suas lembranças deixam escapar."
  },
  {
    question: "O que a relação entre Brás Cubas e Virgília revela sobre o romance?",
    options: ["O amor dos dois acontece fora das convenções sociais e não afeta suas posições públicas.", "A relação é atravessada pelo casamento de Virgília com Lobo Neves e por interesses de prestígio e posição social.", "Virgília abandona toda vida social para viver isolada com Brás.", "Brás e Virgília só se conhecem depois da morte dele."],
    answer: 1,
    feedback: "Virgília se casa com Lobo Neves, mas mantém um caso com Brás. A trama liga desejo, casamento, reputação e ambição social."
  },
  {
    question: "Que leitura crítica pode ser feita da cena de Prudêncio?",
    options: ["Ela mostra que Brás, já adulto, reconhece e repara todas as violências de sua infância.", "Ela transforma a escravidão em um detalhe sem relação com os privilégios de Brás.", "Ela expõe a violência escravista e a distância entre a leveza do relato de Brás e a brutalidade vivida por pessoas escravizadas.", "Ela demonstra que a escravidão havia sido abolida quando a história acontece."],
    answer: 2,
    feedback: "A lembrança de Prudêncio, tratado como objeto na infância de Brás, retorna em uma cena de violência contra outra pessoa escravizada. A escravidão só seria abolida no Brasil em 1888."
  },
  {
    question: "Qual é o papel do Humanitismo, apresentado por Quincas Borba?",
    options: ["É um código jurídico que organiza as eleições do Império.", "É uma doutrina fictícia que permite satirizar sistemas filosóficos e discursos que justificam a competição e o poder.", "É o nome científico dado à doença que mata Brás Cubas.", "É uma teoria romântica sobre a idealização do amor."],
    answer: 1,
    feedback: "O Humanitismo é uma filosofia inventada dentro do romance. Seu tom grandioso e suas contradições abrem espaço para a sátira de explicações que naturalizam a disputa e a dominação."
  },
  {
    question: "Por que o romance é estudado junto ao Realismo, mas também desafia uma classificação simples?",
    options: ["Porque observa interesses sociais e contradições psicológicas, mas também expõe a ficção e brinca com a voz narrativa.", "Porque descreve a natureza com precisão científica e não apresenta narrador.", "Porque apresenta heróis idealizados e um amor sem conflitos.", "Porque foi escrito no século XVIII e pertence ao Arcadismo."],
    answer: 0,
    feedback: "A obra é frequentemente ensinada como marco do Realismo brasileiro por sua crítica social e psicológica. Ao mesmo tempo, sua metaficção e seu narrador intrusivo tensionam as convenções realistas."
  },
  {
    question: "Qual informação histórica ajuda a entender as relações sociais do livro?",
    options: ["A escravidão já havia sido abolida quando o livro saiu em 1881.", "O livro saiu em 1881, quando a escravidão ainda era legal no Brasil; a abolição ocorreu em 1888.", "A obra foi publicada depois da Proclamação da República, em 1889.", "O romance se passa no Brasil colonial do século XVI."],
    answer: 1,
    feedback: "A primeira edição em livro é de 1881. A Lei Áurea, que declarou extinta a escravidão no Brasil, foi assinada em 13 de maio de 1888."
  },
  {
    question: "O que o balanço final de Brás sugere quando ele considera positivo não ter tido filhos?",
    options: ["Um final triunfante em que ele prova ter realizado todos os seus projetos.", "Uma conclusão irônica e pessimista sobre a vida e sobre o legado que deixa.", "Uma promessa de que a história continuará com um novo protagonista.", "Uma reconciliação definitiva com Virgília."],
    answer: 1,
    feedback: "Brás encerra a autobiografia com uma conta paradoxal: sua falta de descendentes aparece como o único saldo positivo. O efeito é irônico e amargo."
  },
  {
    question: "Qual afirmação sobre a trajetória de Machado de Assis está correta?",
    options: ["Nasceu no Rio de Janeiro em 1839, trabalhou em jornais e escreveu em vários gêneros literários.", "Nasceu em Portugal no século XVIII e publicou apenas poesia.", "Começou a escrever depois da publicação de Memórias Póstumas, em 1881.", "Foi exclusivamente dramaturgo e nunca publicou romances."],
    answer: 0,
    feedback: "Joaquim Maria Machado de Assis nasceu no Rio em 1839. Foi jornalista, cronista, contista, romancista, poeta e dramaturgo; a Academia Brasileira de Letras registra essa trajetória."
  }
];

const app = document.getElementById("quiz-app");
const counter = document.getElementById("quiz-counter");
const progress = document.getElementById("progress-fill");
let current = 0;
let score = 0;
let answered = false;

function renderQuestion() {
  answered = false;
  const item = questions[current];
  counter.textContent = `Questão ${current + 1} de ${questions.length}`;
  progress.style.width = `${((current + 1) / questions.length) * 100}%`;
  app.innerHTML = `<h2 class="quiz-question"></h2><div class="quiz-options"></div><div class="quiz-feedback" id="quiz-feedback" hidden></div><div class="quiz-controls"><span class="quiz-score">Acertos: ${score}</span><button class="quiz-next" id="quiz-next" type="button" disabled>${current === questions.length - 1 ? "Ver resultado" : "Próxima questão"} →</button></div>`;
  app.querySelector(".quiz-question").textContent = item.question;
  const options = app.querySelector(".quiz-options");
  item.options.forEach((text, index) => {
    const button = document.createElement("button");
    button.className = "quiz-option";
    button.type = "button";
    button.innerHTML = `<span class="option-letter">${String.fromCharCode(65 + index)}</span><span></span>`;
    button.querySelector("span:last-child").textContent = text;
    button.addEventListener("click", () => chooseAnswer(index, button));
    options.appendChild(button);
  });
  app.querySelector("#quiz-next").addEventListener("click", () => {
    if (!answered) return;
    current += 1;
    current < questions.length ? renderQuestion() : renderResult();
  });
}

function chooseAnswer(index, selectedButton) {
  if (answered) return;
  answered = true;
  const item = questions[current];
  const optionButtons = [...app.querySelectorAll(".quiz-option")];
  optionButtons.forEach((button, optionIndex) => {
    button.disabled = true;
    if (optionIndex === item.answer) button.classList.add("correct");
  });
  const isCorrect = index === item.answer;
  if (isCorrect) score += 1;
  if (!isCorrect) selectedButton.classList.add("wrong");
  const feedback = app.querySelector("#quiz-feedback");
  feedback.hidden = false;
  feedback.innerHTML = `<strong>${isCorrect ? "Resposta correta." : "Vamos rever."}</strong><span></span>`;
  feedback.querySelector("span").textContent = item.feedback;
  app.querySelector(".quiz-score").textContent = `Acertos: ${score}`;
  app.querySelector("#quiz-next").disabled = false;
}

function renderResult() {
  counter.textContent = "Fim do quiz";
  progress.style.width = "100%";
  const percent = Math.round((score / questions.length) * 100);
  const message = score === questions.length
    ? "Leitura atenta: você percebeu as estratégias do narrador e os conflitos da obra."
    : score >= 7
      ? "Boa leitura. Reveja as questões erradas e repare como a forma do romance participa da crítica."
      : "Vale voltar a algumas seções do hub. Observe quem narra, o que ele omite e o contexto social das cenas.";
  app.innerHTML = `<div class="quiz-result"><p class="eyebrow"><span></span> resultado</p><h2>Seu saldo<br><em>de leitura.</em></h2><strong class="result-score">${score}/${questions.length}</strong><p></p><button class="quiz-next" id="restart-quiz" type="button">Refazer o quiz ↻</button></div>`;
  app.querySelector(".quiz-result p:not(.eyebrow)").textContent = message;
  app.querySelector("#restart-quiz").addEventListener("click", () => { current = 0; score = 0; renderQuestion(); });
}

renderQuestion();
