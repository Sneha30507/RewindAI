import Hero from './components/Hero'
import QuickActions from './components/QuickActions'
import RecentProjects from './components/RecentProjects'
import RightPanel from './components/RightPanel'
import Sidebar from './components/Sidebar'
import TopBar from './components/TopBar'

export default function App() {
  return (
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)_340px]">
      <Sidebar />
      <main className="flex min-w-0 flex-col">
        <TopBar />
        <Hero />
        <QuickActions />
        <RecentProjects />
      </main>
      <RightPanel />
    </div>
  )
}
