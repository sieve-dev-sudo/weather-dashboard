import { useState } from 'react'
import Layout from './components/Layout'
import SearchBar from './components/SearchBar'
import CityList from './components/CityList'
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
      <CityList cities={filteredCities} onSelectCity={setSelectedCity} />

      <div className="mt-6 p-4 bg-white rounded-lg shadow-sm border border-slate-200">
        <h2 className="text-lg font-semibold text-slate-900">
          {selectedCity.city}, {selectedCity.country}
        </h2>
        <p className="text-slate-600 mt-1">
          {selectedCity.icon} {selectedCity.temp}°C — {selectedCity.condition}
        </p>
      </div>
    </Layout>
  )
}

export default App
