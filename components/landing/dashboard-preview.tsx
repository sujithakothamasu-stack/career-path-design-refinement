import { CheckCircle2, Circle, FileText, Sparkles, TrendingUp } from 'lucide-react'
import { AnimatedProgress } from '@/components/animated-progress'
import { ScoreRing } from '@/components/score-ring'

const SKILLS = [
  { name: 'React & Next.js', value: 86 },
  { name: 'System Design', value: 62 },
  { name: 'TypeScript', value: 78 },
]

const ROADMAP = [
  { title: 'Advanced TypeScript patterns', done: true },
  { title: 'Build a full-stack SaaS project', done: true },
  { title: 'Distributed systems fundamentals', done: false },
]

export function DashboardPreview() {
  return (
    <div className="relative mx-auto w-full max-w-lg animate-fade-up [animation-delay:150ms]">
      <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-lift)]">
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/50 to-transparent" />

        <div className="flex items-center gap-2 border-b border-border bg-surface/70 px-4 py-3">
          <span className="size-2.5 rounded-full bg-border" />
          <span className="size-2.5 rounded-full bg-border" />
          <span className="size-2.5 rounded-full bg-border" />
          <span className="ml-3 truncate rounded-md bg-card px-2.5 py-0.5 font-mono text-[11px] text-muted-foreground">
            careerpath.ai/dashboard
          </span>
        </div>

        <div className="grid gap-4 p-5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-medium text-muted-foreground">Welcome back, Alex</p>
              <p className="mt-0.5 text-base font-semibold text-foreground">Frontend Engineer track</p>
            </div>
            <span className="inline-flex items-center gap-1 rounded-full bg-success/10 px-2 py-1 text-xs font-medium text-success">
              <TrendingUp className="size-3.5" aria-hidden="true" />
              {'+12%'}
            </span>
          </div>

          <div className="grid grid-cols-[auto_1fr] items-center gap-5 rounded-xl border border-border bg-surface/60 p-4">
            <ScoreRing value={82} label="Interview readiness" />
            <div className="grid gap-3">
              {SKILLS.map((skill, index) => (
                <div key={skill.name} className="grid gap-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <span className="tabular-nums text-muted-foreground">{skill.value}%</span>
                  </div>
                  <AnimatedProgress value={skill.value} label={skill.name} delay={300 + index * 150} />
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-border p-4">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Your roadmap
            </p>
            <ul className="grid gap-2.5">
              {ROADMAP.map((step) => (
                <li key={step.title} className="flex items-center gap-2.5 text-sm">
                  {step.done ? (
                    <CheckCircle2 className="size-4 shrink-0 text-success" aria-hidden="true" />
                  ) : (
                    <Circle className="size-4 shrink-0 text-muted-foreground/60" aria-hidden="true" />
                  )}
                  <span className={step.done ? 'text-muted-foreground line-through decoration-border' : 'text-foreground'}>
                    {step.title}
                  </span>
                  <span className="sr-only">{step.done ? '(completed)' : '(up next)'}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-5 -left-4 hidden animate-float items-center gap-3 rounded-xl border border-border bg-card px-3.5 py-2.5 shadow-[var(--shadow-lift)] sm:flex">
        <span className="inline-flex size-8 items-center justify-center rounded-lg bg-accent text-accent-foreground">
          <FileText className="size-4" aria-hidden="true" />
        </span>
        <div>
          <p className="text-xs text-muted-foreground">Resume score</p>
          <p className="text-sm font-semibold text-foreground">91 / 100</p>
        </div>
      </div>

      <div
        className="absolute -top-4 -right-3 hidden animate-float items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground shadow-[var(--shadow-soft)] sm:inline-flex"
        style={{ animationDelay: '-3s' }}
      >
        <Sparkles className="size-3.5 text-primary" aria-hidden="true" />
        3 new insights
      </div>
    </div>
  )
}
