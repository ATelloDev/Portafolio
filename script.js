// ============ NAV: scroll state & mobile menu ============
const nav = document.getElementById("nav");
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 10);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

navToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("is-open");
  navToggle.classList.toggle("is-open", open);
  navToggle.setAttribute("aria-expanded", String(open));
  navToggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
});

navLinks.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => {
    navLinks.classList.remove("is-open");
    navToggle.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  })
);

// ============ SCROLL SPY ============
const spyLinks = [...document.querySelectorAll(".nav__link")];
const sections = spyLinks
  .map((l) => document.querySelector(l.getAttribute("href")))
  .filter(Boolean);

const spy = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      spyLinks.forEach((l) =>
        l.classList.toggle(
          "is-active",
          l.getAttribute("href") === `#${entry.target.id}`
        )
      );
    });
  },
  { rootMargin: "-40% 0px -55% 0px" }
);
sections.forEach((s) => spy.observe(s));

// ============ REVEAL ANIMATIONS ============
const revealer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        revealer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach((el) => revealer.observe(el));

// ============ FOOTER YEAR ============
document.getElementById("year").textContent = new Date().getFullYear();
