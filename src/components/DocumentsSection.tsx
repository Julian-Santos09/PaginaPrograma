import { ArrowUpRightIcon, FileTextIcon, FolderOpenIcon } from "lucide-react"
import { SectionHeading } from "@/components/SectionHeading"
import { documents, links } from "@/data/program"

export function DocumentsSection() {
  return (
    <section id="documentos" className="scroll-mt-28 bg-background py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          title="Documentos de interés"
          description="Acuerdos, formatos, contenidos programáticos y guías de grado del programa."
        />

        {/* Lista de archivos: una superficie, filas con propósito */}
        <ul className="overflow-hidden rounded-2xl bg-card shadow-sm ring-1 ring-foreground/5">
          {documents.map((doc) => (
            <li key={doc.title} className="border-t border-border first:border-t-0">
              <a
                href={doc.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 px-5 py-5 transition-colors hover:bg-brand-green-light/50 sm:px-6"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted text-brand-green transition-colors group-hover:bg-brand-green group-hover:text-white">
                  {doc.type === "Drive" ? <FolderOpenIcon className="size-5" /> : <FileTextIcon className="size-5" />}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="font-heading text-base font-medium text-foreground">{doc.title}</span>
                    <span className="text-xs text-muted-foreground">{doc.type}</span>
                  </span>
                  <span className="mt-1 block max-w-[70ch] text-sm leading-relaxed text-muted-foreground">
                    {doc.description}
                  </span>
                </span>
                <ArrowUpRightIcon className="mt-1 size-4 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-green" />
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-2xl bg-brand-green-light/70 p-6 sm:flex-row sm:items-center">
          <p className="max-w-2xl text-sm leading-relaxed text-foreground/80">
            ¿No encuentras lo que buscas? En el repositorio institucional están todos los documentos de la
            universidad, o consulta el sitio oficial del programa.
          </p>
          <a
            href={links.officialProgram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-canopy px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-green"
          >
            Sitio oficial del programa
            <ArrowUpRightIcon className="size-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
