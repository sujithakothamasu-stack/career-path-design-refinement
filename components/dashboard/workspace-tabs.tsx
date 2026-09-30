'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { NAV_ITEMS, isWorkspaceTab, type WorkspaceTab } from './nav-items'
import { InterviewPanel } from './panels/interview-panel'
import { ProjectsPanel } from './panels/projects-panel'
import { ResumePanel } from './panels/resume-panel'
import { RoadmapPanel } from './panels/roadmap-panel'

const TAB_ITEMS = NAV_ITEMS.filter((item) => isWorkspaceTab(item.id))

const PANELS: Record<WorkspaceTab, () => React.JSX.Element> = {
  resume: ResumePanel,
  roadmap: RoadmapPanel,
  interview: InterviewPanel,
  projects: ProjectsPanel,
}

type WorkspaceTabsProps = {
  value: WorkspaceTab
  onValueChange: (value: WorkspaceTab) => void
}

export function WorkspaceTabs({ value, onValueChange }: WorkspaceTabsProps) {
  return (
    <section id="workspace" aria-labelledby="workspace-heading" className="scroll-mt-20">
      <div className="surface-card rounded-2xl p-5 sm:p-6">
        <h2 id="workspace-heading" className="text-lg font-semibold tracking-tight text-foreground">
          Your workspace
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Pick a tool to keep making progress toward your target role.
        </p>

        <Tabs
          value={value}
          onValueChange={(next) => {
            if (typeof next === 'string' && isWorkspaceTab(next)) onValueChange(next)
          }}
          className="mt-5"
        >
          <div className="-mx-1 overflow-x-auto px-1 pb-1">
            <TabsList className="h-auto! gap-1 rounded-xl bg-secondary p-1">
              {TAB_ITEMS.map((item) => (
                <TabsTrigger
                  key={item.id}
                  value={item.id}
                  className="h-9 flex-none rounded-lg px-3.5 transition-all duration-200 hover:bg-card/60 data-active:bg-card data-active:text-primary data-active:shadow-[var(--shadow-soft)]"
                >
                  <item.icon aria-hidden="true" />
                  {item.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {TAB_ITEMS.map((item) => {
            const Panel = PANELS[item.id as WorkspaceTab]
            return (
              <TabsContent key={item.id} value={item.id} className="mt-5 animate-fade-up [animation-duration:350ms]">
                <Panel />
              </TabsContent>
            )
          })}
        </Tabs>
      </div>
    </section>
  )
}
