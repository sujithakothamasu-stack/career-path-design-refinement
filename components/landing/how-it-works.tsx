import { Rocket, Target, Upload } from 'lucide-react'

const STEPS = [
  {
    icon: Upload,
    title: 'Upload your resume',
    description: 'Drop in a PDF and tell us the role you are aiming for. Setup takes a minute.',
  },
  {
    icon: Target,
    title: 'Get your gap analysis',
    description: 'See your strengths, missing skills, and an honest readiness score for the role.',
  },
  {
    icon: Rocket,
    title: 'Follow your roadmap',
    description: 'Learn, build projects, and practice interviews — with progress tracked along the way.',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-20 border-y border-border/70 bg-surface/60 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-primary">How it works</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl">
            From resume to offer in three steps
          </h2>
        </div>

        <ol className="mt-12 grid gap-5 md:grid-cols-3">
          {STEPS.map((step, index) => (
            <li key={step.title} className="card-lift group relative rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <span className="inline-flex size-10 items-center justify-center rounded-xl border border-border bg-surface text-primary transition-transform duration-300 group-hover:scale-105">
                  <step.icon className="size-5" aria-hidden="true" />
                </span>
                <span className="font-mono text-sm font-medium text-muted-foreground/70">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="mt-5 font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
