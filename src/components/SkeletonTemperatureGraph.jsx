function SkeletonTemperatureGraph() {
  return (
    <div className="mt-4 sm:mt-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 animate-pulse">
      <div className="h-4 w-32 bg-slate-200 dark:bg-slate-700 rounded mb-3" />
      <div className="h-48 bg-slate-100 dark:bg-slate-700/50 rounded" />
    </div>
  )
}

export default SkeletonTemperatureGraph
