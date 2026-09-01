import { mockCities } from './data/mockWeatherData'

function App() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Weather Dashboard 🌤️</h1>
      <p className="text-slate-600">
        Loaded {mockCities.length} mock cities: {mockCities.map(c => c.city).join(', ')}
      </p>
    </div>
  )
}

export default App
