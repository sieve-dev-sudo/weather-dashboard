import { Sun, CloudSun, Cloud, CloudRain, CloudDrizzle, Moon } from 'lucide-react'

const ICON_MAP = {
  '☀️': Sun,
  '⛅': CloudSun,
  '☁️': Cloud,
  '🌧️': CloudRain,
  '🌦️': CloudDrizzle,
  '🌙': Moon,
}

export function WeatherIcon({ icon, size = 24, className = '' }) {
  const IconComponent = ICON_MAP[icon] || Sun
  return <IconComponent size={size} className={className} />
}
