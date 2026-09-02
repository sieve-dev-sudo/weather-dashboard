function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center py-10">
      <div className="w-8 h-8 border-4 border-slate-200 border-t-indigo-600 rounded-full animate-spin"></div>
      <span className="ml-3 text-slate-500 text-sm">Loading weather...</span>
    </div>
  )
}

export default LoadingSpinner
