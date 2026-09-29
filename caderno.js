const questions = [
  {
    question: "O que muda quando Brás Cubas narra a própria vida depois de morto?",
    image: "assets/quiz-narrador-morto.webp",
    imageAlt: "Uma mão escreve com pena enquanto a sombra sobre o papel sugere uma figura reclinada.",
    options: ["A narração passa a ser neutra, pois o narrador não participa mais dos acontecimentos.", "O narrador ganha liberdade para reorganizar lembranças e falar diretamente com o leitor, sem deixar de ser parcial.", "A história deixa de tratar da sociedade e passa a ser apenas fantástica.", "Os acontecimentos são narrados por um personagem diferente em cada capítulo."],
    answer: 1,
    feedback: "A posição de ‘defunto autor’ permite a Brás brincar com a forma e com o leitor. A morte não o torna imparcial: ele continua escolhendo como apresentar a própria vida."
  },
  {
    question: "Por que o começo pelo fim é importante para a leitura do romance?",
    image: "assets/quiz-tempo-fragmentado.webp",
    imageAlt: "Um relógio antigo e páginas soltas formam um caminho circular em torno de um livro aberto.",
    options: ["Porque a ordem das lembranças acompanha exatamente a cronologia da vida de Brás.", "Porque o romance revela primeiro o desfecho e depois reconstrói a vida em lembranças que avançam e se desviam.", "Porque Brás só recorda os acontecimentos depois de conhecer o resultado de cada eleição.", "Porque o livro apresenta duas histórias paralelas que nunca se encontram."],
    answer: 1,
    feedback: "Brás abre a narrativa com sua morte e depois percorre episódios da vida sem seguir uma linha cronológica rígida. A forma fragmentada faz parte do sentido do livro."
  },
  {
    question: "Qual atitude do narrador nos leva a desconfiar da versão que ele conta?",
    image: "assets/quiz-narrador-duvidoso.webp",
    imageAlt: "Um homem escreve diante de um espelho cuja imagem parece contrariar sua postura.",
    options: ["Ele admite que suas lembranças podem ser incompletas, mas nunca comenta o leitor.", "Ele descreve os outros com neutralidade e evita falar de si.", "Ele interrompe a narrativa, muda de assunto e tenta conduzir a impressão do leitor sobre suas escolhas.", "Ele conta somente acontecimentos que presenciou na infância."],
    answer: 2,
    feedback: "Brás chama o leitor, faz digressões e comenta o próprio relato. Esse controle da narrativa permite perceber contradições entre a imagem que deseja construir e o que suas lembranças deixam escapar."
  },
  {
    question: "O que a relação entre Brás Cubas e Virgília revela sobre o romance?",
    image: "assets/quiz-desejo-status.webp",
    imageAlt: "Duas figuras se olham à distância, separadas por uma moldura de casamento e uma sombra social.",
    options: ["O amor dos dois acontece fora das convenções sociais e não afeta suas posições públicas.", "A relação é atravessada pelo casamento de Virgília com Lobo Neves e por interesses de prestígio e posição social.", "Virgília abandona toda vida social para viver isolada com Brás.", "Brás e Virgília só se conhecem depois da morte dele."],
    answer: 1,
    feedback: "Virgília se casa com Lobo Neves, mas mantém um caso com Brás. A trama liga desejo, casamento, reputação e ambição social."
  },
  {
    question: "Que leitura crítica pode ser feita da cena de Prudêncio?",
    image: "assets/quiz-prudencio.webp",
    imageAlt: "Um brinquedo de madeira no pátio é atravessado por uma sombra adulta e por um elo rompido.",
    options: ["Ela mostra que Brás, já adulto, reconhece e repara todas as violências de sua infância.", "Ela transforma a escravidão em um detalhe sem relação com os privilégios de Brás.", "Ela expõe a violência escravista e a distância entre a leveza do relato de Brás e a brutalidade vivida por pessoas escravizadas.", "Ela demonstra que a escravidão havia sido abolida quando a história acontece."],
    answer: 2,
    feedback: "A lembrança de Prudêncio, tratado como objeto na infância de Brás, retorna em uma cena de violência contra outra pessoa escravizada. A escravidão só seria abolida no Brasil em 1888."
  },
  {
    question: "Qual é o papel do Humanitismo, apresentado por Quincas Borba?",
    image: "assets/quiz-humanitismo.webp",
    imageAlt: "Dois grupos disputam um pão enorme diante de um filósofo, em uma alegoria satírica.",
    options: ["É um código jurídico que organiza as eleições do Império.", "É uma doutrina fictícia que permite satirizar sistemas filosóficos e discursos que justificam a competição e o poder.", "É o nome científico dado à doença que mata Brás Cubas.", "É uma teoria romântica sobre a idealização do amor."],
    answer: 1,
    feedback: "O Humanitismo é uma filosofia inventada dentro do romance. Seu tom grandioso e suas contradições abrem espaço para a sátira de explicações que naturalizam a disputa e a dominação."
  },
  {
    question: "Por que o romance é estudado junto ao Realismo, mas também desafia uma classificação simples?",
    image: "assets/quiz-realismo-ficcao.webp",
    imageAlt: "Uma rua antiga se mistura às páginas de um livro e a uma cortina de teatro, sob a mão de quem escreve.",
    options: ["Porque observa interesses sociais e contradições psicológicas, mas também expõe a ficção e brinca com a voz narrativa.", "Porque descreve a natureza com precisão científica e não apresenta narrador.", "Porque apresenta heróis idealizados e um amor sem conflitos.", "Porque foi escrito no século XVIII e pertence ao Arcadismo."],
    answer: 0,
    feedback: "A obra é frequentemente ensinada como marco do Realismo brasileiro por sua crítica social e psicológica. Ao mesmo tempo, sua metaficção e seu narrador intrusivo tensionam as convenções realistas."
  },
  {
    question: "Qual informação histórica ajuda a entender as relações sociais do livro?",
    image: "assets/quiz-contexto-historico.webp",
    imageAlt: "Um elo de ferro rompido repousa diante de uma paisagem urbana antiga e folhas de calendário em branco.",
    options: ["A escravidão já havia sido abolida quando o livro saiu em 1881.", "O livro saiu em 1881, quando a escravidão ainda era legal no Brasil; a abolição ocorreu em 1888.", "A obra foi publicada depois da Proclamação da República, em 1889.", "O romance se passa no Brasil colonial do século XVI."],
    answer: 1,
    feedback: "A primeira edição em livro é de 1881. A Lei Áurea, que declarou extinta a escravidão no Brasil, foi assinada em 13 de maio de 1888."
  },
  {
    question: "O que o balanço final de Brás sugere quando ele considera positivo não ter tido filhos?",
    image: "assets/quiz-saldo-final.webp",
    imageAlt: "Um berço vazio, um ramo seco e uma folha equilibrada numa balança sugerem um balanço amargo.",
    options: ["Um final triunfante em que ele prova ter realizado todos os seus projetos.", "Uma conclusão irônica e pessimista sobre a vida e sobre o legado que deixa.", "Uma promessa de que a história continuará com um novo protagonista.", "Uma reconciliação definitiva com Virgília."],
    answer: 1,
    feedback: "Brás encerra a autobiografia com uma conta paradoxal: sua falta de descendentes aparece como o único saldo positivo. O efeito é irônico e amargo."
  },
  {
    question: "Qual afirmação sobre a trajetória de Machado de Assis está correta?",
    image: "assets/quiz-machado.webp",
    imageAlt: "Um escritor afro-brasileiro do século XIX trabalha à mesa entre livros, jornais sem texto legível e uma máscara teatral.",
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
let sessionQuestions = [];

function shuffle(items) {
  const result = [...items];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
  }
  return result;
}

function prepareQuiz() {
  const answerSlots = shuffle([0, 0, 0, 1, 1, 1, 2, 2, 3, 3]);
  sessionQuestions = shuffle(questions).map((question, index) => {
    const wrongOptions = question.options.filter((_, optionIndex) => optionIndex !== question.answer);
    const options = shuffle(wrongOptions);
    const answer = answerSlots[index];
    options.splice(answer, 0, question.options[question.answer]);
    return { ...question, options, answer };
  });
}

function renderQuestion() {
  answered = false;
  const item = sessionQuestions[current];
  counter.textContent = `Questão ${current + 1} de ${sessionQuestions.length}`;
  progress.style.width = `${((current + 1) / sessionQuestions.length) * 100}%`;
  app.innerHTML = `<figure class="quiz-visual"><img class="quiz-image" alt=""><figcaption>Imagem para interpretar</figcaption></figure><h2 class="quiz-question"></h2><div class="quiz-options"></div><div class="quiz-feedback" id="quiz-feedback" hidden></div><div class="quiz-controls"><span class="quiz-score">Acertos: ${score}</span><button class="quiz-next" id="quiz-next" type="button" disabled>${current === sessionQuestions.length - 1 ? "Ver resultado" : "Próxima questão"} →</button></div>`;
  const illustration = app.querySelector(".quiz-image");
  illustration.src = item.image;
  illustration.alt = item.imageAlt;
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
    current < sessionQuestions.length ? renderQuestion() : renderResult();
  });
}

function chooseAnswer(index, selectedButton) {
  if (answered) return;
  answered = true;
  const item = sessionQuestions[current];
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
  const percent = Math.round((score / sessionQuestions.length) * 100);
  const message = score === sessionQuestions.length
    ? "Leitura atenta: você percebeu as estratégias do narrador e os conflitos da obra."
    : score >= 7
      ? "Boa leitura. Reveja as questões erradas e repare como a forma do romance participa da crítica."
      : "Vale voltar a algumas seções do hub. Observe quem narra, o que ele omite e o contexto social das cenas.";
  app.innerHTML = `<div class="quiz-result"><p class="eyebrow"><span></span> resultado</p><h2>Seu saldo<br><em>de leitura.</em></h2><strong class="result-score">${score}/${sessionQuestions.length}</strong><p></p><button class="quiz-next" id="restart-quiz" type="button">Refazer o quiz ↻</button></div>`;
  app.querySelector(".quiz-result p:not(.eyebrow)").textContent = message;
  app.querySelector("#restart-quiz").addEventListener("click", () => { current = 0; score = 0; prepareQuiz(); renderQuestion(); });
}

prepareQuiz();
renderQuestion();
