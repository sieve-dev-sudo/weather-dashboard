function SkeletonHourlyForecast() {
  return (
    <div className="mt-4 sm:mt-6">
      <div className="h-4 w-32 bg-slate-200 dark:bg-slate-700 rounded mb-2 animate-pulse" />
      <div className="flex gap-3 overflow-x-hidden">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-16 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-2 text-center animate-pulse"
          >
            <div className="h-3 w-8 bg-slate-200 dark:bg-slate-700 rounded mx-auto mb-2" />
            <div className="h-5 w-5 bg-slate-200 dark:bg-slate-700 rounded-full mx-auto mb-2" />
            <div className="h-3 w-6 bg-slate-200 dark:bg-slate-700 rounded mx-auto" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default SkeletonHourlyForecast
