import { Share2, Check, Copy } from 'lucide-react'
import { useShare } from '../hooks/useShare'
import { formatShareText } from '../utils/formatShareText'

function ShareButton({ city, unit }) {
  const { share, status } = useShare()

  const handleShare = () => {
    const text = formatShareText(city, unit)
    share(`Weather in ${city.city}`, text)
  }

  return (
    <button
      onClick={handleShare}
      aria-label={`Share weather for ${city.city}`}
      className="flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-medium bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
    >
      {status === 'copied' ? (
        <>
          <Check size={14} className="text-green-600 dark:text-green-400" />
          <span>Copied!</span>
        </>
      ) : status === 'shared' ? (
        <>
          <Check size={14} className="text-green-600 dark:text-green-400" />
          <span>Shared!</span>
        </>
      ) : (
        <>
          {typeof navigator !== 'undefined' && navigator.share ? <Share2 size={14} /> : <Copy size={14} />}
          <span>Share</span>
        </>
      )}
    </button>
  )
}

export default ShareButton
