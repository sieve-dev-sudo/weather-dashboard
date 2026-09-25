export function estimateHourlyDetails(city, hourIndex, icon) {
  // Deterministic pseudo-variance based on hourIndex so values stay stable
  const seed = (hourIndex * 7) % 10

  const humidity = Math.min(100, Math.max(0, city.humidity + (seed - 5)))
  const wind = Math.max(0, city.wind + ((seed % 3) - 1))

  let chanceOfRain = city.chanceOfRain
  if (icon === '🌧️') chanceOfRain = Math.min(100, city.chanceOfRain + 20)
  else if (icon === '☀️') chanceOfRain = Math.max(0, city.chanceOfRain - 15)

  return { humidity, wind, chanceOfRain }
}
