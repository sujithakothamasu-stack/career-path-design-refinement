import { BrandLogo } from '@/components/brand-logo'

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6">
        <BrandLogo />
        <p className="text-sm text-muted-foreground">
          {'© 2026 CareerPath AI. Built to help developers grow.'}
        </p>
      </div>
    </footer>
  )
}
