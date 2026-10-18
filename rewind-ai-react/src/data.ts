import type { Activity, NavItem, Project, QuickAction, Stat } from './types'

export const navItems: NavItem[] = [
  { label: 'Home', icon: 'home' },
  { label: 'My Projects', icon: 'folder' },
  { label: 'AI Assistant', icon: 'sparkle' },
  { label: 'Knowledge Vault', icon: 'database' },
  { label: 'Activity History', icon: 'clock' },
  { label: 'Settings', icon: 'settings' },
]

export const suggestions: string[] = [
  'Summarize my last project',
  'Find my code snippets',
  'What did I work on yesterday?',
]

export const quickActions: QuickAction[] = [
  {
    title: 'Search Code',
    description: 'Find any code snippet, function or file.',
    icon: 'code',
    cardClass: 'from-[#1F1B52] to-[#121232]',
    iconClass: 'bg-[#3A2F9A]',
  },
  {
    title: 'Summarize',
    description: 'Get a quick summary of your past work.',
    icon: 'doc',
    cardClass: 'from-[#10294A] to-[#0E1830]',
    iconClass: 'bg-[#1F6FC9]',
  },
  {
    title: 'Ask AI',
    description: 'Turn your past context into new ideas.',
    icon: 'sparkle',
    cardClass: 'from-[#2A1B52] to-[#16122E]',
    iconClass: 'bg-[#6A3FD0]',
  },
  {
    title: 'Upload & Remember',
    description: 'Add files, docs, or links to your knowledge vault.',
    icon: 'folder',
    cardClass: 'from-[#0F3A38] to-[#0D2020]',
    iconClass: 'bg-[#139B6A]',
  },
]

export const projects: Project[] = [
  { name: 'Weather Forecast Application', initial: 'W', colorClass: 'bg-[#4A52D6]', tags: ['HTML', 'CSS', 'JS'], edited: '2 hours ago' },
  { name: 'Online Voting System', initial: 'O', colorClass: 'bg-[#5B47D8]', tags: ['React', 'JS', 'CSS'], edited: '1 day ago' },
  { name: 'Personal Portfolio Website', initial: 'P', colorClass: 'bg-[#8A4FD6]', tags: ['HTML', 'CSS', 'JS'], edited: '2 days ago' },
  { name: 'Final Year Project - AI Assistant', initial: 'F', colorClass: 'bg-[#2F7FD0]', tags: ['Python', 'FastAPI', 'React'], edited: '3 days ago' },
]

export const stats: Stat[] = [
  { value: 3, label: 'Projects' },
  { value: 12, label: 'Files Remembered' },
  { value: 5, label: 'Apps Connected' },
  { value: 24, label: 'Days Active' },
]

export const activities: Activity[] = [
  { title: 'Opened Weather Forecast App', time: '2 hours ago', icon: 'cloud' },
  { title: 'Searched for React components', time: '4 hours ago', icon: 'code' },
  { title: 'Summarized project notes', time: '1 day ago', icon: 'doc' },
  { title: 'Added new file to Knowledge Vault', time: '2 days ago', icon: 'database' },
  { title: 'Asked AI about deployment', time: '2 days ago', icon: 'sparkle' },
]
