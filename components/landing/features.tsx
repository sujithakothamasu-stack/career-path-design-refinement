import Link from 'next/link'
import { ArrowUpRight, FileSearch, FolderGit2, Map, MessagesSquare } from 'lucide-react'

const FEATURES = [
  {
    icon: FileSearch,
    title: 'Resume Analyzer',
    description:
      'Get an ATS-style score, keyword gaps, and line-by-line suggestions tailored to the roles you want.',
  },
  {
    icon: Map,
    title: 'Learning Roadmaps',
    description:
      'Turn skill gaps into a week-by-week plan with curated resources and milestones you can track.',
  },
  {
    icon: MessagesSquare,
    title: 'Mock Interviews',
    description:
      'Practice behavioral and technical rounds with an AI interviewer that gives structured feedback.',
  },
  {
    icon: FolderGit2,
    title: 'Project Ideas',
    description:
      'Discover portfolio projects matched to your stack that demonstrate exactly what hiring teams look for.',
  },
]

export function Features() {
  return (
    <section id="features" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold text-primary">Everything in one place</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl">
            Tools that move your career forward
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Four focused tools that work together, sharing context about your skills and goals.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature) => (
            <Link
              key={feature.title}
              href="/dashboard"
              className="card-lift group flex flex-col rounded-2xl p-6 outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-accent text-accent-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:scale-105 group-hover:bg-primary group-hover:text-primary-foreground">
                <feature.icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary">
                Explore
                <ArrowUpRight
                  className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
