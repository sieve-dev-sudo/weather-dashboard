export function getAqiLabel(aqi) {
  if (aqi <= 50) return { label: 'Good', color: 'text-green-600 dark:text-green-400' }
  if (aqi <= 100) return { label: 'Moderate', color: 'text-yellow-600 dark:text-yellow-400' }
  if (aqi <= 150) return { label: 'Unhealthy (Sensitive)', color: 'text-orange-600 dark:text-orange-400' }
  if (aqi <= 200) return { label: 'Unhealthy', color: 'text-red-600 dark:text-red-400' }
  return { label: 'Very Unhealthy', color: 'text-purple-600 dark:text-purple-400' }
}
