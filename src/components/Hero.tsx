import { ArrowRightIcon, ArrowUpRightIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WovenPattern } from "@/components/WovenPattern"
import { links, program, quickStats } from "@/data/program"

export function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden scroll-mt-28 bg-canopy text-white">
      {/* Tejido amazónico reinterpretado como malla de nodos */}
      <WovenPattern className="absolute inset-0 text-brand-yellow/[0.13]" size={132} />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-canopy via-canopy/90 to-canopy/40"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-canopy to-transparent"
      />

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="hero-in max-w-md text-sm leading-relaxed text-white/70 [animation-delay:60ms]">
          Pregrado de la Facultad de Ingeniería de la Universidad de la Amazonia
        </p>

        <h1 className="hero-in mt-5 max-w-3xl font-heading text-5xl leading-[1.02] font-medium tracking-tight sm:text-6xl lg:text-7xl [animation-delay:140ms]">
          Ingeniería de Sistemas
        </h1>

        <p className="hero-in mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg [animation-delay:260ms]">
          {program.tagline}
        </p>

        <div className="hero-in mt-8 flex flex-wrap gap-3 [animation-delay:380ms]">
          <Button asChild size="lg" className="h-11 bg-brand-yellow px-5 text-canopy hover:bg-brand-yellow/90">
            <a href="#plan">
              Ver plan de estudios
              <ArrowRightIcon />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-11 border-white/30 bg-transparent px-5 text-white hover:border-white hover:bg-white/10 hover:text-white"
          >
            <a href={links.admissions} target="_blank" rel="noopener noreferrer">
              Proceso de admisión
              <ArrowUpRightIcon />
            </a>
          </Button>
        </div>

        {/* Banda de datos: números grandes, divisiones finas */}
        <dl className="hero-in mt-14 grid grid-cols-2 border-t border-white/25 sm:grid-cols-4 [animation-delay:520ms]">
          {quickStats.map((stat, index) => {
            const borders = [
              "border-r",
              "sm:border-r",
              "border-r",
              "",
            ][index]
            return (
              <div
                key={stat.label}
                className={`flex flex-col-reverse gap-1 border-white/25 px-4 py-5 first:pl-0 sm:px-6 ${borders} ${
                  index < 2 ? "border-b sm:border-b-0" : ""
                }`}
              >
                <dt className="text-xs text-white/60">{stat.label}</dt>
                <dd className="font-heading text-4xl leading-none font-medium tracking-tight text-brand-yellow sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            )
          })}
        </dl>

        <p className="hero-in mt-6 text-sm text-white/70 [animation-delay:640ms]">
          {program.modality}, {program.duration.toLowerCase()}, en el {program.place}
        </p>
      </div>
    </section>
  )
}
