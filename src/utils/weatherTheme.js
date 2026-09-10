const THEME_MAP = {
  Sunny: {
    gradient: 'from-amber-100 via-orange-50 to-sky-50 dark:from-amber-950 dark:via-orange-950 dark:to-slate-900',
    accent: 'text-amber-600 dark:text-amber-400',
  },
  'Partly Cloudy': {
    gradient: 'from-sky-100 via-blue-50 to-slate-50 dark:from-slate-800 dark:via-blue-950 dark:to-slate-900',
    accent: 'text-sky-600 dark:text-sky-400',
  },
  Cloudy: {
    gradient: 'from-slate-200 via-slate-100 to-slate-50 dark:from-slate-800 dark:via-slate-800 dark:to-slate-900',
    accent: 'text-slate-500 dark:text-slate-400',
  },
  Rainy: {
    gradient: 'from-blue-200 via-slate-100 to-slate-50 dark:from-blue-950 dark:via-slate-900 dark:to-slate-900',
    accent: 'text-blue-600 dark:text-blue-400',
  },
}

const DEFAULT_THEME = {
  gradient: 'from-slate-50 to-slate-50 dark:from-slate-900 dark:to-slate-900',
  accent: 'text-slate-500 dark:text-slate-400',
}

export function getWeatherTheme(condition) {
  return THEME_MAP[condition] || DEFAULT_THEME
}
