import { Sparkles } from 'lucide-react'

function AboutSection() {
  return (
    <div className="border-t border-slate-100 dark:border-slate-700 pt-4 space-y-3">
      <div className="flex items-center gap-2">
        <Sparkles size={16} className="text-indigo-500" />
        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">About This Project</p>
      </div>

      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
        Weather Dashboard គឺជា demo frontend project សាកល្បង React skills, បង្ហាញ 24 ទីក្រុងជុំវិញពិភពលោក
        ជាមួយ mock data ទាំងស្រុង (គ្មាន real API dependency)។
      </p>

      <div className="flex flex-wrap gap-1.5">
        {['React', 'Vite', 'TailwindCSS', 'Framer Motion', 'Recharts', 'Vitest'].map((tech) => (
          <span key={tech} className="px-2 py-0.5 text-[11px] font-medium bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-300 rounded-full">
            {tech}
          </span>
        ))}
      </div>

      <ul className="text-xs text-slate-500 dark:text-slate-400 space-y-1 list-disc list-inside">
        <li>Search, Favorites, Recent Searches</li>
        <li>Hourly and 7-Day Forecast with Detail Popup</li>
        <li>Temperature Trend Graph, City Comparison</li>
        <li>Dark Mode, Responsive, Accessibility Support</li>
      </ul>

      <p className="text-[11px] text-slate-400 dark:text-slate-500 pt-1">
        Version 1.0.0 - Built by Mr. Siev E
      </p>
    </div>
  )
}

export default AboutSection
