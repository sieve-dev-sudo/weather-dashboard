import { useState } from 'react'

export function useShare() {
  const [status, setStatus] = useState('idle') // idle | copied | shared | error

  const share = async (title, text) => {
    if (navigator.share) {
      try {
        await navigator.share({ title, text })
        setStatus('shared')
      } catch (err) {
        if (err.name !== 'AbortError') {
          setStatus('error')
        }
      }
    } else {
      try {
        await navigator.clipboard.writeText(text)
        setStatus('copied')
        setTimeout(() => setStatus('idle'), 2000)
      } catch {
        setStatus('error')
      }
    }
  }

  return { share, status }
}
