// ============ TEMA CLARO / OSCURO ============
// Menta Fresca = modo claro · Bosque Oscuro = modo noche.
// accent-soft, accent-border, nav-bg y menu-bg se calculan automáticamente.

const PALETTES = [
  {
    id: "menta-fresca", dark: false,
    bg: "#eceff1", bg2: "#eceff1", surface: "#ffffff", surface2: "#e9f0f7",
    border: "#d9e3ec", strong: "#b3c7da", text: "#111111", muted: "#707070",
    accent: "#0056b3", accent2: "#1a6ec9", onAccent: "#ffffff",
  },
  {
    id: "bosque-oscuro", dark: true,
    bg: "#0d1117", bg2: "#090d13", surface: "#121a26", surface2: "#182233",
    border: "#233549", strong: "#3a557a", text: "#e6ecf4", muted: "#b5b5b5",
    accent: "#4d94ff", accent2: "#8ab8ff", onAccent: "#ffffff",
  },
];

(function () {
  const KEY = "atello-theme";
  const LIGHT_ID = "menta-fresca";
  const DARK_ID = "bosque-oscuro";
  const root = document.documentElement;
  let current = PALETTES[0];

  const hexToRgba = (hex, alpha) => {
    const n = parseInt(hex.slice(1), 16);
    return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${alpha})`;
  };

  const storeGet = () => {
    try { return localStorage.getItem(KEY); } catch { return null; }
  };
  const storeSet = (v) => {
    try { localStorage.setItem(KEY, v); } catch { /* almacenamiento no disponible */ }
  };

  const applyTheme = (p, save = true) => {
    const vars = {
      "--bg": p.bg,
      "--bg-2": p.bg2,
      "--surface": p.surface,
      "--surface-2": p.surface2,
      "--border": p.border,
      "--border-strong": p.strong,
      "--text": p.text,
      "--muted": p.muted,
      "--accent": p.accent,
      "--accent-2": p.accent2,
      "--on-accent": p.onAccent,
      "--accent-soft": hexToRgba(p.accent, p.dark ? 0.16 : 0.1),
      "--accent-border": hexToRgba(p.accent, 0.38),
      "--nav-bg": hexToRgba(p.bg, 0.82),
      "--menu-bg": hexToRgba(p.bg, 0.97),
    };
    Object.entries(vars).forEach(([k, v]) => root.style.setProperty(k, v));
    root.dataset.theme = p.id;
    current = p;
    if (save) storeSet(p.id);
    syncToggle(p);
  };

  // ---------- Toggle claro/oscuro en el navbar ----------
  const themeToggle = document.getElementById("themeToggle");

  function syncToggle(p) {
    if (!themeToggle) return;
    themeToggle.classList.toggle("is-dark", p.dark);
    themeToggle.setAttribute(
      "aria-label",
      p.dark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"
    );
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const target = PALETTES.find(
        (p) => p.id === (current.dark ? LIGHT_ID : DARK_ID)
      );
      if (target) applyTheme(target);
    });
  }

  // ---------- Limpiar selección de acento previa ----------
  try { localStorage.removeItem("atello-accent"); } catch { /* sin acceso */ }

  // ---------- Restaurar tema guardado ----------
  const fallback = PALETTES.find((p) => p.id === LIGHT_ID);
  const saved = PALETTES.find((p) => p.id === storeGet());
  applyTheme(saved || fallback, false);
})();
