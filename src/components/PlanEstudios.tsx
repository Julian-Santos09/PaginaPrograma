import { useState, type KeyboardEvent } from "react"
import { ArrowRightIcon, CircleCheckIcon, GraduationCapIcon, LightbulbIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { cn } from "cn"
import {
  AREAS,
  areaByKey,
  areaCounts,
  courseByCode,
  curriculum,
  natures,
  semesters,
  totalCredits,
  totalSpaces,
  type Course,
} from "@/data/curriculum"

const TAB_ID = (n: number) => `plan-tab-${n}`
const PANEL_ID = (n: number) => `plan-panel-${n}`

/** Altura de la barra respecto al contenedor: deja espacio para las etiquetas. */
const barHeight = (credits: number, max: number) => `${Math.round((credits / max) * 70)}%`

function CourseCard({ course }: { course: Course }) {
  const area = course.area ? areaByKey.get(course.area) : undefined
  const prereq = course.prereq ? courseByCode.get(course.prereq) : undefined
  const isDegree = course.kind === "degree"

  return (
    <li
      className={cn(
        "rounded-2xl border p-4",
        isDegree
          ? "border-brand-green/40 bg-brand-green-light/60 sm:col-span-2 lg:col-span-3"
          : "border-border bg-card transition-colors hover:border-brand-green"
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <span className="font-mono text-xs tracking-wide text-muted-foreground">{course.code}</span>
        <div className="flex shrink-0 items-center gap-1.5">
          <Badge variant="outline" className="text-muted-foreground">
            {course.nature}
          </Badge>
          <Badge className="bg-brand-green text-white">{course.credits} cr</Badge>
        </div>
      </div>

      <h4 className="mt-2 font-heading text-base leading-snug font-medium">
        {course.no !== null && (
          <span className="mr-1.5 text-sm font-normal text-muted-foreground">{course.no}.</span>
        )}
        {course.name}
      </h4>

      <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
        {area ? (
          <span className="inline-flex items-center gap-1.5">
            <span className={cn("size-2 rounded-full", area.dot)} aria-hidden />
            {area.label}
          </span>
        ) : (
          <span className="inline-flex items-center gap-1.5 font-medium text-brand-green-dark">
            <GraduationCapIcon className="size-3.5" aria-hidden />
            Requisito de grado · calificación cualificable
          </span>
        )}
        {course.hours && <span>{course.hours.hs} h semestrales</span>}
      </div>

      <p className="mt-2 flex flex-wrap items-center gap-1.5 border-t border-border pt-2 text-xs">
        {prereq ? (
          <>
            <ArrowRightIcon className="size-3.5 shrink-0 text-brand-green" aria-hidden />
            <span className="text-muted-foreground">Prerrequisito:</span>
            <span className="font-medium text-foreground">
              {prereq.name} · {prereq.code}
            </span>
          </>
        ) : (
          <>
            <CircleCheckIcon className="size-3.5 shrink-0 text-muted-foreground/70" aria-hidden />
            <span className="text-muted-foreground">Sin prerrequisito</span>
          </>
        )}
      </p>
    </li>
  )
}

/**
 * Explorador del plan de estudios: semestre por semestre, con créditos,
 * áreas curriculares, prerrequisitos resueltos y totales calculados desde
 * los datos del Acuerdo 44.
 */
export function PlanEstudios() {
  const [active, setActive] = useState(1)

  const semester = semesters[active - 1]
  const maxCredits = Math.max(...semesters.map((s) => s.credits))
  const accumulated = semesters.slice(0, active).reduce((sum, s) => sum + s.credits, 0)

  const handleTabKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const last = semesters.length
    let next: number | null = null

    if (event.key === "ArrowRight") next = active === last ? 1 : active + 1
    else if (event.key === "ArrowLeft") next = active === 1 ? last : active - 1
    else if (event.key === "Home") next = 1
    else if (event.key === "End") next = last

    if (next !== null) {
      event.preventDefault()
      setActive(next)
      document.getElementById(TAB_ID(next))?.focus()
    }
  }

  return (
    <div className="mt-6">
      {/* Cifras clave del plan */}
      <dl className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <div className="rounded-2xl bg-background p-4 sm:p-5">
          <dt className="text-xs font-medium text-muted-foreground">Semestres</dt>
          <dd className="mt-1 font-heading text-2xl font-medium tracking-tight">{semesters.length}</dd>
        </div>
        <div className="rounded-2xl bg-background p-4 sm:p-5">
          <dt className="text-xs font-medium text-muted-foreground">Créditos académicos</dt>
          <dd className="mt-1 font-heading text-2xl font-medium tracking-tight">{totalCredits}</dd>
        </div>
        <div className="rounded-2xl bg-background p-4 sm:p-5">
          <dt className="text-xs font-medium text-muted-foreground">Espacios académicos</dt>
          <dd className="mt-1 font-heading text-2xl font-medium tracking-tight">
            {totalSpaces}
            <span className="ml-1 text-sm font-normal text-muted-foreground">+ opción de grado</span>
          </dd>
        </div>
        <div className="rounded-2xl bg-background p-4 sm:p-5">
          <dt className="text-xs font-medium text-muted-foreground">Áreas curriculares</dt>
          <dd className="mt-1 font-heading text-2xl font-medium tracking-tight">{AREAS.length}</dd>
        </div>
      </dl>

      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">{curriculum.approval}</p>

      {/* Selector de semestre: las barras son las pestañas */}
      <div className="mt-6 rounded-2xl bg-background p-4 sm:p-5">
        <div className="flex items-baseline justify-between gap-3">
          <p className="text-xs font-medium text-muted-foreground">Créditos por semestre</p>
          <p className="text-xs text-muted-foreground">Total {totalCredits} cr · seleccione un semestre</p>
        </div>
        <div
          role="tablist"
          aria-label="Semestres del plan de estudios"
          onKeyDown={handleTabKeyDown}
          className="mt-3 flex h-32 items-end gap-1.5 sm:gap-2"
        >
          {semesters.map((s) => {
            const isActive = s.number === active
            return (
              <button
                key={s.number}
                type="button"
                role="tab"
                id={TAB_ID(s.number)}
                aria-controls={PANEL_ID(s.number)}
                aria-selected={isActive}
                aria-label={`Semestre ${s.number}: ${s.credits} créditos`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActive(s.number)}
                className="group flex h-full flex-1 flex-col items-center justify-end gap-1 overflow-hidden rounded-md outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
              >
                <span
                  className={cn(
                    "text-[10px] font-medium tabular-nums transition-colors",
                    isActive ? "text-brand-green" : "text-muted-foreground/70"
                  )}
                >
                  {s.credits}
                </span>
                <span
                  className={cn(
                    "w-full rounded-t-sm transition-colors",
                    isActive ? "bg-brand-green" : "bg-brand-green/25 group-hover:bg-brand-green/50"
                  )}
                  style={{ height: barHeight(s.credits, maxCredits) }}
                />
                <span
                  className={cn(
                    "text-[11px] tabular-nums",
                    isActive ? "font-semibold text-foreground" : "text-muted-foreground"
                  )}
                >
                  {s.number}º
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Panel del semestre activo */}
      <div
        role="tabpanel"
        id={PANEL_ID(active)}
        aria-labelledby={TAB_ID(active)}
        className="mt-4 rounded-2xl bg-background p-5 sm:p-6"
      >
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="font-heading text-xl font-medium tracking-tight">Semestre {active}º</h3>
            <p className="mt-0.5 text-sm text-muted-foreground">
              {semester.courses.length} espacios · {semester.credits} créditos
            </p>
          </div>
          <Badge variant="secondary" className="h-7 px-3 text-xs">
            Acumulado {accumulated}/{totalCredits} créditos
          </Badge>
        </div>

        {/* Leyenda de áreas */}
        <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
          {areaCounts.map((area) => (
            <li key={area.key} className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <span className={cn("size-2 rounded-full", area.dot)} aria-hidden />
              {area.label}
              <span className="tabular-nums">· {area.count}</span>
            </li>
          ))}
        </ul>

        <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {semester.courses.map((course) => (
            <CourseCard key={course.code} course={course} />
          ))}
        </ul>

        <div className="mt-5 flex flex-col gap-3 border-t border-border pt-4 text-xs text-muted-foreground sm:flex-row sm:items-start sm:justify-between">
          <p className="max-w-[60ch] leading-relaxed">
            <span className="font-medium text-foreground">Naturaleza:</span>{" "}
            {natures.map((n) => `${n.code} ${n.label.toLowerCase()}`).join(" · ")}.
          </p>
          <p className="flex max-w-[60ch] items-start gap-2 leading-relaxed">
            <LightbulbIcon className="mt-0.5 size-3.5 shrink-0 text-brand-green" aria-hidden />
            <span>{curriculum.electives}</span>
          </p>
        </div>
      </div>
    </div>
  )
}
