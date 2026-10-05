import { useEffect, useState } from "react"
import { ArrowUpRightIcon, MailIcon, MapPinIcon, PhoneIcon, XIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/SectionHeading"
import { coordinator, links } from "@/data/program"

/** Los punteros con hover abren la vista ampliada al pasar el cursor; en táctil se usa el clic. */
const CAN_HOVER =
  typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches

const CONTACT_ROWS = [
  { icon: PhoneIcon, label: "Teléfono", value: coordinator.phone, href: coordinator.phoneHref },
  { icon: MailIcon, label: "Correo electrónico", value: coordinator.email, href: `mailto:${coordinator.email}` },
] as const

const QUICK_LINKS = [
  { label: "Proceso de admisión e inscripciones", href: links.admissions },
  { label: "Requisitos de aspirantes", href: links.requirements },
  { label: "Peticiones, quejas, reclamos y sugerencias (PQRS-D)", href: links.pqrs },
  { label: "Aula Extendida", href: links.aulaExtendida },
  { label: "Ingreso al sistema Chairá", href: links.chaira },
] as const

export function ContactSection() {
  const [photoOpen, setPhotoOpen] = useState(false)

  useEffect(() => {
    if (!photoOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setPhotoOpen(false)
    }
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [photoOpen])

  return (
    <section id="contacto" className="scroll-mt-28 bg-card py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          title="Habla con la coordinación del programa"
          description="Para dudas sobre admisión, inscripción, plan de estudios o trámites de grado."
        />

        <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          {/* Bloque de coordinación */}
          <div className="rounded-2xl bg-background p-6 shadow-sm ring-1 ring-foreground/5 sm:p-8">
            <span className="flex items-center gap-3" aria-hidden>
              <span className="size-2.5 rotate-45 bg-brand-yellow" />
              <span className="h-px w-12 bg-brand-green/45" />
            </span>
            <div className="mt-4 flex items-center gap-4">
              <div
                className="shrink-0"
                onMouseEnter={CAN_HOVER ? () => setPhotoOpen(true) : undefined}
                onMouseLeave={CAN_HOVER ? () => setPhotoOpen(false) : undefined}
              >
                <button
                  type="button"
                  onClick={() => setPhotoOpen((open) => (CAN_HOVER ? true : !open))}
                  aria-expanded={photoOpen}
                  aria-haspopup="dialog"
                  aria-label={`Ver la foto de ${coordinator.name} en grande`}
                  className="group block cursor-zoom-in rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-yellow"
                >
                  <img
                    src="/images/jefe-programa.jpg"
                    alt={coordinator.name}
                    className="size-16 rounded-full object-cover object-top ring-2 ring-brand-green/30 transition-transform duration-300 group-hover:scale-105 group-focus-visible:scale-105 motion-reduce:transition-none sm:size-20"
                    loading="lazy"
                    width={80}
                    height={80}
                  />
                </button>

                {photoOpen && (
                  <div
                    className={`fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-6 backdrop-blur-sm motion-safe:animate-in motion-safe:fade-in motion-safe:zoom-in-95 ${
                      CAN_HOVER ? "pointer-events-none" : ""
                    }`}
                    onClick={() => setPhotoOpen(false)}
                    role="dialog"
                    aria-modal="true"
                    aria-label={`Foto de ${coordinator.name}`}
                  >
                    <figure
                      className="pointer-events-auto relative"
                      onClick={(event) => event.stopPropagation()}
                    >
                      <button
                        type="button"
                        onClick={() => setPhotoOpen(false)}
                        aria-label="Cerrar vista ampliada"
                        className="absolute -top-11 right-0 grid size-9 place-items-center rounded-full border border-white/25 bg-black/40 text-white/80 transition-colors hover:bg-black/60 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-yellow"
                      >
                        <XIcon className="size-4" />
                      </button>
                      <img
                        src="/images/jefe-programa.jpg"
                        alt={`Foto de ${coordinator.name}`}
                        className="max-h-[70vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl ring-1 ring-white/20"
                      />
                      <figcaption className="mt-3 text-center text-sm text-white/85">
                        {coordinator.name}
                        <span className="block text-xs text-white/55">{coordinator.role}</span>
                      </figcaption>
                    </figure>
                  </div>
                )}
              </div>

              <div className="min-w-0">
                <h3 className="font-heading text-2xl font-medium tracking-tight">{coordinator.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{coordinator.role}</p>
              </div>
            </div>

            <dl className="mt-6">
              {CONTACT_ROWS.map((row) => (
                <div key={row.label} className="border-t border-border py-4 first:border-t-0 first:pt-0">
                  <div className="flex items-baseline gap-3">
                    <dt className="shrink-0 text-sm text-muted-foreground">{row.label}</dt>
                    <span
                      aria-hidden
                      className="min-w-6 flex-1 -translate-y-1 border-b border-dotted border-foreground/25"
                    />
                    <dd className="shrink-0">
                      <a
                        href={row.href}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-brand-green"
                      >
                        <row.icon className="size-4 text-brand-green" />
                        {row.value}
                      </a>
                    </dd>
                  </div>
                </div>
              ))}
            </dl>

            <div className="mt-4 flex items-start gap-3 border-t border-border pt-5">
              <MapPinIcon className="mt-0.5 size-4 shrink-0 text-brand-green" />
              <div>
                <p className="text-sm text-muted-foreground">Ubicación</p>
                <p className="mt-0.5 max-w-[46ch] text-sm text-foreground">{coordinator.location}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {/* Enlaces útiles */}
            <div className="rounded-2xl bg-background p-6 shadow-sm ring-1 ring-foreground/5 sm:p-8">
              <h3 className="font-heading text-xl font-medium tracking-tight">Enlaces útiles</h3>
              <ul className="mt-4">
                {QUICK_LINKS.map((link) => (
                  <li key={link.label} className="border-t border-border first:border-t-0">
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between gap-3 py-3 text-sm text-foreground/85 transition-colors hover:text-brand-green"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRightIcon className="size-4 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-green" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Llamada a la acción */}
            <div className="relative overflow-hidden rounded-2xl bg-canopy p-6 text-white sm:p-8">
              <span
                aria-hidden
                className="absolute -top-10 -right-10 size-40 rotate-45 border border-brand-yellow/30"
              />
              <div className="relative">
                <p className="font-heading text-xl font-medium tracking-tight">
                  ¿Listo para ser parte del programa?
                </p>
                <p className="mt-2 max-w-[46ch] text-sm leading-relaxed text-white/80">
                  Registra tu inscripción al proceso de admisión y comienza tu formación como Ingeniero de Sistemas en
                  la Universidad de la Amazonia.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Button
                    asChild
                    size="lg"
                    className="h-11 bg-brand-yellow px-5 text-canopy hover:bg-brand-yellow/90"
                  >
                    <a href={links.admissions} target="_blank" rel="noopener noreferrer">
                      Inscríbete ahora
                      <ArrowUpRightIcon />
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="h-11 border-white/30 bg-transparent px-5 text-white hover:border-white hover:bg-white/10 hover:text-white"
                  >
                    <a href={`mailto:${coordinator.email}`}>Escríbenos</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
