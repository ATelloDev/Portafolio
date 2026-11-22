# Portafolio — Alejandro Tello Hernández

Sitio personal en HTML, CSS y JavaScript puro (sin dependencias ni build).
Desplegado con GitHub Pages.

## Estructura

```
├── index.html                  # Página principal (single-page)
├── assets/
│   ├── css/styles.css          # Estilos
│   ├── js/script.js            # Nav, scroll-spy y animaciones
│   ├── img/                    # Favicon e imágenes
│   │   └── projects/           # Capturas de proyectos
│   └── docs/                   # CV en PDF
├── projects/
│   └── ec0835/                 # Proyecto de certificación EC0835
│       ├── docs/               # Manuales de usuario y técnico
│       └── dist/               # Ejecutable de la aplicación
├── .nojekyll                   # GitHub Pages sin Jekyll
└── .gitignore
```

## Desarrollo local

No requiere instalación. Se puede abrir `index.html` directamente o servir
la carpeta con cualquier servidor estático:

```bash
python -m http.server 8000
# http://localhost:8000
```
