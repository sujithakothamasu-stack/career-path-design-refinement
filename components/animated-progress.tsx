import { cn } from '@/lib/utils'

type AnimatedProgressProps = {
  value: number
  label: string
  delay?: number
  className?: string
  tone?: 'primary' | 'success'
}

export function AnimatedProgress({
  value,
  label,
  delay = 0,
  className,
  tone = 'primary',
}: AnimatedProgressProps) {
  return (
    <div
      role="progressbar"
      aria-label={label}
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      className={cn('h-2 w-full overflow-hidden rounded-full bg-secondary', className)}
    >
      <div
        className={cn(
          'h-full origin-left animate-progress rounded-full',
          tone === 'primary'
            ? 'bg-linear-to-r from-chart-2 to-primary'
            : 'bg-linear-to-r from-chart-4 to-success',
        )}
        style={{ width: `${value}%`, animationDelay: `${delay}ms` }}
      />
    </div>
  )
}
