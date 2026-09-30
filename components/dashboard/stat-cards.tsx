import { ArrowUpRight, FileSearch, Flame, Map, MessagesSquare, type LucideIcon } from 'lucide-react'

const STATS: { label: string; value: string; change: string; icon: LucideIcon }[] = [
  { label: 'Resume score', value: '91', change: '+6 this week', icon: FileSearch },
  { label: 'Roadmap progress', value: '64%', change: '12 of 19 steps', icon: Map },
  { label: 'Interviews done', value: '8', change: '+3 this week', icon: MessagesSquare },
  { label: 'Learning streak', value: '14 days', change: 'Personal best', icon: Flame },
]

export function StatCards() {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {STATS.map((stat, index) => (
        <li
          key={stat.label}
          className="card-lift group animate-fade-up rounded-2xl p-5"
          style={{ animationDelay: `${index * 60}ms` }}
        >
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-muted-foreground">{stat.label}</span>
            <span className="inline-flex size-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-all duration-300 group-hover:scale-105 group-hover:bg-primary group-hover:text-primary-foreground">
              <stat.icon className="size-4.5" aria-hidden="true" />
            </span>
          </div>
          <p className="mt-3 text-2xl font-semibold tracking-tight tabular-nums text-foreground">
            {stat.value}
          </p>
          <p className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-success">
            <ArrowUpRight className="size-3.5" aria-hidden="true" />
            {stat.change}
          </p>
        </li>
      ))}
    </ul>
  )
}
