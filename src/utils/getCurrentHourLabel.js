export function getHourLabel(hourOffset) {
  const now = new Date()
  const targetHour = new Date(now)
  targetHour.setHours(now.getHours() + hourOffset)

  const hours24 = targetHour.getHours()
  const period = hours24 >= 12 ? 'PM' : 'AM'
  let hours12 = hours24 % 12
  if (hours12 === 0) hours12 = 12

  return hourOffset === 0 ? 'Now' : `${hours12}${period}`
}

export function isNightHour(hourOffset) {
  const now = new Date()
  const targetHour = new Date(now)
  targetHour.setHours(now.getHours() + hourOffset)
  const hours24 = targetHour.getHours()
  return hours24 >= 19 || hours24 < 6
}
