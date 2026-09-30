import { CalendarClock } from 'lucide-react'
import { AnimatedProgress } from '@/components/animated-progress'
import { ScoreRing } from '@/components/score-ring'

const SKILLS = [
  { name: 'React & Next.js', value: 86 },
  { name: 'TypeScript', value: 78 },
  { name: 'Testing', value: 70 },
  { name: 'System Design', value: 52 },
]

const UPCOMING = [
  { title: 'Mock interview: System Design', time: 'Tomorrow, 10:00' },
  { title: 'Roadmap: Caching strategies', time: 'Fri, Oct 2' },
]

export function SkillsCard() {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-1">
      <section aria-labelledby="readiness-heading" className="surface-card rounded-2xl p-5 sm:p-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 id="readiness-heading" className="text-lg font-semibold tracking-tight text-foreground">
              Interview readiness
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">Senior Frontend Engineer</p>
          </div>
          <ScoreRing value={82} label="Interview readiness" size={76} />
        </div>
        <ul className="mt-6 grid gap-4">
          {SKILLS.map((skill, index) => (
            <li key={skill.name} className="grid gap-1.5">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-foreground">{skill.name}</span>
                <span className="tabular-nums text-muted-foreground">{skill.value}%</span>
              </div>
              <AnimatedProgress value={skill.value} label={skill.name} delay={200 + index * 120} />
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="upcoming-heading" className="surface-card rounded-2xl p-5 sm:p-6">
        <h2 id="upcoming-heading" className="text-lg font-semibold tracking-tight text-foreground">
          Up next
        </h2>
        <ul className="mt-4 grid gap-3">
          {UPCOMING.map((item) => (
            <li
              key={item.title}
              className="flex items-center gap-3 rounded-xl border border-border bg-surface/60 p-3 transition-all duration-300 hover:border-primary/25 hover:bg-accent/40"
            >
              <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-card text-primary shadow-[var(--shadow-soft)]">
                <CalendarClock className="size-4.5" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-foreground">{item.title}</p>
                <p className="text-xs text-muted-foreground">{item.time}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
