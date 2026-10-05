import { ArrowUpRightIcon, ClipboardListIcon, GraduationCapIcon, WalletIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/SectionHeading"
import { WovenPattern } from "@/components/WovenPattern"
import { PlanEstudios } from "@/components/PlanEstudios"
import { curriculum } from "@/data/curriculum"
import { investment, requirements } from "@/data/program"

export function CurriculumSection() {
  return (
    <section id="plan" className="scroll-mt-28 bg-card py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          title="Plan de estudios, requisitos e inversión"
          description="Todo lo que necesitas conocer para ingresar y avanzar en el programa."
        />

        {/* Plan de estudios: bloque protagonista en dosel */}
        <div className="relative overflow-hidden rounded-2xl bg-canopy text-white">
          <WovenPattern className="absolute inset-y-0 right-0 w-1/2 text-brand-yellow/[0.12]" size={110} />
          <div className="relative flex flex-col gap-6 p-8 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3">
                <GraduationCapIcon className="size-5 text-brand-yellow" aria-hidden />
                <h3 className="font-heading text-2xl font-medium tracking-tight">{curriculum.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-white/80 sm:text-base">{curriculum.summary}</p>
              <p className="mt-4 text-sm text-brand-yellow">{curriculum.agreement}</p>
            </div>
            <Button
              asChild
              size="lg"
              className="h-11 shrink-0 bg-brand-yellow px-5 text-canopy hover:bg-brand-yellow/90"
            >
              <a href={curriculum.href} target="_blank" rel="noopener noreferrer">
                Descargar acuerdo
                <ArrowUpRightIcon />
              </a>
            </Button>
          </div>
        </div>

        {/* Explorador semestre a semestre del pensum 2020 */}
        <PlanEstudios />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {/* Requisitos */}
          <div className="rounded-2xl bg-background p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <ClipboardListIcon className="size-5 text-brand-green" aria-hidden />
              <h3 className="font-heading text-xl font-medium tracking-tight">{requirements.title}</h3>
            </div>
            <p className="mt-3 max-w-[56ch] text-sm leading-relaxed text-muted-foreground">{requirements.summary}</p>
            <Button asChild className="mt-5">
              <a href={requirements.href} target="_blank" rel="noopener noreferrer">
                Ver requisitos
                <ArrowUpRightIcon />
              </a>
            </Button>
          </div>

          {/* Inversión */}
          <div className="rounded-2xl bg-background p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <WalletIcon className="size-5 text-brand-green" aria-hidden />
              <h3 className="font-heading text-xl font-medium tracking-tight">Inversión</h3>
            </div>
            <dl className="mt-4">
              {investment.map((item) => (
                <div key={item.label} className="border-t border-border py-4 first:border-t-0 first:pt-0">
                  <div className="flex items-baseline gap-3">
                    <dt className="shrink-0 text-sm text-muted-foreground">{item.label}</dt>
                    <span
                      aria-hidden
                      className="min-w-6 flex-1 -translate-y-1 border-b border-dotted border-foreground/25"
                    />
                    <dd className="shrink-0 text-right text-sm font-semibold text-foreground">{item.value}</dd>
                  </div>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1.5 inline-flex items-center gap-1 text-xs text-brand-green underline-offset-4 hover:underline"
                  >
                    {item.reference}
                    <ArrowUpRightIcon className="size-3.5" />
                  </a>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
