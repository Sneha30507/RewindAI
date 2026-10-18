interface SectionHeaderProps {
  title: string
}

export default function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <div className="mb-4 flex items-center justify-between">
      <h2 className="text-xl font-bold">{title}</h2>
      <a href="#" className="text-[13px] text-brand-link hover:underline">
        View all
      </a>
    </div>
  )
}
