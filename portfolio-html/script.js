// Petites interactions : menu mobile, lien actif, filtres projets, points de compétences, formulaire.

// ---- En-tête : fond au défilement ----
const header = document.querySelector(".header");
const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 20);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// ---- Menu mobile ----
const toggle = document.querySelector(".nav__toggle");
const menu = document.querySelector(".nav__menu");
toggle.addEventListener("click", () => {
  const open = menu.classList.toggle("is-open");
  toggle.classList.toggle("is-open", open);
  toggle.setAttribute("aria-expanded", String(open));
});
menu.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => {
    menu.classList.remove("is-open");
    toggle.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  })
);

// ---- Lien actif selon la section visible ----
const navLinks = document.querySelectorAll(".nav__link");
const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((l) =>
        l.classList.toggle("is-active", l.getAttribute("href") === `#${entry.target.id}`)
      );
    });
  },
  { rootMargin: "-45% 0px -50% 0px" }
);
document.querySelectorAll("main section[id]").forEach((s) => sectionObserver.observe(s));

// ---- Barres de compétences en points colorés ----
const DOTS = 10;
document.querySelectorAll(".skill").forEach((skill) => {
  const level = Number(skill.dataset.level) || 0;
  const wrap = skill.querySelector(".skill__dots");
  for (let i = 0; i < DOTS; i++) {
    const dot = document.createElement("span");
    dot.className = "dot" + (i < level ? " is-on" : "");
    // dégradé violet → rose le long de la barre
    const t = i / (DOTS - 1);
    dot.style.setProperty("--dot-color", `hsl(${270 + t * 30} 95% ${62 + t * 6}%)`);
    wrap.appendChild(dot);
  }
  wrap.setAttribute("role", "img");
  wrap.setAttribute("aria-label", `Niveau ${level} sur ${DOTS}`);
});

// ---- Filtres des projets ----
const filters = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".project-card");
filters.forEach((btn) =>
  btn.addEventListener("click", () => {
    filters.forEach((b) => {
      b.classList.toggle("is-active", b === btn);
      b.setAttribute("aria-selected", String(b === btn));
    });
    const f = btn.dataset.filter;
    // une carte peut appartenir à plusieurs catégories : data-category="ia web"
    cards.forEach((c) =>
      c.classList.toggle("is-hidden", f !== "all" && !c.dataset.category.split(" ").includes(f))
    );
  })
);

// ---- Lecteur de démo vidéo ----
// Pour ajouter une démo : déposer le MP4 dans assets/videos/ avec le nom indiqué
// par data-video sur le bouton. Sans fichier, la modale affiche « Démo en préparation ».
const modal = document.querySelector(".demo-modal");
const video = modal.querySelector(".demo-modal__video");
const fallback = modal.querySelector(".demo-modal__fallback");

const showFallback = (show) => {
  fallback.hidden = !show;
  video.hidden = show;
};

video.addEventListener("error", () => showFallback(true));

document.querySelectorAll(".js-demo").forEach((btn) =>
  btn.addEventListener("click", () => {
    const card = btn.closest(".project-card");
    modal.querySelector(".demo-modal__title").textContent =
      card.querySelector(".project-card__title").textContent;
    modal.querySelector(".demo-modal__repo").href = card.querySelector(".project-card__actions a").href;
    // message personnalisable par carte (ex. projet de stage dont le code n'est pas public)
    modal.querySelector(".demo-modal__fallback-title").textContent =
      btn.dataset.fallbackTitle || "Démo vidéo en préparation";
    modal.querySelector(".demo-modal__fallback-text").textContent =
      btn.dataset.fallbackText || "En attendant, le code source et la documentation sont disponibles sur GitHub.";

    showFallback(false);
    video.src = btn.dataset.video;
    modal.showModal();
    video.play().catch(() => {}); // lecture auto refusée ou fichier absent : géré par "error"
  })
);

const closeModal = () => modal.close();
modal.querySelector(".demo-modal__close").addEventListener("click", closeModal);
// clic sur le fond assombri = fermeture
modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
// à la fermeture (bouton, fond ou touche Échap) : on coupe la vidéo et son téléchargement
modal.addEventListener("close", () => {
  video.pause();
  video.removeAttribute("src");
  video.load();
});

// ---- Apparition au défilement ----
const revealObserver = new IntersectionObserver(
  (entries) =>
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("is-visible");
        revealObserver.unobserve(e.target);
      }
    }),
  { threshold: 0.12 }
);
document
  .querySelectorAll(".section__head, .about__inner, .journey__col, .skills__group, .project-card, .cert-card, .contact__form")
  .forEach((el) => {
    el.classList.add("reveal");
    revealObserver.observe(el);
  });

// ---- Formulaire : ouvre la messagerie avec le message pré-rempli ----
// (pour un envoi direct sans messagerie, brancher Formspree ou EmailJS ici)
const CONTACT_EMAIL = "douae.malak05@gmail.com";
const form = document.querySelector(".contact__form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const { name, email, message } = form.elements;
  const subject = `Contact portfolio — ${name.value}`;
  const body = `${message.value}\n\n${name.value}\n${email.value}`;
  window.location.href =
    `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  form.querySelector(".form__status").textContent =
    "Votre messagerie s'ouvre avec le message pré-rempli. Il ne reste qu'à cliquer sur Envoyer.";
});

document.getElementById("year").textContent = new Date().getFullYear();
