import Link from 'next/link'
import { Compass } from 'lucide-react'
import { cn } from '@/lib/utils'

export function BrandLogo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn('group inline-flex items-center gap-2.5 rounded-lg outline-none focus-visible:ring-3 focus-visible:ring-ring/50', className)}
    >
      <span className="btn-shine inline-flex size-8 items-center justify-center rounded-lg">
        <Compass
          className="size-4.5 transition-transform duration-500 group-hover:rotate-45"
          aria-hidden="true"
        />
      </span>
      <span className="text-[0.95rem] font-semibold tracking-tight text-foreground">
        CareerPath <span className="text-gradient">AI</span>
      </span>
    </Link>
  )
}
