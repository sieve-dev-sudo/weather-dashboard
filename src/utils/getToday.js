const DAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

export function getTodayShortName() {
  const today = new Date()
  return DAY_NAMES[today.getDay()]
}
