import { useState, useRef, useEffect } from 'react'

function SearchBar({ onSearch, children }) {
  const [query, setQuery] = useState('')
  const [isFocused, setIsFocused] = useState(false)
  const wrapperRef = useRef(null)

  const handleChange = (e) => {
    const value = e.target.value
    setQuery(value)
    onSearch(value)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setIsFocused(false)
      e.target.blur()
    }
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsFocused(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div ref={wrapperRef} className="relative mb-4">
      <label htmlFor="city-search" className="sr-only">
        Search for a city
      </label>
      <input
        id="city-search"
        type="text"
        value={query}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onKeyDown={handleKeyDown}
        placeholder="Search city (e.g. Tokyo, London...)"
        role="combobox"
        aria-expanded={Boolean(query && isFocused)}
        aria-controls="city-search-results"
        aria-autocomplete="list"
        className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      {query && isFocused && children}
    </div>
  )
}

export default SearchBar
