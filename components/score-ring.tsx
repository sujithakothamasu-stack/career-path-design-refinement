import type { CSSProperties } from 'react'
import { cn } from '@/lib/utils'

type ScoreRingProps = {
  value: number
  label: string
  size?: number
  className?: string
}

const RADIUS = 36
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

export function ScoreRing({ value, label, size = 88, className }: ScoreRingProps) {
  const offset = CIRCUMFERENCE * (1 - value / 100)

  return (
    <div
      className={cn('relative inline-flex items-center justify-center', className)}
      style={{ width: size, height: size }}
      role="img"
      aria-label={`${label}: ${value} out of 100`}
    >
      <svg viewBox="0 0 88 88" className="size-full -rotate-90" aria-hidden="true">
        <defs>
          <linearGradient id="score-ring-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--chart-2)" />
            <stop offset="100%" stopColor="var(--primary)" />
          </linearGradient>
        </defs>
        <circle cx="44" cy="44" r={RADIUS} fill="none" stroke="var(--secondary)" strokeWidth="8" />
        <circle
          cx="44"
          cy="44"
          r={RADIUS}
          fill="none"
          stroke="url(#score-ring-gradient)"
          strokeWidth="8"
          strokeLinecap="round"
          className="animate-ring"
          style={
            {
              '--ring-circumference': CIRCUMFERENCE,
              strokeDasharray: CIRCUMFERENCE,
              strokeDashoffset: offset,
            } as CSSProperties
          }
        />
      </svg>
      <span className="absolute text-lg font-semibold tabular-nums text-foreground">{value}</span>
    </div>
  )
}
