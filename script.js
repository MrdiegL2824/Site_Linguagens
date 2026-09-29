const themeToggle = document.querySelector("[data-theme-toggle]");
const themeLabel = document.querySelector("[data-theme-label]");
const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
const revealItems = document.querySelectorAll(".reveal");
const layeredArtwork = document.querySelectorAll(".layered-art");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function setTheme(theme) {
  document.body.dataset.theme = theme;
  try { localStorage.setItem("mpbc-theme", theme); } catch {}
  if (themeLabel) themeLabel.textContent = theme === "dark" ? "modo claro" : "modo escuro";
  themeToggle?.setAttribute("aria-label", theme === "dark" ? "Ativar modo claro" : "Ativar modo escuro");
}

let savedTheme = "light";
try { savedTheme = localStorage.getItem("mpbc-theme") || "light"; } catch {}
setTheme(savedTheme);

themeToggle?.addEventListener("click", () => {
  setTheme(document.body.dataset.theme === "dark" ? "light" : "dark");
});

menuToggle?.addEventListener("click", () => {
  const open = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!open));
  mainNav?.classList.toggle("is-open", !open);
});

mainNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("is-open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

if (!reduceMotion) {
  layeredArtwork.forEach((artwork) => {
    let touchReset;

    artwork.addEventListener("pointermove", (event) => {
      if (event.pointerType === "touch") return;
      const bounds = artwork.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;
      artwork.style.setProperty("--fg-x", `${x * 13}px`);
      artwork.style.setProperty("--fg-y", `${y * 11}px`);
      artwork.style.setProperty("--fg-rotate-x", `${-y * 4}deg`);
      artwork.style.setProperty("--fg-rotate-y", `${x * 5}deg`);
    });

    artwork.addEventListener("pointerleave", () => {
      artwork.style.setProperty("--fg-x", "0px");
      artwork.style.setProperty("--fg-y", "0px");
      artwork.style.setProperty("--fg-rotate-x", "0deg");
      artwork.style.setProperty("--fg-rotate-y", "0deg");
    });

    artwork.addEventListener("pointerdown", (event) => {
      if (event.pointerType !== "touch") return;
      window.clearTimeout(touchReset);
      artwork.style.setProperty("--fg-y", "-7px");
      artwork.style.setProperty("--fg-rotate-x", "2deg");
      touchReset = window.setTimeout(() => {
        artwork.style.setProperty("--fg-y", "0px");
        artwork.style.setProperty("--fg-rotate-x", "0deg");
      }, 500);
    });
  });
}
