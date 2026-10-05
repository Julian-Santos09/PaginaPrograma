import { CircleCheckIcon, DownloadIcon, EyeIcon, LightbulbIcon, TargetIcon } from "lucide-react"
import { SectionHeading } from "@/components/SectionHeading"
import { WovenPattern } from "@/components/WovenPattern"
import { legalData, officialData, program } from "@/data/program"

const PILLARS = [
  { icon: TargetIcon, title: "Misión", text: program.mission },
  { icon: EyeIcon, title: "Visión", text: program.vision },
] as const

const PROFILE_POINTS = [
  "Comprensión de las dinámicas del entorno y de sus responsabilidades profesionales, éticas y sociales.",
  "Creación, innovación y aplicación de soluciones computacionales soportadas en TIC.",
  "Aprendizaje autónomo y continuo orientado al perfeccionamiento profesional.",
  "Contribución al desarrollo económico, social y tecnológico de la región Amazónica y del país.",
] as const

export function ProgramSection() {
  return (
    <section id="programa" className="scroll-mt-28 bg-background py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          title="Propósito de formación"
          description="Un currículo que integra ciencias básicas, ingeniería, tecnología, investigación y formación socio-humanista."
        />

        <p className="max-w-3xl text-lg leading-relaxed text-foreground/90 sm:text-xl">{program.purpose}</p>

        {/* Misión y Visión: banda de dosel con el tejido */}
        <div className="relative mt-16 overflow-hidden rounded-2xl bg-canopy text-white">
          <WovenPattern className="absolute inset-0 text-brand-yellow/[0.08]" size={96} />
          <div className="relative grid md:grid-cols-2">
            {PILLARS.map((pillar, index) => (
              <div
                key={pillar.title}
                className={`p-8 sm:p-10 ${index === 0 ? "border-b border-white/15 md:border-r md:border-b-0" : ""}`}
              >
                <div className="flex items-center gap-3">
                  <span className="size-2.5 rotate-45 bg-brand-yellow" />
                  <pillar.icon className="size-4 text-brand-yellow" aria-hidden />
                  <h3 className="font-heading text-2xl font-medium tracking-tight">{pillar.title}</h3>
                </div>
                <p className="mt-4 max-w-[52ch] text-sm leading-relaxed text-white/80 sm:text-base">{pillar.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Perfil de egreso */}
        <div className="mt-16 grid gap-8 lg:grid-cols-[minmax(0,300px)_1fr] lg:items-start">
          <div>
            <span className="flex items-center gap-3" aria-hidden>
              <span className="size-2.5 rotate-45 bg-brand-yellow" />
              <span className="h-px w-12 bg-brand-green/45" />
            </span>
            <h3 className="mt-4 font-heading text-3xl leading-tight font-medium tracking-tight">Perfil de egreso</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Competencias con las que egresa el graduado del programa.
            </p>
          </div>
          <div className="rounded-2xl bg-card p-6 shadow-sm ring-1 ring-foreground/5 sm:p-8">
            <p className="max-w-[70ch] leading-relaxed text-foreground/90 sm:text-lg">{program.profile}</p>
            <ul className="mt-6 grid gap-4 border-t border-border pt-6 sm:grid-cols-2">
              {PROFILE_POINTS.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <CircleCheckIcon className="mt-0.5 size-4 shrink-0 text-brand-green" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Datos oficiales */}
        <div className="mt-16">
          <SectionHeading
            title="Datos del programa"
            description="Información registrada ante el Ministerio de Educación Nacional y el Consejo Superior Universitario."
          />

          <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr]">
            <dl className="rounded-2xl bg-card p-6 shadow-sm ring-1 ring-foreground/5 sm:p-8">
              {officialData.map((item) => (
                <div
                  key={item.label}
                  className="flex items-baseline gap-3 py-3 not-first:border-t not-first:border-border"
                >
                  <dt className="shrink-0 text-sm text-muted-foreground">{item.label}</dt>
                  <span aria-hidden className="min-w-6 flex-1 -translate-y-1 border-b border-dotted border-foreground/25" />
                  <dd className="shrink-0 text-right text-sm font-semibold text-foreground">{item.value}</dd>
                </div>
              ))}
            </dl>

            <div className="flex flex-col gap-4">
              <p className="text-sm font-medium text-muted-foreground">Documentación legal</p>
              {legalData.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-4 rounded-2xl bg-card p-5 shadow-sm ring-1 ring-foreground/5 transition-all hover:ring-brand-green"
                >
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="mt-0.5 font-heading text-base font-medium text-foreground">{item.value}</p>
                  </div>
                  <DownloadIcon className="size-5 shrink-0 text-brand-green transition-transform group-hover:translate-y-0.5" />
                </a>
              ))}
              <div className="flex items-start gap-3 rounded-2xl bg-brand-green-light/70 p-5">
                <LightbulbIcon className="mt-0.5 size-4 shrink-0 text-brand-green" />
                <p className="text-sm leading-relaxed text-foreground/80">
                  Diez semestres de formación presencial en el Campus Florencia, con 178 créditos académicos y una
                  fuerte orientación regional al desarrollo tecnológico de la Amazonía colombiana.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
