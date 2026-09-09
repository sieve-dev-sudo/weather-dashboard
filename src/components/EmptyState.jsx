function EmptyState({ icon = '🔍', title, description }) {
  return (
    <div className="flex flex-col items-center justify-center py-10 text-center">
      <span className="text-4xl mb-3">{icon}</span>
      <h3 className="text-slate-700 dark:text-slate-300 font-medium">{title}</h3>
      {description && (
        <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{description}</p>
      )}
    </div>
  )
}

export default EmptyState
