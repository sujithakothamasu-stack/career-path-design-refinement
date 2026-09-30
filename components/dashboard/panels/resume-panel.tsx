'use client'

import { useState } from 'react'
import { AlertCircle, CheckCircle2, FileSearch, Loader2, UploadCloud } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ScoreRing } from '@/components/score-ring'
import { useSimulatedAction } from '@/hooks/use-simulated-action'

const INSIGHTS = [
  { ok: true, text: 'Strong action verbs across experience section' },
  { ok: true, text: 'Quantified impact in 4 of 5 roles' },
  { ok: false, text: 'Add "system design" and "CI/CD" keywords' },
  { ok: false, text: 'Summary exceeds recommended 3 lines' },
]

export function ResumePanel() {
  const [fileName, setFileName] = useState<string | null>(null)
  const { pending, run } = useSimulatedAction('Resume analyzed', 'Your score improved to 91/100.')

  return (
    <div className="grid gap-5 lg:grid-cols-[1.1fr_1fr]">
      <div className="flex flex-col gap-4">
        <label
          htmlFor="resume-upload"
          className="group flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-border bg-surface/60 px-6 py-10 text-center transition-all duration-300 hover:border-primary/40 hover:bg-accent/50 has-focus-visible:ring-3 has-focus-visible:ring-ring/50"
        >
          <span className="inline-flex size-12 items-center justify-center rounded-xl bg-card text-primary shadow-[var(--shadow-soft)] transition-transform duration-300 group-hover:-translate-y-1">
            <UploadCloud className="size-6" aria-hidden="true" />
          </span>
          <span className="mt-4 text-sm font-semibold text-foreground">
            {fileName ?? 'Drop your resume or click to browse'}
          </span>
          <span className="mt-1 text-xs text-muted-foreground">PDF or DOCX, up to 5MB</span>
          <input
            id="resume-upload"
            type="file"
            accept=".pdf,.doc,.docx"
            className="sr-only"
            onChange={(event) => setFileName(event.target.files?.[0]?.name ?? null)}
          />
        </label>
        <Button variant="shine" size="xl" onClick={run} disabled={pending} className="self-start">
          {pending ? (
            <Loader2 data-icon="inline-start" className="animate-spin" aria-hidden="true" />
          ) : (
            <FileSearch data-icon="inline-start" aria-hidden="true" />
          )}
          {pending ? 'Analyzing…' : 'Analyze Resume'}
        </Button>
      </div>

      <div className="rounded-xl border border-border bg-card p-5">
        <div className="flex items-center gap-4">
          <ScoreRing value={91} label="Resume score" />
          <div>
            <p className="text-sm font-semibold text-foreground">Latest analysis</p>
            <p className="mt-0.5 text-xs text-muted-foreground">Frontend Engineer · 2 days ago</p>
          </div>
        </div>
        <ul className="mt-5 grid gap-2.5">
          {INSIGHTS.map((insight) => (
            <li key={insight.text} className="flex items-start gap-2.5 text-sm">
              {insight.ok ? (
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-success" aria-label="Strength" />
              ) : (
                <AlertCircle className="mt-0.5 size-4 shrink-0 text-warning" aria-label="Suggestion" />
              )}
              <span className="text-muted-foreground">{insight.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
