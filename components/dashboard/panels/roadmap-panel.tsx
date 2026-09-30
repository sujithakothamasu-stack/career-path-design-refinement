'use client'

import { Loader2, Map } from 'lucide-react'
import { AnimatedProgress } from '@/components/animated-progress'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useSimulatedAction } from '@/hooks/use-simulated-action'

const MILESTONES = [
  { title: 'TypeScript deep dive', meta: 'Weeks 1–2', value: 100 },
  { title: 'Testing with Vitest & Playwright', meta: 'Weeks 3–4', value: 100 },
  { title: 'System design for frontend', meta: 'Weeks 5–7', value: 55 },
  { title: 'Performance & Web Vitals', meta: 'Weeks 8–9', value: 10 },
]

export function RoadmapPanel() {
  const { pending, run } = useSimulatedAction(
    'Roadmap generated',
    '19 steps across 12 weeks, tailored to your skills.',
  )

  return (
    <div className="grid gap-5 lg:grid-cols-[1fr_1.3fr]">
      <form
        className="flex flex-col gap-4 rounded-xl border border-border bg-surface/60 p-5"
        onSubmit={(event) => {
          event.preventDefault()
          run()
        }}
      >
        <div className="grid gap-2">
          <Label htmlFor="target-role">Target role</Label>
          <Input
            id="target-role"
            defaultValue="Senior Frontend Engineer"
            className="h-10 bg-card"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="hours">Hours per week</Label>
          <Input id="hours" type="number" min={1} max={40} defaultValue={8} className="h-10 bg-card" />
        </div>
        <Button type="submit" variant="shine" size="xl" disabled={pending} className="mt-1">
          {pending ? (
            <Loader2 data-icon="inline-start" className="animate-spin" aria-hidden="true" />
          ) : (
            <Map data-icon="inline-start" aria-hidden="true" />
          )}
          {pending ? 'Generating…' : 'Generate Roadmap'}
        </Button>
      </form>

      <ol className="grid gap-3">
        {MILESTONES.map((milestone, index) => (
          <li
            key={milestone.title}
            className="rounded-xl border border-border bg-card p-4 transition-all duration-300 hover:border-primary/25 hover:shadow-[var(--shadow-soft)]"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-semibold text-accent-foreground">
                  {index + 1}
                </span>
                <div>
                  <p className="text-sm font-medium text-foreground">{milestone.title}</p>
                  <p className="text-xs text-muted-foreground">{milestone.meta}</p>
                </div>
              </div>
              <span className="text-xs font-medium tabular-nums text-muted-foreground">
                {milestone.value}%
              </span>
            </div>
            <AnimatedProgress
              value={milestone.value}
              label={milestone.title}
              delay={index * 120}
              tone={milestone.value === 100 ? 'success' : 'primary'}
              className="mt-3"
            />
          </li>
        ))}
      </ol>
    </div>
  )
}
