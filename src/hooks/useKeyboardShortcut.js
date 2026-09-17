import { useEffect } from 'react'

export function useKeyboardShortcut(key, callback, options = {}) {
  const { ctrlOrCmd = false } = options

  useEffect(() => {
    function handleKeyDown(e) {
      const isCtrlOrCmd = e.ctrlKey || e.metaKey
      const matchesModifier = ctrlOrCmd ? isCtrlOrCmd : true

      if (e.key.toLowerCase() === key.toLowerCase() && matchesModifier) {
        e.preventDefault()
        callback()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [key, callback, ctrlOrCmd])
}
