import Link from 'next/link'
import { ArrowRight, Map } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CtaSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative isolate overflow-hidden rounded-3xl border border-primary/15 bg-linear-to-br from-accent via-card to-surface px-6 py-14 text-center shadow-[var(--shadow-soft)] sm:px-12">
          <div
            aria-hidden="true"
            className="absolute -top-20 left-1/2 -z-10 size-[360px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
          />
          <h2 className="mx-auto max-w-xl text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl">
            Ready to map out your next move?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-pretty text-muted-foreground">
            Generate a personalized roadmap in seconds and start closing your skill gaps today.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button variant="shine" size="xl" nativeButton={false} render={<Link href="/dashboard" />}>
              <Map data-icon="inline-start" aria-hidden="true" />
              Generate Roadmap
            </Button>
            <Button variant="soft" size="xl" nativeButton={false} render={<Link href="#features" />}>
              See all features
              <ArrowRight
                data-icon="inline-end"
                className="transition-transform group-hover/button:translate-x-0.5"
                aria-hidden="true"
              />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
