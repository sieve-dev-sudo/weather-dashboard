function SkeletonWeatherDetails() {
  return (
    <div className="mt-4 sm:mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-3 animate-pulse"
        >
          <div className="h-3 w-14 bg-slate-200 dark:bg-slate-700 rounded mb-2" />
          <div className="h-4 w-16 bg-slate-200 dark:bg-slate-700 rounded" />
        </div>
      ))}
    </div>
  )
}

export default SkeletonWeatherDetails
