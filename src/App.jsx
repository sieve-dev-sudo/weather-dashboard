import { useState } from 'react'
import Layout from './components/Layout'
import SearchBar from './components/SearchBar'
import CityList from './components/CityList'
import CurrentWeather from './components/CurrentWeather'
import Forecast from './components/Forecast'
import LoadingSpinner from './components/LoadingSpinner'
import { useSimulatedLoading } from './hooks/useSimulatedLoading'
import { mockCities } from './data/mockWeatherData'

function App() {
  const [query, setQuery] = useState('')
  const [selectedCity, setSelectedCity] = useState(mockCities[0])
  const [unit, setUnit] = useState('C')
  const loading = useSimulatedLoading(selectedCity.id)

  const filteredCities = mockCities.filter((c) =>
    c.city.toLowerCase().includes(query.toLowerCase())
  )

  const toggleUnit = () => {
    setUnit((prev) => (prev === 'C' ? 'F' : 'C'))
  }

  return (
    <Layout unit={unit} onToggleUnit={toggleUnit}>
      <SearchBar onSearch={setQuery} />
      {query && <CityList cities={filteredCities} onSelectCity={setSelectedCity} />}

      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <CurrentWeather city={selectedCity} unit={unit} />
          <Forecast forecast={selectedCity.forecast} unit={unit} />
        </>
      )}
    </Layout>
  )
}

export default App
