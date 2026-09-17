import { useState, useRef } from 'react'
import Layout from './components/Layout'
import SearchBar from './components/SearchBar'
import CityList from './components/CityList'
import CurrentWeather from './components/CurrentWeather'
import HourlyForecast from './components/HourlyForecast'
import Forecast from './components/Forecast'
import WeatherDetails from './components/WeatherDetails'
import SkeletonCurrentWeather from './components/SkeletonCurrentWeather'
import SkeletonHourlyForecast from './components/SkeletonHourlyForecast'
import SkeletonForecast from './components/SkeletonForecast'
import SkeletonWeatherDetails from './components/SkeletonWeatherDetails'
import FavoritesList from './components/FavoritesList'
import RecentSearches from './components/RecentSearches'
import { useSimulatedLoading } from './hooks/useSimulatedLoading'
import { useDarkMode } from './hooks/useDarkMode'
import { useFavorites } from './hooks/useFavorites'
import { useRecentSearches } from './hooks/useRecentSearches'
import { useKeyboardShortcut } from './hooks/useKeyboardShortcut'
import { mockCities } from './data/mockWeatherData'

function App() {
  const [query, setQuery] = useState('')
  const [selectedCity, setSelectedCity] = useState(mockCities[0])
  const [unit, setUnit] = useState('C')
  const { isDark, toggleDarkMode } = useDarkMode()
  const { favorites, isFavorite, toggleFavorite } = useFavorites()
  const { recentIds, addRecentSearch, clearRecentSearches } = useRecentSearches()
  const loading = useSimulatedLoading(selectedCity.id)
  const searchBarRef = useRef(null)

  useKeyboardShortcut('k', () => searchBarRef.current?.focus(), { ctrlOrCmd: true })

  const filteredCities = mockCities.filter((c) =>
    c.city.toLowerCase().includes(query.toLowerCase())
  )

  const toggleUnit = () => {
    setUnit((prev) => (prev === 'C' ? 'F' : 'C'))
  }

  const handleSelectCity = (city) => {
    setSelectedCity(city)
    setQuery('')
    addRecentSearch(city.id)
  }

  return (
    <Layout
      unit={unit}
      onToggleUnit={toggleUnit}
      isDark={isDark}
      onToggleDark={toggleDarkMode}
      condition={selectedCity.condition}
    >
      <FavoritesList
        cities={mockCities}
        favorites={favorites}
        onSelectCity={setSelectedCity}
      />

      <RecentSearches
        cities={mockCities}
        recentIds={recentIds}
        onSelectCity={setSelectedCity}
        onClear={clearRecentSearches}
      />

      <SearchBar ref={searchBarRef} onSearch={setQuery}>
        <CityList cities={filteredCities} onSelectCity={handleSelectCity} />
      </SearchBar>

      {loading ? (
        <>
          <SkeletonCurrentWeather />
          <SkeletonHourlyForecast />
          <SkeletonWeatherDetails />
          <SkeletonForecast />
        </>
      ) : (
        <>
          <CurrentWeather
            city={selectedCity}
            unit={unit}
            isFavorite={isFavorite(selectedCity.id)}
            onToggleFavorite={() => toggleFavorite(selectedCity.id)}
          />
          <HourlyForecast hourly={selectedCity.hourly} unit={unit} />
          <WeatherDetails city={selectedCity} />
          <Forecast forecast={selectedCity.forecast} unit={unit} />
        </>
      )}
    </Layout>
  )
}

export default App
