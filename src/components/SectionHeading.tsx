type SectionHeadingProps = {
  title: string
  description?: string
  align?: "left" | "center"
}

/**
 * Encabezado de sección: marcador de rombo (misma geometría que el patrón tejido)
 * + título. Sin etiquetas en mayúsculas: la jerarquía la da la tipografía.
 */
export function SectionHeading({ title, description, align = "left" }: SectionHeadingProps) {
  const centered = align === "center"

  return (
    <div className={`mb-9 flex max-w-3xl flex-col gap-4 ${centered ? "items-center text-center" : "items-start"}`}>
      <span className="flex items-center gap-3" aria-hidden>
        <span className="size-2.5 rotate-45 bg-brand-yellow" />
        <span className="h-px w-12 bg-brand-green/45" />
      </span>
      <h2 className="font-heading text-3xl leading-tight font-medium tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">{description}</p>
      )}
    </div>
  )
}
