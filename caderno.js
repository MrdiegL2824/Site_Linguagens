const phrase = document.querySelector("[data-phrase]");
const wordButtons = document.querySelectorAll("[data-word]");
const resetPhrase = document.querySelector("[data-reset]");
let selectedWords = [];

function renderPhrase() {
  if (!phrase) return;
  phrase.classList.remove("is-changing");
  window.requestAnimationFrame(() => {
    phrase.textContent = selectedWords.length ? selectedWords.join(" ") + "." : "começa aqui.";
    phrase.classList.add("is-changing");
    window.setTimeout(() => phrase.classList.remove("is-changing"), 380);
  });
}

wordButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const word = button.dataset.word;
    if (!word) return;

    if (selectedWords.includes(word)) {
      selectedWords = selectedWords.filter((item) => item !== word);
      button.classList.remove("is-active");
    } else {
      selectedWords.push(word);
      button.classList.add("is-active");
    }

    renderPhrase();
  });
});

resetPhrase?.addEventListener("click", () => {
  selectedWords = [];
  wordButtons.forEach((button) => button.classList.remove("is-active"));
  renderPhrase();
});
