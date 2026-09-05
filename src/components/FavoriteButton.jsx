function FavoriteButton({ isFavorite, onToggle }) {
  return (
    <button
      onClick={onToggle}
      aria-label="Toggle favorite"
      className="text-2xl hover:scale-110 transition-transform"
    >
      {isFavorite ? '⭐' : '☆'}
    </button>
  )
}

export default FavoriteButton
