import { Sparkles } from 'lucide-react'
import { BrandLogo } from '@/components/brand-logo'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { NAV_ITEMS, type SectionId } from './nav-items'

type SidebarProps = {
  active: SectionId
  onNavigate: (id: SectionId) => void
}

export function Sidebar({ active, onNavigate }: SidebarProps) {
  return (
    <aside className="sticky top-0 hidden h-dvh w-64 shrink-0 flex-col border-r border-sidebar-border bg-sidebar px-3 py-5 lg:flex">
      <BrandLogo className="px-2" />

      <nav aria-label="Dashboard" className="mt-8 flex-1">
        <ul className="grid gap-1">
          {NAV_ITEMS.map((item) => {
            const isActive = active === item.id
            return (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => onNavigate(item.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={cn(
                    'group relative flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium outline-none transition-all duration-200 focus-visible:ring-3 focus-visible:ring-ring/50',
                    isActive
                      ? 'bg-sidebar-accent text-sidebar-accent-foreground shadow-[inset_0_0_0_1px_oklch(0.52_0.2_268/0.12)]'
                      : 'text-muted-foreground hover:translate-x-0.5 hover:bg-secondary hover:text-foreground',
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      'absolute top-1/2 left-0 h-5 w-[3px] -translate-y-1/2 rounded-r-full bg-primary transition-all duration-300',
                      isActive ? 'opacity-100' : 'scale-y-0 opacity-0',
                    )}
                  />
                  <item.icon
                    className={cn(
                      'size-4.5 shrink-0 transition-transform duration-200 group-hover:scale-110',
                      isActive ? 'text-primary' : '',
                    )}
                    aria-hidden="true"
                  />
                  {item.label}
                </button>
              </li>
            )
          })}
        </ul>
      </nav>

      <div className="rounded-xl border border-primary/15 bg-linear-to-br from-accent to-card p-4">
        <span className="inline-flex size-8 items-center justify-center rounded-lg bg-card text-primary shadow-[var(--shadow-soft)]">
          <Sparkles className="size-4" aria-hidden="true" />
        </span>
        <p className="mt-3 text-sm font-semibold text-foreground">Upgrade to Pro</p>
        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
          Unlimited mock interviews and deeper resume insights.
        </p>
        <Button variant="shine" size="sm" className="mt-3 w-full">
          Upgrade
        </Button>
      </div>
    </aside>
  )
}
