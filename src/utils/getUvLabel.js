export function getUvLabel(uvIndex) {
  if (uvIndex <= 2) return { label: 'Low', color: 'text-green-600 dark:text-green-400' }
  if (uvIndex <= 5) return { label: 'Moderate', color: 'text-yellow-600 dark:text-yellow-400' }
  if (uvIndex <= 7) return { label: 'High', color: 'text-orange-600 dark:text-orange-400' }
  return { label: 'Very High', color: 'text-red-600 dark:text-red-400' }
}
