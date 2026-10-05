import { useState } from "react";
import { ArrowUpRightIcon, MenuIcon, XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { links } from "@/data/program";

const NAV_ITEMS = [
  { label: "El programa", href: "#programa" },
  { label: "Plan de estudios", href: "#plan" },
  { label: "Documentos", href: "#documentos" },
  { label: "Contacto", href: "#contacto" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80">
      {/* Barra institucional */}
      <div className="hidden bg-canopy text-white/80 md:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-1.5 text-xs">
          <p>Vigilada Ministerio de Educación Nacional, NIT 891190346-1</p>
          <nav className="flex items-center gap-4">
            <a
              className="transition-colors hover:text-brand-yellow"
              href={links.university}
              target="_blank"
              rel="noopener noreferrer"
            >
              Sitio institucional
            </a>
            <a
              className="transition-colors hover:text-brand-yellow"
              href={links.chaira}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ingreso a Chairá
            </a>
            <a
              className="transition-colors hover:text-brand-yellow"
              href={links.pqrs}
              target="_blank"
              rel="noopener noreferrer"
            >
              PQRS-D
            </a>
          </nav>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="#inicio" className="flex items-center gap-3">
          <img
            src="/images/logo-uniamazonia.jpg"
            alt="Universidad de la Amazonia"
            className="h-10 w-auto rounded md:h-11"
            loading="eager"
          />
          <span className="hidden text-sm leading-tight font-semibold sm:block">
            Ingeniería de Sistemas
            <span className="block text-xs font-normal text-muted-foreground">
              Universidad de la Amazonia
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-brand-green"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="lg" className="hidden sm:inline-flex">
            <a
              href={links.admissions}
              target="_blank"
              rel="noopener noreferrer"
            >
              Inscríbete
              <ArrowUpRightIcon />
            </a>
          </Button>
          <Button
            variant="outline"
            size="icon-lg"
            className="lg:hidden"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <XIcon /> : <MenuIcon />}
          </Button>
        </div>
      </div>

      {/* Menú móvil */}
      {open && (
        <nav className="border-t border-border bg-background px-4 pb-4 sm:px-6 lg:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 pt-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:text-brand-green"
              >
                {item.label}
              </a>
            ))}
            <Button asChild className="mt-2">
              <a
                href={links.admissions}
                target="_blank"
                rel="noopener noreferrer"
              >
                Inscríbete
                <ArrowUpRightIcon />
              </a>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
