import Layout from './components/Layout'
import { mockCities } from './data/mockWeatherData'

function App() {
  return (
    <Layout>
      <p className="text-slate-600">
        Loaded {mockCities.length} mock cities: {mockCities.map(c => c.city).join(', ')}
      </p>
    </Layout>
  )
}

export default App
