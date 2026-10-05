import { useId } from "react"

type WovenPatternProps = {
  /** Clase de Tailwind para posicionar/colorear (usa text-* para el color del trazo) */
  className?: string
  /** Tamaño de la celda del tejido en píxeles */
  size?: number
  /** Grosor del trazo en la celda base de 96px */
  strokeWidth?: number
}

/**
 * Motivo geométrico tejido (inspirado en el patrón del banner oficial de Uniamazonia)
 * reinterpretado como malla de nodos conectados: amazónica y de sistemas a la vez.
 * Se usa como fondo del héroe y como franja separadora entre secciones.
 */
export function WovenPattern({ className, size = 96, strokeWidth = 1.6 }: WovenPatternProps) {
  const rawId = useId()
  const id = `woven-${rawId.replace(/[^a-zA-Z0-9-]/g, "")}`
  const scale = size / 96

  return (
    <svg className={className} aria-hidden focusable="false">
      <defs>
        <pattern id={id} width={size} height={size} patternUnits="userSpaceOnUse">
          <g transform={`scale(${scale})`} fill="none" stroke="currentColor" strokeWidth={strokeWidth}>
            {/* Rombo central (telar) */}
            <path d="M48 8 88 48 48 88 8 48Z" />
            {/* Rombo interior */}
            <path d="M48 26 70 48 48 70 26 48Z" />
            {/* Conexiones hacia el borde: la malla continúa entre celdas */}
            <path d="M48 0V8M48 88v8M0 48h8M88 48h8" />
            {/* Rombo de esquina (se une con las celdas vecinas) */}
            <path d="M0-13 13 0 0 13-13 0Z" />
            <path d="M96-13 109 0 96 13 83 0Z" />
            <path d="M0 83 13 96 0 109-13 96Z" />
            <path d="M96 83 109 96 96 109 83 96Z" />
          </g>
          <g transform={`scale(${scale})`} fill="currentColor">
            {/* Nodos */}
            <circle cx="48" cy="48" r="3.4" />
            <circle cx="48" cy="8" r="2.6" />
            <circle cx="8" cy="48" r="2.6" />
            <circle cx="88" cy="48" r="2.6" />
            <circle cx="48" cy="88" r="2.6" />
            <path d="M0 0 6 0 0 6Z" />
            <path d="M96 0 90 0 96 6Z" />
            <path d="M0 96 6 96 0 90Z" />
            <path d="M96 96 90 96 96 90Z" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  )
}
