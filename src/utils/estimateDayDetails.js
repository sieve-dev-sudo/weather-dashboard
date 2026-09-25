export function estimateDayDetails(city, dayItem, dayIndex) {
  const seed = (dayIndex * 5) % 10

  const high = dayItem.temp + 2
  const low = dayItem.temp - 5
  const humidity = Math.min(100, Math.max(0, city.humidity + (seed - 5)))
  const wind = Math.max(0, city.wind + ((seed % 3) - 1))

  let chanceOfRain = city.chanceOfRain
  if (dayItem.icon === '🌧️') chanceOfRain = Math.min(100, city.chanceOfRain + 25)
  else if (dayItem.icon === '☀️') chanceOfRain = Math.max(0, city.chanceOfRain - 20)
  else if (dayItem.icon === '⛅' || dayItem.icon === '☁️') chanceOfRain = city.chanceOfRain

  // Simple mini hourly breakdown for the day (morning / afternoon / evening / night)
  const miniHourly = [
    { label: 'Morning', temp: low + 2, icon: dayItem.icon },
    { label: 'Afternoon', temp: high, icon: dayItem.icon },
    { label: 'Evening', temp: dayItem.temp - 2, icon: dayItem.icon === '☀️' ? '⛅' : dayItem.icon },
    { label: 'Night', temp: low, icon: '🌙' },
  ]

  return { high, low, humidity, wind, chanceOfRain, miniHourly }
}
