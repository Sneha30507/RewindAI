import type { IconName } from '../types'

const paths: Record<IconName, string> = {
  home: 'M3 11l9-8 9 8v10h-6v-6H9v6H3z',
  folder: 'M3 6h6l2 2h10v11H3z',
  sparkle: 'M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2z',
  database: 'M4 6c0-3 16-3 16 0v12c0 3-16 3-16 0zM4 12c0 3 16 3 16 0',
  clock: 'M12 3a9 9 0 100 18 9 9 0 000-18zM12 7v5l3 2',
  settings: 'M12 9a3 3 0 100 6 3 3 0 000-6zM12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2',
  search: 'M11 4a7 7 0 100 14 7 7 0 000-14zM20 20l-4-4',
  arrow: 'M5 12h14M13 6l6 6-6 6',
  code: 'M8 7l-5 5 5 5M16 7l5 5-5 5',
  doc: 'M6 3h9l4 4v14H6zM9 12h7M9 16h7',
  cloud: 'M7 18h10a4 4 0 000-8 6 6 0 00-11-1 4.5 4.5 0 001 9z',
}

interface IconProps {
  name: IconName
  className?: string
}

export default function Icon({ name, className = 'h-[18px] w-[18px]' }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={`shrink-0 fill-none stroke-current ${className}`}
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={paths[name]} />
    </svg>
  )
}
