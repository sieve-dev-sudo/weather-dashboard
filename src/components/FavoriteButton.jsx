import { motion } from 'framer-motion'

function FavoriteButton({ isFavorite, onToggle }) {
  return (
    <motion.button
      onClick={onToggle}
      aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      aria-pressed={isFavorite}
      whileTap={{ scale: 1.4 }}
      className="text-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded"
    >
      {isFavorite ? '⭐' : '☆'}
    </motion.button>
  )
}

export default FavoriteButton
