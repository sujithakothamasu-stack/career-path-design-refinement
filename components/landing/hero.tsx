import Link from 'next/link'
import { ArrowRight, Check, PlayCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { DashboardPreview } from './dashboard-preview'
import { HeroBackground } from './hero-background'

const HIGHLIGHTS = ['Free to start', 'No credit card', 'Built for developers']

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <HeroBackground />
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 pt-16 pb-24 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:pt-24 lg:pb-32">
        <div className="flex flex-col items-start">
          <p className="animate-fade-up text-sm font-medium text-accent-foreground">
            AI mock interviews are live
          </p>

          <h1 className="mt-6 animate-fade-up text-4xl font-semibold tracking-tight text-balance text-foreground [animation-delay:60ms] sm:text-5xl lg:text-[3.4rem] lg:leading-[1.08]">
            Chart your path to your <span className="text-gradient">next developer role</span>
          </h1>

          <p className="mt-5 max-w-xl animate-fade-up text-lg leading-relaxed text-pretty text-muted-foreground [animation-delay:120ms]">
            CareerPath AI analyzes your resume, builds a personalized learning roadmap, and coaches
            you through realistic technical interviews — so you always know the next step.
          </p>

          <div className="mt-8 flex animate-fade-up flex-wrap items-center gap-3 [animation-delay:180ms]">
            <Button variant="shine" size="xl" nativeButton={false} render={<Link href="/dashboard" />}>
              Get Started
              <ArrowRight
                data-icon="inline-end"
                className="transition-transform group-hover/button:translate-x-0.5"
                aria-hidden="true"
              />
            </Button>
            <Button variant="soft" size="xl" nativeButton={false} render={<Link href="/dashboard" />}>
              <PlayCircle
                data-icon="inline-start"
                className="transition-transform group-hover/button:scale-110"
                aria-hidden="true"
              />
              View live demo
            </Button>
          </div>

          <ul className="mt-8 flex animate-fade-up flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground [animation-delay:240ms]">
            {HIGHLIGHTS.map((item) => (
              <li key={item} className="inline-flex items-center gap-1.5">
                <Check className="size-4 text-success" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <DashboardPreview />
      </div>
    </section>
  )
}
