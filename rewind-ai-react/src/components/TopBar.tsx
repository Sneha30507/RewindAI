import Icon from './Icon'

export default function TopBar() {
  return (
    <header className="flex items-center gap-5 border-b border-line px-7 py-4">
      <label className="flex min-h-[48px] flex-1 items-center gap-3 rounded-xl border border-[#26264A] bg-ink-700 px-4 text-muted">
        <Icon name="search" />
        <input
          type="text"
          placeholder="Search your files, chats, code, or ask anything..."
          className="min-w-0 flex-1 bg-transparent text-sm text-[#E8E8F5] outline-none placeholder:text-muted"
        />
        <span className="hidden rounded-md border border-[#33335C] px-2 py-[3px] text-xs text-muted sm:inline">
          Ctrl + K
        </span>
      </label>

      <div className="flex items-center gap-2.5 font-medium">
        <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-[#8B6BFF] to-[#E56BC3] font-bold text-white">
          S
        </div>
        <span className="hidden sm:inline">Sneha</span>
      </div>
    </header>
  )
}
