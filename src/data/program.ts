/**
 * Contenido oficial del Programa Ingeniería de Sistemas
 * Fuente: Universidad de la Amazonia — sitio institucional
 * https://www.uniamazonia.edu.co/inicio/index.php/es/programas/pregrado/ingenieria/ingenieria-de-sistemas.html
 */

const BASE = "https://www.uniamazonia.edu.co"
const DOCS = `${BASE}/documentos/docs`

export const links = {
  officialProgram: `${BASE}/inicio/index.php/es/programas/pregrado/ingenieria/ingenieria-de-sistemas.html`,
  university: `${BASE}/inicio/index.php/es/`,
  admissions: `${BASE}/inicio/index.php/es/la-universidad/dependencias/departamentos/direccion-de-admision-registro-y-control-academico/118-inscripciones.html`,
  requirements: `${BASE}/inicio/index.php/es/la-universidad/dependencias/departamentos/direccion-de-admision-registro-y-control-academico/228-aspirantes.html`,
  pqrs: "https://chaira.uniamazonia.edu.co/PQRSD/View/Public/PQRS/MenuPublicoPQRSD.aspx",
  chaira: "https://chaira.uniamazonia.edu.co/Chaira/Logon.aspx",
  aulaExtendida: "https://aulaextendida.uniamazonia.edu.co/aulaextendida/",
  editorial: "https://editorial.uniamazonia.edu.co/",
  social: {
    facebook: "https://www.facebook.com/uniamazonia.edu.co",
    instagram: "https://www.instagram.com/uniamazonia/",
    x: "https://x.com/uniamazonia",
    youtube: "https://www.youtube.com/c/uamazonia",
    tiktok: "https://www.tiktok.com/@uniamazonia",
  },
} as const

export const program = {
  name: "Ingeniería de Sistemas",
  university: "Universidad de la Amazonia",
  faculty: "Facultad de Ingeniería",
  degree: "Ingeniero de Sistemas",
  modality: "Presencial",
  schedule: "Diurna",
  duration: "10 semestres",
  credits: "178",
  snies: "52384",
  place: "Florencia – Caquetá, Campus Florencia",
  tagline:
    "Forma profesionales capaces de crear, innovar y aplicar soluciones computacionales soportadas en Tecnologías de la Información para el desarrollo de la región Amazónica y del país.",
  purpose:
    "El Programa Ingeniería de Sistemas de la Universidad de la Amazonia, tiene como principal propósito, desarrollar procesos de formación integral de profesionales de la Ingeniería de Sistemas, mediante el desarrollo de un currículo que aborda los conocimientos propios de las ciencias básicas, la ingeniería, el campo tecnológico, investigativo, socio-humanista y de formación complementaria, que le permitirá ser capaz de interactuar con su entorno e incidir positivamente en él, mediante la creación, innovación y aplicación de soluciones computacionales soportadas en las Tecnologías de la Información y la Comunicación, que contribuyan al fortalecimiento y progreso económico, social, tecnológico y sustentable de la región Amazónica y el país.",
  mission:
    "El programa académico Ingeniería de Sistemas de la Universidad de la Amazonia, asume como encargo social la formación de profesionales íntegros, con capacidad para crear, innovar, formular y solucionar problemáticas organizacionales y productivas, apoyados en el desarrollo de sistemas de información soportados en las diferentes tecnologías informáticas, con el propósito de contribuir al desarrollo social, económico y tecnológico de la región amazónica y del país.",
  vision:
    "Ingeniería de Sistemas será un programa académico en permanente acreditación académica y social, líder en la formación integral de profesionales, competentes en el campo académico, investigativo y humanístico; comprometidos con el desarrollo tecnológico de la región amazónica y del país apoyados en tecnologías de información.",
  profile:
    "El Ingeniero de Sistemas de la Universidad de la Amazonia es un profesional que comprende las dinámicas del entorno, reconociendo las implicaciones y las responsabilidades legales, profesionales, éticas, sociales, económicas y culturales del ejercicio de su profesión. Así mismo, reconoce que la evolución constante de su disciplina y las condiciones cambiantes del entorno hacen necesario implementar estrategias autónomas de aprendizaje continuo, orientados a su perfeccionamiento profesional.",
} as const

export const officialData = [
  { label: "Título que otorga", value: "Ingeniero de Sistemas" },
  { label: "Modalidad", value: "Presencial" },
  { label: "Jornada", value: "Diurna" },
  { label: "Duración del programa", value: "10 semestres" },
  { label: "Número de créditos académicos", value: "178" },
  { label: "Código SNIES", value: "52384" },
  { label: "Lugar de desarrollo", value: "Florencia – Caquetá, Campus Florencia" },
] as const

export const legalData = [
  {
    label: "Acuerdo de creación",
    value: "Acuerdo 16 del 26 de agosto de 2004",
    href: `${DOCS}/Consejo%20Superior/Acuerdos/2004/Acuerdo%20016%20-%20Por%20el%20cual%20se%20autoriza%20la%20creacion%20del%20programa%20academico%20de%20Ingenieria%20de%20Sistemas.pdf`,
  },
  {
    label: "Resolución de Registro Calificado",
    value: "001562 del 16 de febrero de 2022",
    href: `${DOCS}/Programas%20Academicos/Ingenieria%20de%20Sistemas/Resolucion%201562%20-%20Registro%20Calificado.pdf`,
  },
] as const

export const requirements = {
  title: "Requisitos de admisión",
  summary:
    "Conoce los requisitos, documentos y cronograma del proceso de inscripción y admisión del programa.",
  href: links.requirements,
} as const

export const investment = [
  {
    label: "Valor de inscripción",
    value: "8.0% del S.M.M.L.V.",
    reference: "Acuerdo 02 del 26 de enero de 2012",
    href: `${DOCS}/Consejo%20Superior/Acuerdos/2012/Acuerdo%20002%20-%20Por%20el%20cual%20se%20fijan%20los%20derechos%20pecuniarios.pdf`,
  },
  {
    label: "Valor derecho de matrícula",
    value: "Tabla de matrícula de pregrado presencial",
    reference: "Acuerdo 01 del 26 de enero de 2012",
    href: `${DOCS}/Consejo%20Superior/Acuerdos/2012/Acuerdo%20001%20-%20Por%20el%20cual%20se%20establece%20la%20tabla%20de%20matricula%20para%20estudiantes%20de%20pregrado%20presencial.pdf`,
  },
] as const

export const documents = [
  {
    title: "Brochure Ingeniería de Sistemas",
    description: "Presentación general del programa, perfil de egreso y oportunidades.",
    href: `${DOCS}/Programas%20Academicos/Ingenieria%20de%20Sistemas/BROCHURE%20INGENIERIA%20DE%20SISTEMAS.pdf`,
    type: "PDF",
  },
  {
    title: "Contenidos programáticos pensum 2020",
    description: "Asignaturas, créditos y descripción de cada curso del plan de estudios.",
    href: "https://drive.google.com/drive/folders/1OjF8Tb43WolUrTwbHwLWE9UDTKP45xVQ?usp=drive_link",
    type: "Drive",
  },
  {
    title: "Opciones de grado",
    description: "Modalidades y alternativas de trabajo de grado del programa.",
    href: `${DOCS}/Programas%20Academicos/Ingenieria%20de%20Sistemas/Formatos%20de%20Opcion%20de%20grado/Opciones%20de%20grado.pdf`,
    type: "PDF",
  },
  {
    title: "Formatos de Opción de Grado",
    description: "Formatos oficiales para el registro de la opción de grado.",
    href: "https://drive.google.com/drive/folders/14EBlcWxRo1mfWvUKeTcIXoWUWORG0KUJ?usp=sharing",
    type: "Drive",
  },
  {
    title: "Formato Notificación de Opción de Grado",
    description: "Procedimiento de aprobación y notificación de la opción de grado.",
    href: `${DOCS}/Sistema%20Integrado%20de%20Gestion%20de%20Calidad/6.%20Procesos/2.%20Misional/Docencia/Procedimientos/7.%20Aprobacion%20de%20opcion%20de%20grado/FO-M-DC-07-03.pdf`,
    type: "PDF",
  },
  {
    title: "Protocolo de Sustentación y Socialización",
    description: "Guía para la sustentación y socialización del trabajo de grado.",
    href: "https://drive.google.com/drive/folders/1IuMu73ZW26iHtAeWZHUp9UXN2dHLfxus?usp=sharing",
    type: "Drive",
  },
  {
    title: "Acuerdo No. 019 de 2002",
    description: "Línea de investigación Sistemas de Información Geográfica — Facultad de Ingeniería.",
    href: `${DOCS}/Consejo%20Academico/Acuerdos/2002/Acuerdo%2019%20-%20Por%20el%20cual%20se%20adopta%20la%20linea%20de%20investigacion%20Sistemas%20de%20Formacion%20Geografica%20para%20la%20facultad%20de%20ingenieria.pdf`,
    type: "PDF",
  },
] as const

export const coordinator = {
  name: "Paula Andrea Chica Murcia",
  role: "Coordinadora de Programa",
  phone: "320 454 1936",
  phoneHref: "tel:+573204541936",
  email: "sistemas@uniamazonia.edu.co",
  location:
    "Florencia – Caquetá, Campus Florencia, barrio El Porvenir, bloque administrativo, primer piso.",
} as const

export const quickStats = [
  { label: "Semestres", value: "10" },
  { label: "Créditos académicos", value: "178" },
  { label: "Código SNIES", value: "52384" },
  { label: "Jornada", value: "Diurna" },
] as const
