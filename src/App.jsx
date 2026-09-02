import { useState } from 'react'
import Layout from './components/Layout'
import SearchBar from './components/SearchBar'
import CityList from './components/CityList'
import CurrentWeather from './components/CurrentWeather'
import { mockCities } from './data/mockWeatherData'

function App() {
  const [query, setQuery] = useState('')
  const [selectedCity, setSelectedCity] = useState(mockCities[0])

  const filteredCities = mockCities.filter((c) =>
    c.city.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <Layout>
      <SearchBar onSearch={setQuery} />
      {query && <CityList cities={filteredCities} onSelectCity={setSelectedCity} />}
      <CurrentWeather city={selectedCity} />
    </Layout>
  )
}

export default App
