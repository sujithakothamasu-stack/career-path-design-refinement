import type { Metadata } from 'next'
import { DashboardShell } from '@/components/dashboard/dashboard-shell'

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Track your resume score, learning roadmap, and mock interview progress.',
}

export default function DashboardPage() {
  return <DashboardShell />
}
