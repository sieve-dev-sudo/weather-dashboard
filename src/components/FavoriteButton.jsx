import { motion } from 'framer-motion'

function FavoriteButton({ isFavorite, onToggle }) {
  return (
    <motion.button
      onClick={onToggle}
      aria-label="Toggle favorite"
      whileTap={{ scale: 1.4 }}
      className="text-2xl"
    >
      {isFavorite ? '⭐' : '☆'}
    </motion.button>
  )
}

export default FavoriteButton
