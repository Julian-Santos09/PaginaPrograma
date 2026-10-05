# Ingeniería de Sistemas — Universidad de la Amazonia

Landing page para publicar la información oficial del **Programa de Ingeniería de Sistemas** de la Universidad de la Amazonia (Uniamazonia), Florencia – Caquetá.

**Fuente del contenido:** [Página oficial del programa](https://www.uniamazonia.edu.co/inicio/index.php/es/programas/pregrado/ingenieria/ingenieria-de-sistemas.html)

## Stack

- [React 19](https://react.dev/) + [Vite 7](https://vite.dev/) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/) (vía `@tailwindcss/vite`)
- [shadcn/ui](https://ui.shadcn.com/) (estilo radix-nova, iconos Lucide)

## Ejecutar

```bash
npm install      # instalar dependencias
npm run dev      # servidor de desarrollo (http://localhost:5173)
npm run build    # compilación de producción (dist/)
npm run preview  # previsualizar el build de producción
```

## Estructura

```
src/
├── App.tsx                    # Página única (landing)
├── index.css                  # Tailwind + paleta institucional (verde/amarillo)
├── data/program.ts            # Todo el contenido oficial del programa y enlaces
└── components/
    ├── Header.tsx             # Encabezado sticky + menú móvil
    ├── Hero.tsx               # Portada con datos rápidos
    ├── SectionHeading.tsx     # Encabezado reutilizable de secciones
    ├── ProgramSection.tsx     # Propósito, misión/visión, perfil, datos oficiales
    ├── CurriculumSection.tsx  # Plan de estudios, requisitos, inversión
    ├── DocumentsSection.tsx   # Documentos de interés
    ├── ContactSection.tsx     # Coordinación y enlaces útiles
    ├── Footer.tsx             # Pie de página institucional
    └── ui/                    # Componentes shadcn/ui
```

## Personalización

- **Colores institucionales:** definidos en `src/index.css` bajo `:root` (`--brand-green`, `--brand-yellow`, etc.).
- **Contenido y enlaces:** editar `src/data/program.ts` (textos, datos oficiales, PDFs, contactos).
- **Imágenes:** `public/images/` (banner y logo institucional descargados del sitio oficial).
