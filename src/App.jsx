import { useState } from 'react'
import { FileSignature, Calculator, ListTree, Kanban, Rocket, ShieldCheck } from 'lucide-react'
import Navbar from './components/Navbar.jsx'
import CharterTab from './tabs/CharterTab.jsx'
import BusinessCaseTab from './tabs/BusinessCaseTab.jsx'
import PlanRiskTab from './tabs/PlanRiskTab.jsx'
import KanbanTab from './tabs/KanbanTab.jsx'
import RoadmapTopologyTab from './tabs/RoadmapTopologyTab.jsx'
import AIGovernanceTab from './tabs/AIGovernanceTab.jsx'

const TABS = [
  { id: 'charter', label: 'Charter & Stakeholders', shortLabel: 'Charter', icon: FileSignature, Component: CharterTab },
  { id: 'business', label: 'Business Case & Estimation', shortLabel: 'Business Case', icon: Calculator, Component: BusinessCaseTab },
  { id: 'plan', label: 'Hybrid Plan & Risk Register', shortLabel: 'Plan & Risk', icon: ListTree, Component: PlanRiskTab },
  { id: 'kanban', label: 'Interactive Jira Kanban Board', shortLabel: 'Kanban Board', icon: Kanban, Component: KanbanTab },
  { id: 'roadmap', label: 'Roadmap, Metrics & Topology', shortLabel: 'Roadmap', icon: Rocket, Component: RoadmapTopologyTab },
  { id: 'governance', label: 'AI Governance & Audit', shortLabel: 'AI Governance', icon: ShieldCheck, Component: AIGovernanceTab },
]

export default function App() {
  const [activeTab, setActiveTab] = useState('charter')
  const ActiveComponent = TABS.find((t) => t.id === activeTab)?.Component ?? CharterTab

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-navy-950">
      <Navbar tabs={TABS} activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8">
        <ActiveComponent />
      </main>
      <footer className="border-t border-slate-200 py-6 text-center text-xs text-slate-500 dark:border-navy-800 dark:text-slate-500">
        CS 5388 Software Project Management &middot; Living Project Portal
      </footer>
    </div>
  )
}
