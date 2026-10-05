/**
 * Plan de estudios (Pensum 2020) del Programa Ingeniería de Sistemas.
 *
 * Fuente: Acuerdo No. 44 del 02 de diciembre de 2020 del Consejo Académico,
 * "Por el cual se aprueba el nuevo plan de estudios y el plan de transición del
 * programa académico de Ingeniería de Sistemas, modalidad presencial de la
 * Universidad de la Amazonia".
 * https://www.uniamazonia.edu.co/documentos/docs/Consejo%20Academico/Acuerdos/2020/Acuerdo%2044%20Plan%20de%20Estudios%20de%20Ingenieria%20de%20Sistemas.pdf
 *
 * El PDF es un escaneo sin texto seleccionable: la tabla se transcribió a mano y
 * se verificó contra el documento. Los créditos por semestre suman 178,
 * tal como lo establece el Artículo Primero del acuerdo.
 */

const BASE = "https://www.uniamazonia.edu.co"
const DOCS = `${BASE}/documentos/docs`

export const curriculum = {
  title: "Plan de estudios vigente",
  summary:
    "Pensum 2020: diez semestres de formación presencial con 51 espacios académicos y una opción de grado, para un total de 178 créditos académicos.",
  agreement: "Acuerdo 44 del 02 de diciembre de 2020",
  approval:
    "El Consejo Académico aprobó el Plan de Estudios del programa, modalidad presencial, con un total de 178 créditos académicos que incluyen la opción de grado correspondiente a 10 créditos (Artículo Primero).",
  electives:
    "Las electivas tienen carácter de profundización: su listado se oferta cada semestre y lo define el Comité de Currículo (Artículo Segundo).",
  href: `${DOCS}/Consejo%20Academico/Acuerdos/2020/Acuerdo%2044%20Plan%20de%20Estudios%20de%20Ingenieria%20de%20Sistemas.pdf`,
} as const

export type Nature = "T" | "T-P" | "P"

export type AreaKey = "socio" | "ciencias" | "basica" | "aplicada"

export type Area = {
  key: AreaKey
  label: string
  /** Clases del punto de color (usado junto al label para no depender solo del color). */
  dot: string
  chip: string
}

/** Áreas curriculares del plan, en el orden en que aparecen en el documento. */
export const AREAS: Area[] = [
  {
    key: "socio",
    label: "Socio-Humanística",
    dot: "bg-brand-yellow",
    chip: "bg-brand-yellow/25 text-amber-900",
  },
  {
    key: "ciencias",
    label: "Ciencias Básicas",
    dot: "bg-sky-500",
    chip: "bg-sky-100 text-sky-800",
  },
  {
    key: "basica",
    label: "Básica de Ingeniería",
    dot: "bg-brand-green",
    chip: "bg-brand-green-light text-brand-green-dark",
  },
  {
    key: "aplicada",
    label: "Ingeniería Aplicada",
    dot: "bg-violet-500",
    chip: "bg-violet-100 text-violet-800",
  },
]

export const areaByKey = new Map(AREAS.map((area) => [area.key, area]))

export const natures = [
  { code: "T", label: "Teórico" },
  { code: "T-P", label: "Teórico-práctico" },
  { code: "P", label: "Práctico" },
] as const

export type Hours = {
  /** Trabajo presencial */
  tp: number
  /** Trabajo dirigido */
  td: number
  /** Trabajo independiente */
  ti: number
  /** Intensidad horaria semanal docente */
  ih: number
  /** Intensidad horaria semanal */
  ihs: number
  /** Intensidad horaria semestral */
  hs: number
}

export type Course = {
  /** Número del espacio en la tabla del acuerdo (la opción de grado no está numerada). */
  no: number | null
  code: string
  name: string
  nature: Nature
  credits: number
  semester: number
  area: AreaKey | null
  /** Código del prerrequisito, o null cuando el documento indica "No aplica". */
  prereq: string | null
  hours: Hours | null
  kind: "course" | "degree"
}

const h = (tp: number, td: number, ti: number, ih: number, ihs: number, hs: number): Hours => ({
  tp,
  td,
  ti,
  ih,
  ihs,
  hs,
})

const hGrado: Hours = { tp: 0, td: 0, ti: 30, ih: 0, ihs: 30, hs: 480 }

export const courses: Course[] = [
  // ── Semestre I (18 créditos) ────────────────────────────────────────────────
  { no: 1, code: "9900001", name: "Comunicación", nature: "T", credits: 2, semester: 1, area: "socio", prereq: null, hours: h(3, 0, 3, 3, 6, 96), kind: "course" },
  { no: 2, code: "9900008", name: "Deporte y Cultura", nature: "T", credits: 2, semester: 1, area: "socio", prereq: null, hours: h(3, 0, 3, 3, 6, 96), kind: "course" },
  { no: 3, code: "9900011", name: "Matemáticas I", nature: "T", credits: 3, semester: 1, area: "ciencias", prereq: null, hours: h(3, 1, 5, 4, 9, 144), kind: "course" },
  { no: 4, code: "9900020", name: "Física I", nature: "T-P", credits: 3, semester: 1, area: "ciencias", prereq: null, hours: h(2, 2, 5, 4, 9, 144), kind: "course" },
  { no: 5, code: "9900030", name: "Biología General", nature: "T-P", credits: 3, semester: 1, area: "ciencias", prereq: null, hours: h(2, 2, 5, 4, 9, 144), kind: "course" },
  { no: 6, code: "9900033", name: "Introducción a la Ingeniería", nature: "T-P", credits: 2, semester: 1, area: "basica", prereq: null, hours: h(2, 1, 3, 3, 6, 96), kind: "course" },
  { no: 7, code: "9900036", name: "Lógica y Algoritmos I", nature: "T-P", credits: 3, semester: 1, area: "basica", prereq: null, hours: h(2, 2, 5, 4, 9, 144), kind: "course" },

  // ── Semestre II (17 créditos) ───────────────────────────────────────────────
  { no: 8, code: "9900002", name: "Constitución y Democracia", nature: "T", credits: 2, semester: 2, area: "socio", prereq: null, hours: h(3, 0, 3, 3, 6, 96), kind: "course" },
  { no: 9, code: "9900012", name: "Matemáticas II", nature: "T", credits: 3, semester: 2, area: "ciencias", prereq: null, hours: h(3, 1, 5, 4, 9, 144), kind: "course" },
  { no: 10, code: "9900021", name: "Física II", nature: "T-P", credits: 3, semester: 2, area: "ciencias", prereq: null, hours: h(2, 2, 5, 4, 9, 144), kind: "course" },
  { no: 11, code: "9900026", name: "Química I", nature: "T-P", credits: 3, semester: 2, area: "ciencias", prereq: null, hours: h(2, 2, 5, 4, 9, 144), kind: "course" },
  { no: 12, code: "9900037", name: "Lógica y Algoritmos II", nature: "T-P", credits: 3, semester: 2, area: "basica", prereq: null, hours: h(2, 2, 5, 4, 9, 144), kind: "course" },
  { no: 13, code: "9900038", name: "Teoría General de Sistemas", nature: "T-P", credits: 3, semester: 2, area: "basica", prereq: null, hours: h(2, 2, 5, 4, 9, 144), kind: "course" },

  // ── Semestre III (17 créditos) ──────────────────────────────────────────────
  { no: 14, code: "9900009", name: "Idioma Extranjero I", nature: "T-P", credits: 2, semester: 3, area: "socio", prereq: null, hours: h(2, 1, 3, 3, 6, 96), kind: "course" },
  { no: 15, code: "9900050", name: "Álgebra Lineal", nature: "T", credits: 3, semester: 3, area: "ciencias", prereq: null, hours: h(3, 1, 5, 4, 9, 144), kind: "course" },
  { no: 16, code: "72030301", name: "Matemáticas Discreta", nature: "T-P", credits: 4, semester: 3, area: "ciencias", prereq: null, hours: h(2, 3, 7, 5, 12, 192), kind: "course" },
  { no: 17, code: "72030302", name: "Análisis de Sistemas", nature: "T-P", credits: 4, semester: 3, area: "basica", prereq: null, hours: h(2, 3, 7, 5, 12, 192), kind: "course" },
  { no: 18, code: "72030303", name: "Estructuras de Datos I", nature: "T-P", credits: 4, semester: 3, area: "basica", prereq: "9900037", hours: h(2, 3, 7, 5, 12, 192), kind: "course" },

  // ── Semestre IV (18 créditos) ───────────────────────────────────────────────
  { no: 19, code: "72030401", name: "Ecuaciones Diferenciales", nature: "T-P", credits: 3, semester: 4, area: "ciencias", prereq: "9900012", hours: h(2, 2, 5, 4, 9, 144), kind: "course" },
  { no: 20, code: "72030402", name: "Estadística para Ingeniería", nature: "T-P", credits: 4, semester: 4, area: "basica", prereq: null, hours: h(2, 3, 7, 5, 12, 192), kind: "course" },
  { no: 21, code: "72030403", name: "Ingeniería de Software I", nature: "T-P", credits: 4, semester: 4, area: "aplicada", prereq: "72030302", hours: h(2, 3, 7, 5, 12, 192), kind: "course" },
  { no: 22, code: "72030404", name: "Sistemas Operativos", nature: "T-P", credits: 3, semester: 4, area: "aplicada", prereq: null, hours: h(2, 2, 5, 4, 9, 144), kind: "course" },
  { no: 23, code: "72030405", name: "Estructuras de Datos II", nature: "T-P", credits: 4, semester: 4, area: "basica", prereq: "72030303", hours: h(2, 3, 7, 5, 12, 192), kind: "course" },

  // ── Semestre V (18 créditos) ────────────────────────────────────────────────
  { no: 24, code: "9900010", name: "Idioma Extranjero II", nature: "T-P", credits: 2, semester: 5, area: "socio", prereq: null, hours: h(2, 1, 3, 3, 6, 96), kind: "course" },
  { no: 25, code: "72030501", name: "Métodos Numéricos", nature: "T-P", credits: 4, semester: 5, area: "ciencias", prereq: null, hours: h(2, 3, 7, 5, 12, 192), kind: "course" },
  { no: 26, code: "72030502", name: "Ingeniería de Software II", nature: "T-P", credits: 4, semester: 5, area: "aplicada", prereq: null, hours: h(2, 3, 7, 5, 12, 192), kind: "course" },
  { no: 27, code: "72030503", name: "Programación Web", nature: "T-P", credits: 4, semester: 5, area: "aplicada", prereq: null, hours: h(2, 3, 7, 5, 12, 192), kind: "course" },
  { no: 28, code: "72030504", name: "Diseño de Base de Datos", nature: "T-P", credits: 4, semester: 5, area: "aplicada", prereq: null, hours: h(2, 3, 7, 5, 12, 192), kind: "course" },

  // ── Semestre VI (18 créditos) ───────────────────────────────────────────────
  { no: 29, code: "9900003", name: "Filosofía e Historia de la Ciencia", nature: "T", credits: 2, semester: 6, area: "socio", prereq: null, hours: h(3, 0, 3, 3, 6, 96), kind: "course" },
  { no: 30, code: "72030601", name: "Modelos Determinísticos", nature: "T-P", credits: 4, semester: 6, area: "ciencias", prereq: null, hours: h(2, 3, 7, 5, 12, 192), kind: "course" },
  { no: 31, code: "72030602", name: "Ingeniería de Software III", nature: "T-P", credits: 4, semester: 6, area: "aplicada", prereq: null, hours: h(2, 3, 7, 5, 12, 192), kind: "course" },
  { no: 32, code: "72030603", name: "Programación Móvil", nature: "T-P", credits: 4, semester: 6, area: "aplicada", prereq: null, hours: h(2, 3, 7, 5, 12, 192), kind: "course" },
  { no: 33, code: "72030604", name: "Redes Informáticas I", nature: "T-P", credits: 4, semester: 6, area: "aplicada", prereq: null, hours: h(2, 3, 7, 5, 12, 192), kind: "course" },

  // ── Semestre VII (18 créditos) ──────────────────────────────────────────────
  { no: 34, code: "9900034", name: "Metodología de la Investigación I", nature: "T", credits: 2, semester: 7, area: "basica", prereq: null, hours: h(3, 0, 3, 3, 6, 96), kind: "course" },
  { no: 35, code: "72030701", name: "Proyectos Software", nature: "T-P", credits: 4, semester: 7, area: "aplicada", prereq: "72030602", hours: h(2, 3, 7, 5, 12, 192), kind: "course" },
  { no: 36, code: "72030702", name: "Inteligencia Computacional I", nature: "T-P", credits: 4, semester: 7, area: "aplicada", prereq: null, hours: h(2, 3, 7, 5, 12, 192), kind: "course" },
  { no: 37, code: "72030703", name: "Redes Informáticas II", nature: "T-P", credits: 4, semester: 7, area: "aplicada", prereq: "72030604", hours: h(2, 3, 7, 5, 12, 192), kind: "course" },
  { no: 38, code: "72030704", name: "Administración de Base de Datos", nature: "T-P", credits: 4, semester: 7, area: "aplicada", prereq: "72030504", hours: h(2, 3, 7, 5, 12, 192), kind: "course" },

  // ── Semestre VIII (18 créditos) ─────────────────────────────────────────────
  { no: 39, code: "9900004", name: "Desarrollo Humano", nature: "T", credits: 3, semester: 8, area: "socio", prereq: null, hours: h(3, 1, 5, 4, 9, 144), kind: "course" },
  { no: 40, code: "9900035", name: "Metodología de la Investigación II", nature: "T", credits: 2, semester: 8, area: "basica", prereq: null, hours: h(3, 0, 3, 3, 6, 96), kind: "course" },
  { no: 41, code: "72030801", name: "Planeación Estratégica de Sistemas de Información", nature: "T-P", credits: 4, semester: 8, area: "aplicada", prereq: null, hours: h(2, 3, 7, 5, 12, 192), kind: "course" },
  { no: 42, code: "72030802", name: "Inteligencia Computacional II", nature: "T-P", credits: 4, semester: 8, area: "aplicada", prereq: "72030702", hours: h(2, 3, 7, 5, 12, 192), kind: "course" },
  { no: 43, code: "72030803", name: "Taller de Emprendimiento e Innovación", nature: "T-P", credits: 3, semester: 8, area: "aplicada", prereq: null, hours: h(2, 2, 5, 4, 9, 144), kind: "course" },
  { no: 44, code: "9900006", name: "Ética", nature: "T", credits: 2, semester: 8, area: "socio", prereq: null, hours: h(3, 0, 3, 3, 6, 96), kind: "course" },

  // ── Semestre IX (18 créditos) ───────────────────────────────────────────────
  { no: 45, code: "9900005", name: "Universidad Región y Medio Ambiente", nature: "T", credits: 3, semester: 9, area: "socio", prereq: null, hours: h(3, 1, 5, 4, 9, 144), kind: "course" },
  { no: 46, code: "72030901", name: "Gestión Tecnológica", nature: "T-P", credits: 3, semester: 9, area: "aplicada", prereq: null, hours: h(2, 2, 5, 4, 9, 144), kind: "course" },
  { no: 47, code: "72030902", name: "Taller de Escritura Científica", nature: "T-P", credits: 4, semester: 9, area: "basica", prereq: "9900035", hours: h(2, 3, 7, 5, 12, 192), kind: "course" },
  { no: 48, code: "72030903", name: "Electiva I", nature: "T-P", credits: 4, semester: 9, area: "aplicada", prereq: null, hours: h(2, 3, 7, 5, 12, 192), kind: "course" },
  { no: 49, code: "72030904", name: "Electiva II", nature: "T-P", credits: 4, semester: 9, area: "aplicada", prereq: null, hours: h(2, 3, 7, 5, 12, 192), kind: "course" },

  // ── Semestre X (18 créditos) ────────────────────────────────────────────────
  { no: 50, code: "72031001", name: "Electiva III", nature: "T-P", credits: 4, semester: 10, area: "aplicada", prereq: null, hours: h(2, 3, 7, 5, 12, 192), kind: "course" },
  { no: 51, code: "72031002", name: "Electiva IV", nature: "T-P", credits: 4, semester: 10, area: "aplicada", prereq: null, hours: h(2, 3, 7, 5, 12, 192), kind: "course" },
  { no: null, code: "72031003", name: "Opción de Grado", nature: "P", credits: 10, semester: 10, area: null, prereq: null, hours: hGrado, kind: "degree" },
]

export type Semester = {
  number: number
  credits: number
  courses: Course[]
}

/** Los 10 semestres del plan, con totales calculados desde los datos. */
export const semesters: Semester[] = Array.from({ length: 10 }, (_, index) => {
  const number = index + 1
  const items = courses.filter((course) => course.semester === number)
  return {
    number,
    courses: items,
    credits: items.reduce((sum, course) => sum + course.credits, 0),
  }
})

export const courseByCode = new Map(courses.map((course) => [course.code, course]))

export const totalCredits = courses.reduce((sum, course) => sum + course.credits, 0)

/** Espacios académicos numerados (excluye la opción de grado). */
export const totalSpaces = courses.filter((course) => course.kind === "course").length

export const degreeCourse = courses.find((course) => course.kind === "degree")!

/** Número de espacios por área, para la leyenda. */
export const areaCounts = AREAS.map((area) => ({
  ...area,
  count: courses.filter((course) => course.area === area.key).length,
}))

export const creditsByArea = AREAS.map((area) => ({
  ...area,
  credits: courses
    .filter((course) => course.area === area.key)
    .reduce((sum, course) => sum + course.credits, 0),
}))

export const planStats = [
  { label: "Semestres", value: String(semesters.length) },
  { label: "Créditos académicos", value: String(totalCredits) },
  { label: "Espacios académicos", value: `${totalSpaces} + opción de grado` },
  { label: "Áreas curriculares", value: String(AREAS.length) },
] as const
