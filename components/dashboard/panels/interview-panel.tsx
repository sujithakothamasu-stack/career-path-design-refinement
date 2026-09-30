'use client'

import { useState } from 'react'
import { Loader2, Mic } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useSimulatedAction } from '@/hooks/use-simulated-action'
import { cn } from '@/lib/utils'

const TYPES = ['Behavioral', 'Frontend', 'System Design', 'Data Structures']

const SESSIONS = [
  { title: 'React performance deep dive', type: 'Frontend', score: 88, date: 'Sep 28' },
  { title: 'Tell me about a conflict', type: 'Behavioral', score: 92, date: 'Sep 26' },
  { title: 'Design a news feed', type: 'System Design', score: 71, date: 'Sep 23' },
]

export function InterviewPanel() {
  const [type, setType] = useState(TYPES[1])
  const { pending, run } = useSimulatedAction(
    `${type} interview ready`,
    'Your AI interviewer is waiting. Good luck!',
  )

  return (
    <div className="grid gap-5 lg:grid-cols-[1fr_1.2fr]">
      <div className="flex flex-col gap-4 rounded-xl border border-border bg-surface/60 p-5">
        <fieldset>
          <legend className="text-sm font-medium text-foreground">Interview type</legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {TYPES.map((option) => (
              <button
                key={option}
                type="button"
                aria-pressed={type === option}
                onClick={() => setType(option)}
                className={cn(
                  'rounded-full border px-3.5 py-1.5 text-sm font-medium outline-none transition-all duration-200 focus-visible:ring-3 focus-visible:ring-ring/50 active:scale-95',
                  type === option
                    ? 'border-primary bg-primary text-primary-foreground shadow-[0_4px_14px_-4px_oklch(0.52_0.2_268/0.5)]'
                    : 'border-border bg-card text-muted-foreground hover:-translate-y-0.5 hover:border-primary/30 hover:text-foreground',
                )}
              >
                {option}
              </button>
            ))}
          </div>
        </fieldset>
        <p className="text-sm leading-relaxed text-muted-foreground">
          A 25-minute session with follow-up questions and a scored feedback report.
        </p>
        <Button variant="shine" size="xl" onClick={run} disabled={pending} className="self-start">
          {pending ? (
            <Loader2 data-icon="inline-start" className="animate-spin" aria-hidden="true" />
          ) : (
            <Mic data-icon="inline-start" aria-hidden="true" />
          )}
          {pending ? 'Preparing…' : 'Start Mock Interview'}
        </Button>
      </div>

      <div className="rounded-xl border border-border bg-card">
        <p className="border-b border-border px-5 py-3 text-sm font-semibold text-foreground">
          Recent sessions
        </p>
        <ul className="divide-y divide-border">
          {SESSIONS.map((session) => (
            <li
              key={session.title}
              className="flex items-center justify-between gap-4 px-5 py-3.5 transition-colors hover:bg-surface"
            >
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-foreground">{session.title}</p>
                <p className="text-xs text-muted-foreground">
                  {session.type} · {session.date}
                </p>
              </div>
              <span
                className={cn(
                  'shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold tabular-nums',
                  session.score >= 80 ? 'bg-success/10 text-success' : 'bg-warning/15 text-warning-foreground',
                )}
              >
                {session.score}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
