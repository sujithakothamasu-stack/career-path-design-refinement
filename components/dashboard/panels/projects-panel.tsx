'use client'

import { ArrowUpRight, Bookmark } from 'lucide-react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const PROJECTS = [
  {
    title: 'Realtime collaborative whiteboard',
    description: 'CRDT syncing, presence cursors, and offline support.',
    level: 'Advanced',
    stack: ['Next.js', 'WebSockets', 'Yjs'],
  },
  {
    title: 'Developer portfolio CMS',
    description: 'MDX content, image optimization, and ISR previews.',
    level: 'Intermediate',
    stack: ['Next.js', 'MDX', 'Postgres'],
  },
  {
    title: 'Web Vitals monitoring dashboard',
    description: 'Collect field metrics and chart regressions per release.',
    level: 'Intermediate',
    stack: ['React', 'Charts', 'Edge'],
  },
]

export function ProjectsPanel() {
  return (
    <ul className="grid gap-4 md:grid-cols-3">
      {PROJECTS.map((project) => (
        <li key={project.title} className="card-lift group flex flex-col rounded-xl p-5">
          <div className="flex items-start justify-between gap-3">
            <span
              className={cn(
                'rounded-full px-2.5 py-0.5 text-xs font-medium',
                project.level === 'Advanced' ? 'bg-accent text-accent-foreground' : 'bg-success/10 text-success',
              )}
            >
              {project.level}
            </span>
            <Button
              variant="ghost"
              size="icon-sm"
              aria-label={`Save ${project.title}`}
              onClick={() => toast.success('Saved to your projects', { description: project.title })}
            >
              <Bookmark aria-hidden="true" />
            </Button>
          </div>
          <h3 className="mt-3 font-semibold text-foreground">{project.title}</h3>
          <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
          <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Tech stack">
            {project.stack.map((tech) => (
              <li key={tech} className="rounded-md bg-secondary px-2 py-0.5 font-mono text-[11px] text-secondary-foreground">
                {tech}
              </li>
            ))}
          </ul>
          <Button variant="soft" size="lg" className="mt-4 w-full">
            View brief
            <ArrowUpRight
              data-icon="inline-end"
              className="transition-transform group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5"
              aria-hidden="true"
            />
          </Button>
        </li>
      ))}
    </ul>
  )
}
