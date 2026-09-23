const loader = document.querySelector(".page-loader");
const reveals = document.querySelectorAll(".reveal");
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("main section[id]");
const heroArt = document.querySelector(".hero-art");
const cards = document.querySelectorAll(".dimension-card");
const layeredArts = document.querySelectorAll(".layered-art:not(.hero-image-wrap)");
const stage = document.querySelector("[data-stage]");
const modeLabel = document.querySelector("[data-mode-label]");
const energizeButton = document.querySelector("[data-energize]");
const progressBar = document.querySelector(".scroll-progress span");
const particleCanvas = document.querySelector("#particle-field");
const cursorGlow = document.querySelector(".cursor-glow");
const cursorDot = document.querySelector(".cursor-dot");
const themeToggle = document.querySelector("[data-theme-toggle]");
const themeLabel = document.querySelector("[data-theme-label]");
const themeIcon = themeToggle?.querySelector(".theme-toggle-icon");
const themeMeta = document.querySelector('meta[name="theme-color"]');
const heroCycle = document.querySelector("[data-hero-cycle]");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const finePointer = window.matchMedia("(pointer: fine)").matches;

let lenis = null;

function readSavedTheme() {
  return document.body.dataset.theme || "light";
}

function syncThemeArtwork() {
  const isDark = document.body.dataset.theme === "dark";
  document.querySelectorAll(".art-layer-bg[data-light-src][data-dark-src]").forEach((layer) => {
    const nextSource = isDark ? layer.dataset.darkSrc : layer.dataset.lightSrc;
    if (nextSource && layer.getAttribute("src") !== nextSource) {
      layer.setAttribute("src", nextSource);
    }
  });
}

function syncThemeControls() {
  const isDark = document.body.dataset.theme === "dark";
  themeToggle?.setAttribute("aria-label", isDark ? "Ativar modo claro" : "Ativar modo escuro");
  if (themeLabel) themeLabel.textContent = isDark ? "modo claro" : "modo escuro";
  if (themeIcon) themeIcon.textContent = isDark ? "◐" : "◑";
  themeMeta?.setAttribute("content", isDark ? "#07183e" : "#efe7da");
  syncThemeArtwork();
}

document.body.dataset.theme = readSavedTheme();
syncThemeControls();

themeToggle?.addEventListener("click", () => {
  const nextTheme = document.body.dataset.theme === "dark" ? "light" : "dark";
  document.body.dataset.theme = nextTheme;
  syncThemeControls();
});

if (window.Lenis && window.gsap && window.ScrollTrigger) {
  lenis = new window.Lenis({
    autoRaf: false,
    anchors: false,
    smoothWheel: true,
    syncTouch: true,
    stopInertiaOnNavigate: true,
  });

  window.gsap.registerPlugin(window.ScrollTrigger);
  lenis.on("scroll", window.ScrollTrigger.update);
  window.gsap.ticker.add((time) => lenis.raf(time * 1000));
  window.gsap.ticker.lagSmoothing(0);
} else if (window.Lenis) {
  lenis = new window.Lenis({
    autoRaf: true,
    anchors: true,
    smoothWheel: true,
  });
}

window.addEventListener("load", () => {
  window.setTimeout(() => loader?.classList.add("is-hidden"), 300);
});

if (heroCycle && !reducedMotion) {
  const heroPhrases = ["é uma fala.", "é um gesto.", "é um rastro.", "é uma escolha."];
  let phraseIndex = 0;

  window.setInterval(() => {
    heroCycle.classList.add("is-changing");
    window.setTimeout(() => {
      phraseIndex = (phraseIndex + 1) % heroPhrases.length;
      heroCycle.textContent = heroPhrases[phraseIndex];
      heroCycle.classList.remove("is-changing");
    }, 220);
  }, 3200);
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

reveals.forEach((element) => revealObserver.observe(element));

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      navLinks.forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("href") === "#" + entry.target.id);
      });
    });
  },
  { rootMargin: "-42% 0px -48% 0px" }
);

sections.forEach((section) => sectionObserver.observe(section));

heroArt?.addEventListener("pointermove", (event) => {
  const bounds = heroArt.getBoundingClientRect();
  const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 18;
  const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 18;
  heroArt.style.setProperty("--pointer-x", x + "px");
  heroArt.style.setProperty("--pointer-y", y + "px");
  heroArt.style.setProperty("--layer-x", x * 0.72 + "px");
  heroArt.style.setProperty("--layer-y", y * 0.72 + "px");
});

heroArt?.addEventListener("pointerleave", () => {
  heroArt.style.setProperty("--pointer-x", "0px");
  heroArt.style.setProperty("--pointer-y", "0px");
  heroArt.style.setProperty("--layer-x", "0px");
  heroArt.style.setProperty("--layer-y", "0px");
});

if (finePointer && !reducedMotion) {
  layeredArts.forEach((art) => {
    art.addEventListener("pointermove", (event) => {
      const bounds = art.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;
      art.style.setProperty("--layer-x", x * 22 + "px");
      art.style.setProperty("--layer-y", y * 18 + "px");
    });

    art.addEventListener("pointerleave", () => {
      art.style.setProperty("--layer-x", "0px");
      art.style.setProperty("--layer-y", "0px");
    });
  });
}

function updateScrollProgress() {
  if (!progressBar) return;
  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
  progressBar.style.transform = "scaleX(" + Math.min(progress, 1) + ")";
}

window.addEventListener("scroll", updateScrollProgress, { passive: true });
updateScrollProgress();

if (window.gsap && window.ScrollTrigger && !reducedMotion) {
  const heroSection = document.querySelector(".hero");
  const experienceSection = document.querySelector(".experience");
  const experiencePanel = document.querySelector(".experience-panel");

  if (heroSection) {
    window.gsap.fromTo(
      ".hero-image-wrap",
      { scale: 1.02, yPercent: -2 },
      {
        scale: 1.1,
        yPercent: 7,
        ease: "none",
        scrollTrigger: {
          trigger: heroSection,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    window.gsap.to(".hero-orbit", {
      rotation: 360,
      ease: "none",
      scrollTrigger: {
        trigger: heroSection,
        start: "top top",
        end: "bottom top",
        scrub: 1.2,
      },
    });
  }

  if (experienceSection && experiencePanel) {
    window.gsap.from(experiencePanel, {
      y: 80,
      rotateX: 4,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: experienceSection,
        start: "top 76%",
      },
    });
  }
}

const modeNames = {
  structure: "palavra",
  visual: "imagem",
  motion: "corpo",
};

cards.forEach((card) => {
  card.addEventListener("click", () => {
    cards.forEach((item) => item.classList.remove("is-selected"));
    card.classList.add("is-selected");
    stage?.classList.remove("is-energized");

    const mode = card.dataset.mode || "structure";
    stage?.setAttribute("data-mode", mode);
    if (modeLabel) modeLabel.textContent = modeNames[mode] || mode;
  });
});

if (finePointer && !reducedMotion) {
  cards.forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const bounds = card.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;
      card.classList.add("is-tilting");
      card.style.setProperty("--tilt-x", y * -7 + "deg");
      card.style.setProperty("--tilt-y", x * 7 + "deg");
      card.style.setProperty("--layer-x", x * 22 + "px");
      card.style.setProperty("--layer-y", y * 18 + "px");
    });

    card.addEventListener("pointerleave", () => {
      card.classList.remove("is-tilting");
      card.style.removeProperty("--tilt-x");
      card.style.removeProperty("--tilt-y");
      card.style.removeProperty("--layer-x");
      card.style.removeProperty("--layer-y");
    });
  });
}

energizeButton?.addEventListener("click", () => {
  stage?.classList.toggle("is-energized");
  const active = stage?.classList.contains("is-energized");
  energizeButton.querySelector("span").textContent = active ? "✦" : "✧";
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    const target = document.querySelector(anchor.getAttribute("href"));
    if (!target) return;
    event.preventDefault();
    if (lenis) {
      lenis.scrollTo(target, { offset: -18, duration: reducedMotion ? 0 : 1.15 });
    } else {
      target.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" });
    }
  });
});

function setupCursor() {
  if (!finePointer || reducedMotion) return;
  document.body.classList.add("has-pointer");
}

function setupMagneticElements() {
  if (!finePointer || reducedMotion) return;

  document.querySelectorAll(".magnetic").forEach((element) => {
    element.addEventListener("pointermove", (event) => {
      const bounds = element.getBoundingClientRect();
      const x = (event.clientX - (bounds.left + bounds.width / 2)) * 0.14;
      const y = (event.clientY - (bounds.top + bounds.height / 2)) * 0.14;
      element.style.transform = "translate(" + x + "px, " + y + "px)";
    });

    element.addEventListener("pointerleave", () => {
      element.style.transform = "";
    });
  });
}

function setupParticleField() {
  if (!particleCanvas || reducedMotion) return;
  const context = particleCanvas.getContext("2d");
  if (!context) return;

  const particles = [];
  const glyphs = ["A", "&", "∞", "/", "↗", "π", "◌"];
  const lightPalette = ["#214d7a", "#c94d32", "#c9952f", "#28231f"];
  const darkPalette = ["#55c8f5", "#ed765c", "#f2bd63", "#e8e0d4"];
  let width = 0;
  let height = 0;
  let pixelRatio = Math.min(window.devicePixelRatio || 1, 1.7);

  function resizeCanvas() {
    width = window.innerWidth;
    height = window.innerHeight;
    pixelRatio = Math.min(window.devicePixelRatio || 1, 1.7);
    particleCanvas.width = width * pixelRatio;
    particleCanvas.height = height * pixelRatio;
    particleCanvas.style.width = width + "px";
    particleCanvas.style.height = height + "px";
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
  }

  function seedParticles() {
    particles.length = 0;
    const amount = width < 680 ? 28 : 58;
    for (let index = 0; index < amount; index += 1) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.8 + 0.4,
        speed: Math.random() * 0.24 + 0.06,
        drift: Math.random() * 0.5 + 0.2,
        phase: Math.random() * Math.PI * 2,
        glyph: glyphs[index % glyphs.length],
      });
    }
  }

  function draw(time) {
    const palette = document.body.dataset.theme === "dark" ? darkPalette : lightPalette;
    context.clearRect(0, 0, width, height);
    particles.forEach((particle, index) => {
      const color = palette[index % palette.length];
      particle.y -= particle.speed;
      particle.x += Math.sin(time * 0.00035 * particle.drift + particle.phase) * 0.16;
      if (particle.y < -10) particle.y = height + 10;
      if (particle.x > width + 10) particle.x = -10;
      if (particle.x < -10) particle.x = width + 10;

      const pulse = 0.45 + Math.sin(time * 0.001 + index) * 0.2;
      context.globalAlpha = pulse;
      context.fillStyle = color;
      context.beginPath();
      context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      context.fill();

      if (index % 5 === 0) {
        context.globalAlpha = pulse * 0.72;
        context.font = "10px DM Mono, monospace";
        context.fillText(particle.glyph, particle.x + 5, particle.y - 5);
      }

      for (let next = index + 1; next < particles.length; next += 1) {
        const other = particles[next];
        const distance = Math.hypot(particle.x - other.x, particle.y - other.y);
        if (distance < 105) {
          context.globalAlpha = (1 - distance / 105) * 0.1;
          context.strokeStyle = color;
          context.lineWidth = 0.6;
          context.beginPath();
          context.moveTo(particle.x, particle.y);
          context.lineTo(other.x, other.y);
          context.stroke();
        }
      }
    });
    context.globalAlpha = 1;
    window.requestAnimationFrame(draw);
  }

  resizeCanvas();
  seedParticles();
  window.addEventListener("resize", () => {
    resizeCanvas();
    seedParticles();
  });
  window.requestAnimationFrame(draw);
}

setupCursor();
setupMagneticElements();
setupParticleField();
