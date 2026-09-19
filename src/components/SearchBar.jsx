import { useState, useRef, useEffect, forwardRef, useImperativeHandle } from 'react'

const SearchBar = forwardRef(function SearchBar({ onSearch, children }, ref) {
  const [query, setQuery] = useState('')
  const [isFocused, setIsFocused] = useState(false)
  const wrapperRef = useRef(null)
  const inputRef = useRef(null)

  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current?.focus(),
  }))

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
        ref={inputRef}
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
        className="w-full pl-4 pr-16 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <kbd className="hidden sm:flex absolute right-3 top-1/2 -translate-y-1/2 items-center gap-0.5 px-1.5 py-0.5 text-xs font-mono text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded pointer-events-none">
        Ctrl K
      </kbd>
      {query.trim() !== '' && isFocused && children}
    </div>
  )
})

export default SearchBar
