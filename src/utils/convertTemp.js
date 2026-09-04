export function celsiusToFahrenheit(celsius) {
  return Math.round((celsius * 9) / 5 + 32)
}

export function convertTemp(celsius, unit) {
  return unit === 'F' ? celsiusToFahrenheit(celsius) : celsius
}
