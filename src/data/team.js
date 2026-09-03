export const TEAM = [
  {
    id: 'aaf',
    name: 'Amichai A. Fernandez',
    initials: 'AF',
    role: 'Project Lead / Product Owner',
    color: 'bg-navy-600',
  },
  {
    id: 'sao',
    name: 'Sebastian A. Ochoa',
    initials: 'SO',
    role: 'Scrum Master / Delivery Lead',
    color: 'bg-accent-500',
  },
  {
    id: 'rjm',
    name: 'Ruben J. Martinez',
    initials: 'RM',
    role: 'Lead Engineer / Architecture',
    color: 'bg-emerald-600',
  },
  {
    id: 'smlc',
    name: 'Sebastian M. Lucero-Chavez',
    initials: 'SL',
    role: 'AI Governance & QA Lead',
    color: 'bg-purple-600',
  },
  {
    id: 'bnu',
    name: 'Brenden N. Ucol',
    initials: 'BU',
    role: 'Data & Infrastructure Lead',
    color: 'bg-cyan-600',
  },
]

export function memberById(id) {
  return TEAM.find((m) => m.id === id)
}
