import { Sun, Moon, GraduationCap, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { useTheme } from '../context/ThemeContext.jsx'

export default function Navbar({ tabs, activeTab, onTabChange }) {
  const { theme, toggleTheme } = useTheme()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur dark:border-navy-800 dark:bg-navy-950/90">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy-800 text-accent-400 shadow-card dark:bg-navy-800">
            <GraduationCap size={20} />
          </span>
          <div className="leading-tight">
            <p className="text-sm font-bold text-navy-900 dark:text-slate-50 sm:text-base">
              CS 5388 · Living Project Portal
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">Software Project Management</p>
          </div>
        </div>

        <nav className="hidden items-center gap-1 md:flex">
          {tabs.map((tab) => {
            const Icon = tab.icon
            const isActive = tab.id === activeTab
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-navy-800 text-white shadow-card dark:bg-accent-600'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-navy-800 dark:text-slate-300 dark:hover:bg-navy-800 dark:hover:text-white'
                }`}
              >
                <Icon size={16} />
                <span className="hidden xl:inline">{tab.shortLabel}</span>
              </button>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-navy-700 transition-colors hover:bg-slate-100 dark:border-navy-700 dark:bg-navy-900 dark:text-accent-400 dark:hover:bg-navy-800"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-navy-700 dark:border-navy-700 dark:bg-navy-900 dark:text-slate-200 md:hidden"
          >
            {mobileOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="border-t border-slate-200 bg-white px-4 py-2 dark:border-navy-800 dark:bg-navy-950 md:hidden">
          <div className="flex flex-col gap-1 pb-2">
            {tabs.map((tab) => {
              const Icon = tab.icon
              const isActive = tab.id === activeTab
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    onTabChange(tab.id)
                    setMobileOpen(false)
                  }}
                  className={`flex items-center gap-2 rounded-lg px-3 py-2 text-left text-sm font-medium ${
                    isActive
                      ? 'bg-navy-800 text-white dark:bg-accent-600'
                      : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-navy-800'
                  }`}
                >
                  <Icon size={16} />
                  {tab.label}
                </button>
              )
            })}
          </div>
        </nav>
      )}
    </header>
  )
}
