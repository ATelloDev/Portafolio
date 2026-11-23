// Logos de tecnologías para la vista de detalle de proyectos
const TECH_ICONS = {
  "C#": "csharp.svg",
  ".NET": "dotnet.svg",
  "ESP32": "espressif.svg",
  "RS-232": "serial.svg",
  "Relé": "relay.svg",
  "Relés": "relay.svg",
  "Python": "python.svg",
  "Tkinter": "tkinter.svg",
  "SQLite": "sqlite.svg",
  "REST API": "api.svg",
  "JavaScript": "javascript.svg",
  "C/C++": "cplusplus.svg",
  "Sensores": "sensor.svg",
  "SQL": "database.svg",
  "Windows Server": "windows.svg",
  "Active Directory": "ad.svg",
  "VBA": "excel.svg",
  "SPC": "spc.svg",
  "Excel": "excel.svg",
  "Acceso remoto": "remote.svg",
  "AOI": "aoi.svg",
  "OpenCV": "opencv.svg",
  "Webcams 1080p": "webcam.svg",
};

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

const closeMenu = () => {
  navLinks.classList.remove("is-open");
  navToggle.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
};

// ============ DATOS: DETALLE DE PROYECTOS ============
const PROJECTS = {
  "x7k2": {
    num: "01",
    sector: "Manufactura médica · Proyecto destacado",
    sectorShort: "Manufactura médica",
    title: "Sistema de Bloqueo por Despeje de Línea",
    img: "assets/img/projects/p1.jpg",
    alt: "Diagrama del Sistema de Bloqueo por Despeje de Línea",
    desc: "Interlock de seguridad para línea de dispensado: la etiqueta de liberación solo puede imprimirse si el despeje de línea se registró en el software. Mientras no se complete el despeje, el ESP32 mantiene el relé bloqueando el pedal y la impresora permanece inhabilitada.",
    tags: ["C#", ".NET", "ESP32", "RS-232", "Relé"],
    role: "Diseño y desarrollo integral (software + hardware)",
    status: "Operando en producción",
    about: "Sistema de interlock implementado en una línea de dispensado de manufactura de dispositivos médicos para forzar el despeje de línea entre lotes. Mientras el despeje no se registre en la aplicación, el ESP32 mantiene el relé bloqueando el pedal del equipo y la impresora no puede imprimir la etiqueta de liberación — es físicamente imposible continuar sin despeje. Al confirmarse el despeje en el software, la PC envía por RS-232 el comando de liberación al ESP32, que suelta el pedal y habilita la impresión.",
    features: [
      "Imposibilidad física de imprimir etiquetas sin despeje registrado en software",
      "Relé controlado por ESP32 que mantiene el pedal bloqueado hasta la liberación",
      "Impresora de etiquetas inhabilitada mientras el despeje no se complete",
      "Aplicación de escritorio en C# / .NET con comunicación serial RS-232",
      "Registro de eventos de despeje y liberación para trazabilidad",
      "Detección y recuperación ante pérdida de comunicación serial",
    ],
    flow: [
      ["Operador", "Despeje en software", "El operador realiza el despeje de línea y lo confirma en la aplicación de escritorio — sin este registro nada se habilita."],
      ["PC de control", "C# · .NET", "La aplicación recibe el registro del despeje y determina si la estación puede liberarse."],
      ["Validación", "¿Despeje registrado?", "El software verifica que el despeje esté confirmado: sin registro, el relé mantiene el pedal bloqueado y la impresora inhabilitada.", null, "decision", ["Pedal + impresora bloqueados", "Mientras el despeje no esté registrado en el software, el relé mantiene el pedal bloqueado y la impresora inhabilitada — la etiqueta no puede imprimirse."], ["Habilitar despeje", "Despeje activo · flujo habilitado"]],
      ["Interfaz serial", "RS-232", "Confirmado el despeje, la PC envía el comando de liberación por el canal serial de forma confiable y verificable."],
      ["Módulo ESP32", "Relé de bloqueo", "Mientras no llega la liberación, el relé mantiene bloqueado el pedal; al recibir el comando lo suelta.", ["assets/img/components/c1.png", "assets/img/components/c2.png"]],
      ["Pedal + Impresora", "Etiqueta habilitada", "Con el pedal liberado se habilita la impresión de la etiqueta de liberación — inaccesible sin despeje previo."],
    ],
    docs: [
      { label: "Manual de operación", meta: "Interno" },
      { label: "Diagrama eléctrico y de conexionado", meta: "Interno" },
    ],
    video: {
      id: "3i7Pg_KLGPo",
      caption: "Video de referencia del principio de operación: control de relés industriales con ESP32.",
    },
  },
  "n9r4": {
    num: "05",
    sector: "Educación · Certificación",
    sectorShort: "Educación",
    title: "Sistema Académico EC0835",
    img: "assets/img/projects/p5.jpg",
    alt: "Interfaz del Sistema Académico EC0835",
    desc: "App de escritorio para gestión de estudiantes, cursos e inscripciones con CRUD, borrado lógico, auditoría, backups y exportación CSV.",
    tags: ["Python", "Tkinter", "SQLite"],
    role: "Desarrollo completo del producto",
    status: "Producto 2.1 · Proyecto de certificación CONOCER EC0835",
    about: "Aplicación de escritorio desarrollada como producto de certificación del estándar CONOCER EC0835. Gestiona el ciclo completo de una institución académica: estudiantes, cursos e inscripciones, con persistencia en SQLite y una interfaz gráfica construida con Tkinter en un único archivo fuente.",
    features: [
      "CRUD completo de estudiantes, cursos e inscripciones",
      "Borrado lógico con posibilidad de recuperación de registros",
      "Bitácora de auditoría de operaciones",
      "Respaldo y restauración de la base de datos",
      "Exportación de información a CSV",
      "Distribución como ejecutable independiente para Windows",
    ],
    flow: [
      ["Usuario", "Interfaz Tkinter", "El usuario interactúa con formularios gráficos para capturar y consultar información académica."],
      ["Capa de lógica", "Python", "Las reglas de negocio procesan cada operación: altas, cambios, borrado lógico e inscripciones."],
      ["Validación", "¿Operación válida?", "Las reglas de negocio aprueban o rechazan la operación; cada intento queda registrado en la bitácora de auditoría.", null, "decision", ["Operación rechazada", "La operación no cumple las reglas de negocio: se rechaza y queda asentada en la bitácora de auditoría."], ["Rechazar operación", "Operación válida · flujo habilitado"]],
      ["Persistencia", "SQLite", "Toda la información se almacena localmente en una base de datos SQLite embebida."],
      ["Salidas", "CSV · Backups · Auditoría", "El sistema genera respaldos, exportaciones CSV y una bitácora de auditoría de cada operación."],
    ],
    docs: [
      { label: "Manual de usuario", meta: "PDF", href: "files/m1.pdf" },
      { label: "Manual técnico", meta: "PDF", href: "files/m2.pdf" },
      { label: "Ejecutable Producto 2.1", meta: "EXE · Windows", href: "files/a1.exe" },
    ],
  },
  "b3t6": {
    num: "04",
    sector: "Manufactura médica",
    sectorShort: "Manufactura médica",
    title: "Monitor de Robot de Soldadura — FPY en vivo",
    img: "assets/img/projects/p4.jpg",
    alt: "Dashboard de métricas en tiempo real",
    desc: "Monitoreo en tiempo real del proceso del robot de soldadura con registro automatizado de resultados, FPY e indicadores en vivo.",
    tags: ["Python", "REST API", "SQLite", "JavaScript"],
    role: "Desarrollo de software y despliegue",
    status: "Operando en producción",
    about: "Herramienta de monitoreo en tiempo real del robot de soldadura, orientada a la detección temprana de fallas en las uniones soldadas. Un servicio en Python recolecta y procesa los resultados que genera el robot hacia SQLite y expone los indicadores —FPY, yield y tendencias— mediante APIs REST consumidas por un tablero web visible en piso.",
    features: [
      "Recolección automatizada de resultados del robot de soldadura",
      "Cálculo de FPY y yield por programa, producto y turno",
      "Persistencia en SQLite con histórico consultable",
      "APIs REST para consumo del tablero y otras herramientas",
      "Visualización web en tiempo real con JavaScript",
      "Detección temprana de anomalías en la calidad de soldadura",
    ],
    flow: [
      ["Robot de soldadura", "Resultados por unidad", "El robot genera el resultado de cada unidad soldada que procesa."],
      ["Servicio colector", "Python", "Un servicio en Python lee, interpreta y normaliza los resultados de forma automática y continua."],
      ["Validación", "¿Lectura válida?", "El colector descarta lecturas incompletas o corruptas antes de persistirlas — solo datos confiables alimentan las métricas.", null, "decision", ["Lectura descartada", "La lectura llega incompleta o corrupta: se omite del histórico y el error queda registrado en bitácora."], ["Descartar lectura", "Lectura válida · flujo habilitado"]],
      ["Base de datos", "SQLite", "Los resultados se persisten con histórico para análisis por fecha, turno o programa."],
      ["API REST", "Endpoints de métricas", "Los endpoints exponen FPY y yield ya agregados, listos para ser consumidos."],
      ["Monitor en vivo", "Tablero web", "El tablero muestra los indicadores en vivo, permitiendo detectar anomalías de inmediato."],
    ],
    docs: [
      { label: "Documentación de endpoints", meta: "Interno" },
      { label: "Guía de operación del monitor", meta: "Interno" },
    ],
    video: {
      mp4: "assets/img/projects/p4.mp4",
      caption: "Demostración del monitor de robot de soldadura operando en tiempo real.",
    },
  },
  "q8w5": {
    num: "03",
    sector: "Manufactura médica",
    sectorShort: "Manufactura médica",
    title: "Software de Cambio de Setup",
    img: "assets/img/projects/p3.jpg",
    alt: "Operador ajustando el panel de control de una máquina industrial",
    desc: "Aplicación que reduce el tiempo de cambio de setup en máquinas industriales: automatiza el movimiento de archivos, el renombrado del equipo y la configuración de la estación, con opción de ejecutar el cambio de forma remota.",
    tags: ["C#", ".NET", "SQL", "Acceso remoto"],
    role: "Análisis del proceso y desarrollo de la aplicación",
    status: "Operando en producción",
    about: "El cambio de setup en las máquinas industriales era un proceso manual: mover archivos entre estaciones, renombrar el equipo y ajustar configuraciones consumía tiempo del operador y detenía la línea. Esta aplicación automatiza ese flujo: el operador selecciona el setup destino y el software ejecuta los pasos necesarios —incluido de forma remota— reduciendo drásticamente el tiempo de cambio y los errores de configuración.",
    features: [
      "Ejecución automatizada de los pasos de cambio de setup",
      "Movimiento y organización de archivos entre estaciones",
      "Renombrado del equipo según el setup destino",
      "Cambios de setup ejecutables en remoto, sin presencia física",
      "Reducción significativa del tiempo de cambio de máquina",
      "Menos errores humanos en la configuración de estaciones",
    ],
    flow: [
      ["Selección de setup", "Producto / programa destino", "El operador elige el setup requerido desde la interfaz, local o remota."],
      ["Motor de cambio", "C# / .NET", "La aplicación orquesta los pasos del cambio y prepara la transición."],
      ["Validación", "¿Estado actual válido?", "Antes de aplicar cambios, el software verifica que la estación esté en un estado consistente; de lo contrario cancela la operación.", null, "decision", ["Cambio cancelado", "La estación no está en un estado consistente: el cambio se aborta y se notifica al operador sin tocar archivos ni configuración."], ["Cancelar cambio", "Estado válido · flujo habilitado"]],
      ["Gestión de archivos", "Mover, copiar, renombrar", "Los archivos y configuraciones de la estación se ajustan automáticamente al nuevo setup."],
      ["Configuración de equipo", "Nombre y parámetros", "El equipo queda renombrado y configurado acorde al producto a fabricar."],
      ["Máquina lista", "Setup completado", "La estación queda operativa en una fracción del tiempo que tomaba el proceso manual."],
    ],
    docs: [
      { label: "Manual de operación del software", meta: "Interno" },
      { label: "Guía de cambios en remoto", meta: "Interno" },
    ],
  },
  "m4d9": {
    num: "02",
    sector: "Manufactura médica",
    sectorShort: "Manufactura médica",
    title: "Sistema de Inspección de PCBs (AOI)",
    img: "assets/img/projects/p2.jpg",
    alt: "Macro de tarjeta PCB con componentes soldados",
    desc: "Estación de inspección óptica automatizada para detectar soldaduras deficientes, componentes invertidos o faltantes antes de liberar las tarjetas al área de análisis de fallas.",
    tags: ["AOI", "Python", "OpenCV", "Webcams 1080p"],
    role: "Diseño e implementación de la estación de inspección",
    status: "Operando en piso de producción",
    about: "Estación de inspección óptica automatizada (AOI) implementada como filtro de calidad previo al área de análisis de fallas. Las tarjetas se inspeccionan mediante webcams Logitech de 1080p que capturan la imagen de la PCB; el software analiza la captura para detectar defectos típicos de ensamble — soldaduras deficientes, componentes invertidos y componentes faltantes — y evita que unidades con fallas visibles avancen en el flujo.",
    features: [
      "Captura de imagen de la PCB con webcams Logitech 1080p",
      "Detección de soldaduras deficientes o mal soldadas",
      "Identificación de componentes invertidos o ausentes",
      "Inspección automática antes de liberar a análisis de fallas",
      "Veredicto Pass/Fail inmediato para el operador",
      "Reducción de unidades con defectos visibles en el flujo posterior",
    ],
    flow: [
      ["PCB entrante", "Tarjeta ensamblada", "La tarjeta llega a la estación de inspección antes de pasar al área de análisis de fallas."],
      ["Estación AOI", "Webcams Logitech 1080p", "Las cámaras capturan la imagen de la PCB con la resolución necesaria para distinguir soldaduras y componentes."],
      ["Análisis de imagen", "Visión artificial", "El software procesa la captura y evalúa soldaduras, presencia y orientación de los componentes."],
      ["Veredicto", "¿Pieza conforme?", "El resultado del análisis se compara contra los criterios de aceptación definidos para el producto.", null, "decision", ["Fail: a revisión", "La tarjeta no cumple los criterios de aceptación: se identifica y se aparta para el análisis de fallas."], ["Marcar Fail", "Pieza conforme · Pass"]],
      ["PCB liberada", "Pass · continúa el flujo", "Las tarjetas conformes avanzan al siguiente proceso de la línea."],
    ],
    docs: [
      { label: "Documentación de la estación AOI", meta: "Interno" },
      { label: "Criterios de inspección y rechazo", meta: "Interno" },
    ],
  },
};

const renderProject = (slug) => {
  const p = PROJECTS[slug];
  if (!p) return;
  const decIdx = p.flow.findIndex((n) => n[4] === "decision");
  const flow = p.flow
    .map((n, i) => {
      const decision = n[4] === "decision";
      const cls = [
        "flow__node",
        i === 0 || i === p.flow.length - 1 ? "flow__node--terminal" : "",
        decision ? "flow__node--decision" : "",
      ]
        .filter(Boolean)
        .join(" ");
      const inner = decision
        ? `<small class="flow__cap">${n[0]}</small><strong>${n[1]}</strong>`
        : `${n[3] ? `<span class="flow__imgs">${n[3].map((s) => `<img src="${s}" alt="" loading="lazy">`).join("")}</span>` : ""}<strong>${n[0]}</strong><small>${n[1]}</small>`;
      const node = `<button type="button" class="${cls}" data-step="${i}" aria-label="Paso ${i + 1}: ${n[0]}"><span class="flow__num">${i + 1}</span>${inner}</button>`;
      if (decision) {
        const rj = n[5]
          ? `<button type="button" class="flow__reject" data-reject="${i}" aria-label="Rama No: ${n[5][0]}"><span class="flow__reject-tag">✗ No</span><span class="flow__reject-txt">${n[5][0]}</span></button>`
          : "";
        return `
        ${i ? '<span class="flow__arrow" aria-hidden="true"><i></i><i></i></span>' : ""}
        <div class="flow__fork">${node}${rj}</div>`;
      }
      return `
        ${i ? `<span class="flow__arrow${p.flow[i - 1][4] === "decision" ? " flow__arrow--yes" : ""}" aria-hidden="true"><i></i><i></i></span>` : ""}
        ${node}`;
    })
    .join("");
  const docs = p.docs
    .map((d) =>
      d.href
        ? `<li><a href="${d.href}" target="_blank" rel="noopener"><span>${d.label}</span><em>${d.meta}</em></a></li>`
        : `<li><span class="pd-doc"><span>${d.label}</span><em>${d.meta}</em></span></li>`
    )
    .join("");
  document.getElementById("projectDetail").innerHTML = `
    <div class="pd">
      <a class="pd-back" href="#proyectos">← Volver a proyectos</a>
      <header class="pd-head">
        <p class="pd-eyebrow"><span class="pd-eyebrow__num">${p.num}</span> ${p.sector}</p>
        <h1 class="pd-title">${p.title}</h1>
        <p class="pd-sub">${p.desc}</p>
        <div class="pd-meta">
          <div class="pd-meta__item"><b>Sector</b><span>${p.sectorShort}</span></div>
          <div class="pd-meta__item"><b>Rol</b><span>${p.role}</span></div>
          <div class="pd-meta__item"><b>Estado</b><span>${p.status}</span></div>
        </div>
      </header>

      <figure class="pd-cover">
        <img src="${p.img}" alt="${p.alt}" />
      </figure>

      <section class="pd-section">
        <h2>Descripción del sistema</h2>
        <p>${p.about}</p>
      </section>

      <section class="pd-section">
        <h2>Funcionalidades clave</h2>
        <ul class="pd-features">
          ${p.features.map((f) => `<li>${f}</li>`).join("")}
        </ul>
      </section>

      <section class="pd-section">
        <h2>Tecnologías</h2>
        <div class="pd-tags">${p.tags
          .map((t) => {
            const icon = TECH_ICONS[t];
            return `<span>${icon ? `<img src="assets/img/tech/${icon}" alt="" loading="lazy">` : ""}${t}</span>`;
          })
          .join("")}</div>
      </section>

      <section class="pd-section">
        <h2>Diagrama de flujo</h2>
        <p class="flow__hint">Toca un paso para ver qué hace; con el botón de simulación habilitas o bloqueas el flujo.</p>
        <div class="flow">
          ${
            decIdx >= 0 && p.flow[decIdx][6]
              ? `<div class="flow__controls"><span class="flow__controls-tag">Simulación</span><button type="button" class="flow__enable" data-switch="${decIdx}"><i></i><span>${p.flow[decIdx][6][0]}</span></button></div>`
              : ""
          }
          <div class="flow__track">${flow}</div>
          <div class="flow__panel">
            <span class="flow__step-label">Paso 1 de ${p.flow.length}</span>
            <p class="flow__desc">${p.flow[0][2]}</p>
            <div class="flow__progress"><i></i></div>
          </div>
        </div>
      </section>

      <section class="pd-section">
        <h2>Documentación y entregables</h2>
        <ul class="pd-docs">${docs}</ul>
      </section>

      ${
        p.video
          ? `<section class="pd-section">
        <h2>Video</h2>
        <div class="pd-video">
          ${
            p.video.mp4
              ? `<video class="pd-video__file" src="${p.video.mp4}" autoplay muted loop playsinline></video>`
              : `<iframe src="https://www.youtube.com/embed/${p.video.id}" title="Video del proyecto" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
          }
        </div>
        <p class="pd-video__caption">${p.video.caption}</p>
      </section>`
          : ""
      }

      <a class="pd-back pd-back--bottom" href="#proyectos">← Volver a proyectos</a>
    </div>`;
  initFlow(p.flow);
};

// ============ DIAGRAMA DE FLUJO INTERACTIVO ============
const initFlow = (steps) => {
  const wrap = document.querySelector(".flow");
  if (!wrap) return;
  const nodes = [...wrap.querySelectorAll(".flow__node")];
  const arrows = [...wrap.querySelectorAll(".flow__arrow")];
  const desc = wrap.querySelector(".flow__desc");
  const label = wrap.querySelector(".flow__step-label");
  const bar = wrap.querySelector(".flow__progress i");

  const rejects = [...wrap.querySelectorAll(".flow__reject")];
  const switches = [...wrap.querySelectorAll(".flow__enable")];
  const branchState = {}; // idx -> true = rama Sí activa (por defecto apagado = No)

  const setStep = (i) => {
    const isDec = steps[i][4] === "decision";
    const no = isDec && !branchState[i];
    nodes.forEach((n, j) => {
      n.classList.toggle("is-active", j === i);
      n.classList.toggle("is-done", j < i);
    });
    arrows.forEach((a, j) => {
      a.classList.toggle("is-done", j < i || (j === i && isDec && !no));
      a.classList.toggle("is-blocked", j === i && no);
    });
    rejects.forEach((r) => {
      const k = +r.dataset.reject;
      r.classList.toggle("is-active", k === i && no);
      r.classList.toggle("is-dim", k <= i && !(k === i && no));
    });
    switches.forEach((s) => {
      const k = +s.dataset.switch;
      const on = !!branchState[k];
      s.classList.toggle("is-on", on);
      s.querySelector("span").textContent = steps[k][6][on ? 1 : 0];
    });
    desc.textContent = no && steps[i][5] ? steps[i][5][1] : steps[i][2];
    label.textContent = `Paso ${i + 1} de ${steps.length} · ${steps[i][0]}${isDec ? ` · rama: ${no ? "No" : "Sí"}` : ""}`;
    bar.style.width = `${((i + 1) / steps.length) * 100}%`;
  };

  nodes.forEach((n, i) => n.addEventListener("click", () => setStep(i)));
  rejects.forEach((r) =>
    r.addEventListener("click", () => {
      branchState[+r.dataset.reject] = false;
      setStep(+r.dataset.reject);
    })
  );
  switches.forEach((s) =>
    s.addEventListener("click", () => {
      const k = +s.dataset.switch;
      branchState[k] = !branchState[k];
      setStep(k);
    })
  );
  setStep(0);
};

// ============ ROUTER DE VISTAS (hash) ============
const VIEWS = ["sobre-mi", "proyectos", "contacto"];
const viewEls = document.querySelectorAll(".view");
const viewLinks = document.querySelectorAll(".nav__link");
const viewTitles = {
  "sobre-mi": "Alejandro Tello — Ingeniero en Desarrollo de Software",
  proyectos: "Proyectos — Alejandro Tello",
  contacto: "Contacto — Alejandro Tello",
};

const parseRoute = () => {
  const h = location.hash.replace(/^#\/?/, "");
  const [view, param] = h.split("/");
  if (view === "p" && PROJECTS[param]) return { name: "proyecto", slug: param };
  return { name: VIEWS.includes(view) ? view : "sobre-mi", slug: null };
};

const applyView = () => {
  const { name, slug } = parseRoute();
  if (name === "proyecto") renderProject(slug);
  viewEls.forEach((el) =>
    el.classList.toggle("is-active", el.dataset.view === name)
  );
  const navName = name === "proyecto" ? "proyectos" : name;
  viewLinks.forEach((l) =>
    l.classList.toggle("is-active", l.dataset.viewLink === navName)
  );
  document.title =
    name === "proyecto" ? `${PROJECTS[slug].title} — Alejandro Tello` : viewTitles[name];
  window.scrollTo({ top: 0, behavior: "instant" });
  closeMenu();
};

window.addEventListener("hashchange", applyView);
applyView();


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
