export type IconName =
  | 'home'
  | 'folder'
  | 'sparkle'
  | 'database'
  | 'clock'
  | 'settings'
  | 'search'
  | 'arrow'
  | 'code'
  | 'doc'
  | 'cloud'

export interface NavItem {
  label: string
  icon: IconName
}

export interface QuickAction {
  title: string
  description: string
  icon: IconName
  /** full Tailwind classes so the JIT can see them */
  cardClass: string
  iconClass: string
}

export interface Project {
  name: string
  initial: string
  colorClass: string
  tags: string[]
  edited: string
}

export interface Activity {
  title: string
  time: string
  icon: IconName
}

export interface Stat {
  value: number
  label: string
}
