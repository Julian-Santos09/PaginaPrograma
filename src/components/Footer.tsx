import { ArrowUpRightIcon, MailIcon, MapPinIcon } from "lucide-react"
import { WovenPattern } from "@/components/WovenPattern"
import { coordinator, links, program } from "@/data/program"

const SOCIAL_LINKS = [
  { label: "Facebook", href: links.social.facebook },
  { label: "Instagram", href: links.social.instagram },
  { label: "X", href: links.social.x },
  { label: "YouTube", href: links.social.youtube },
  { label: "TikTok", href: links.social.tiktok },
] as const

const FOOTER_COLUMNS = [
  {
    title: "Programa",
    items: [
      { label: "El programa", href: "#programa" },
      { label: "Plan de estudios", href: "#plan" },
      { label: "Documentos", href: "#documentos" },
      { label: "Contacto", href: "#contacto" },
    ],
  },
  {
    title: "Institucional",
    items: [
      { label: "Sitio oficial Uniamazonia", href: links.university },
      { label: "Admisiones e inscripciones", href: links.admissions },
      { label: "PQRS-D", href: links.pqrs },
      { label: "Editorial", href: links.editorial },
    ],
  },
  {
    title: "Accesos",
    items: [
      { label: "Ingreso a Chairá", href: links.chaira },
      { label: "Aula Extendida", href: links.aulaExtendida },
      { label: "Sitio oficial del programa", href: links.officialProgram },
    ],
  },
] as const

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-canopy text-white">
      <WovenPattern className="absolute inset-x-0 top-0 h-24 text-brand-yellow/[0.14]" size={56} />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-transparent to-canopy"
      />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div className="flex flex-col gap-4">
          <img
            src="/images/logo-uniamazonia.jpg"
            alt="Universidad de la Amazonia"
            className="h-14 w-auto self-start rounded-md bg-white p-1"
            loading="lazy"
          />
          <div>
            <p className="font-heading text-lg font-semibold">Programa {program.name}</p>
            <p className="mt-1 text-sm text-white/70">{program.university}, {program.faculty}</p>
          </div>
          <div className="flex flex-col gap-2 text-sm text-white/75">
            <p className="flex items-start gap-2">
              <MapPinIcon className="mt-0.5 size-4 shrink-0 text-brand-yellow" />
              Sede Porvenir, Calle 17 Diagonal 17 con Carrera 3F, Florencia, Caquetá, Colombia
            </p>
            <a
              className="flex items-center gap-2 transition-colors hover:text-brand-yellow"
              href={`mailto:${coordinator.email}`}
            >
              <MailIcon className="size-4 shrink-0 text-brand-yellow" />
              sistemas@uniamazonia.edu.co
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-1">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/70 underline-offset-4 transition-colors hover:text-brand-yellow hover:underline"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>

        {FOOTER_COLUMNS.map((column) => (
          <nav key={column.title} className="flex flex-col gap-3">
            <p className="font-heading text-sm font-medium tracking-wide text-brand-yellow">{column.title}</p>
            <ul className="flex flex-col gap-2">
              {column.items.map((item) => {
                const isInternal = item.href.startsWith("#")
                const common =
                  "inline-flex items-center gap-1 text-sm text-white/75 transition-colors hover:text-brand-yellow"
                return isInternal ? (
                  <li key={item.label}>
                    <a className={common} href={item.href}>
                      {item.label}
                    </a>
                  </li>
                ) : (
                  <li key={item.label}>
                    <a className={common} href={item.href} target="_blank" rel="noopener noreferrer">
                      {item.label}
                      <ArrowUpRightIcon className="size-3.5" />
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>
        ))}
      </div>

      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>Vigilada Ministerio de Educación Nacional, NIT 891190346-1</p>
          <p>© {new Date().getFullYear()} Universidad de la Amazonia — Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  )
}
