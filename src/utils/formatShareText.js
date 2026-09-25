import { convertTemp } from './convertTemp'

export function formatShareText(city, unit) {
  const temp = convertTemp(city.temp, unit)
  const feelsLike = convertTemp(city.feelsLike, unit)

  return `Weather in ${city.city}, ${city.country}: ${temp}°${unit} (feels like ${feelsLike}°${unit}), ${city.condition}. Humidity ${city.humidity}%, Wind ${city.wind} km/h.`
}
