function SkeletonCurrentWeather() {
  return (
    <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl shadow-sm border border-slate-200/50 dark:border-slate-700/50 animate-pulse">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <div className="h-6 w-40 bg-slate-200 dark:bg-slate-700 rounded" />
          <div className="h-4 w-24 bg-slate-200 dark:bg-slate-700 rounded" />
        </div>
        <div className="h-14 w-14 bg-slate-200 dark:bg-slate-700 rounded-full" />
      </div>

      <div className="mt-4">
        <div className="h-12 w-32 bg-slate-200 dark:bg-slate-700 rounded" />
      </div>

      <div className="mt-4 flex gap-6 border-t border-slate-100/50 dark:border-slate-700/50 pt-4">
        <div className="h-4 w-28 bg-slate-200 dark:bg-slate-700 rounded" />
        <div className="h-4 w-24 bg-slate-200 dark:bg-slate-700 rounded" />
      </div>
    </div>
  )
}

export default SkeletonCurrentWeather
