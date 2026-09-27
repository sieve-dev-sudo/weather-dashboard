import { useState, useEffect } from 'react'

const DEFAULT_SETTINGS = {
  defaultUnit: 'C',
  defaultCityId: '1',
  notificationsEnabled: false,
}

export function useSettings() {
  const [settings, setSettings] = useState(() => {
    const saved = localStorage.getItem('appSettings')
    return saved ? { ...DEFAULT_SETTINGS, ...JSON.parse(saved) } : DEFAULT_SETTINGS
  })

  useEffect(() => {
    localStorage.setItem('appSettings', JSON.stringify(settings))
  }, [settings])

  const updateSetting = (key, value) => {
    setSettings((prev) => ({ ...prev, [key]: value }))
  }

  const resetSettings = () => {
    setSettings(DEFAULT_SETTINGS)
  }

  return { settings, updateSetting, resetSettings }
}
