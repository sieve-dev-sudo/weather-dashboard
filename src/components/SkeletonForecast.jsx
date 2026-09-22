function SkeletonForecast() {
  return (
    <div className="mb-4 sm:mb-6">
      <div className="h-4 w-32 bg-slate-200 dark:bg-slate-700 rounded mb-2 animate-pulse" />
      <div className="grid grid-cols-3 sm:grid-cols-7 gap-2">
        {Array.from({ length: 7 }).map((_, index) => (
          <div
            key={index}
            className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-3 text-center animate-pulse"
          >
            <div className="h-3 w-8 bg-slate-200 dark:bg-slate-700 rounded mx-auto mb-2" />
            <div className="h-6 w-6 bg-slate-200 dark:bg-slate-700 rounded-full mx-auto mb-2" />
            <div className="h-3 w-6 bg-slate-200 dark:bg-slate-700 rounded mx-auto" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default SkeletonForecast
