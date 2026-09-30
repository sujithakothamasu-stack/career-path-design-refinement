import {
  FileSearch,
  FolderGit2,
  LayoutDashboard,
  Map,
  MessagesSquare,
  Settings,
  type LucideIcon,
} from 'lucide-react'

export type WorkspaceTab = 'resume' | 'roadmap' | 'interview' | 'projects'
export type SectionId = 'overview' | WorkspaceTab | 'settings'

export const NAV_ITEMS: { id: SectionId; label: string; icon: LucideIcon }[] = [
  { id: 'overview', label: 'Overview', icon: LayoutDashboard },
  { id: 'resume', label: 'Resume Analyzer', icon: FileSearch },
  { id: 'roadmap', label: 'Learning Roadmap', icon: Map },
  { id: 'interview', label: 'Mock Interviews', icon: MessagesSquare },
  { id: 'projects', label: 'Project Ideas', icon: FolderGit2 },
  { id: 'settings', label: 'Settings', icon: Settings },
]

export function isWorkspaceTab(value: string): value is WorkspaceTab {
  return ['resume', 'roadmap', 'interview', 'projects'].includes(value)
}
