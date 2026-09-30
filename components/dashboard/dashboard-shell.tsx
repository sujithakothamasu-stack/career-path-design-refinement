'use client'

import { useState } from 'react'
import { Map } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { isWorkspaceTab, type SectionId, type WorkspaceTab } from './nav-items'
import { SettingsDialog } from './settings-dialog'
import { Sidebar } from './sidebar'
import { SkillsCard } from './skills-card'
import { StatCards } from './stat-cards'
import { Topbar } from './topbar'
import { WorkspaceTabs } from './workspace-tabs'

export function DashboardShell() {
  const [activeSection, setActiveSection] = useState<SectionId>('overview')
  const [activeTab, setActiveTab] = useState<WorkspaceTab>('resume')
  const [settingsOpen, setSettingsOpen] = useState(false)

  function handleNavigate(id: SectionId) {
    if (id === 'settings') {
      setSettingsOpen(true)
      return
    }
    setActiveSection(id)
    if (isWorkspaceTab(id)) setActiveTab(id)
    document
      .getElementById(id === 'overview' ? 'overview' : 'workspace')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  function handleTabChange(tab: WorkspaceTab) {
    setActiveTab(tab)
    setActiveSection(tab)
  }

  return (
    <div className="flex min-h-dvh bg-background">
      <Sidebar active={settingsOpen ? 'settings' : activeSection} onNavigate={handleNavigate} />

      <div className="flex min-w-0 flex-1 flex-col">
        <Topbar onNavigate={handleNavigate} />

        <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
          <section id="overview" className="flex scroll-mt-20 flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="animate-fade-up">
              <h1 className="text-2xl font-semibold tracking-tight text-balance text-foreground sm:text-3xl">
                Welcome back, Alex
              </h1>
              <p className="mt-1.5 text-muted-foreground">
                {"You're 3 steps away from your next roadmap milestone."}
              </p>
            </div>
            <Button variant="shine" size="xl" onClick={() => handleNavigate('roadmap')} className="self-start sm:self-auto">
              <Map data-icon="inline-start" aria-hidden="true" />
              Generate Roadmap
            </Button>
          </section>

          <div className="mt-8">
            <StatCards />
          </div>

          <div className="mt-6 grid gap-6 xl:grid-cols-[1fr_340px]">
            <WorkspaceTabs value={activeTab} onValueChange={handleTabChange} />
            <SkillsCard />
          </div>
        </main>
      </div>

      <SettingsDialog open={settingsOpen} onOpenChange={setSettingsOpen} />
    </div>
  )
}
