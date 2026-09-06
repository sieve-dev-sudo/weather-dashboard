import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import CurrentWeather from './CurrentWeather'

const mockCity = {
  id: '1',
  city: 'Phnom Penh',
  country: 'KH',
  temp: 33,
  condition: 'Sunny',
  icon: '☀️',
  humidity: 65,
  wind: 8,
}

describe('CurrentWeather component', () => {
  it('renders city name and country', () => {
    render(
      <CurrentWeather
        city={mockCity}
        unit="C"
        isFavorite={false}
        onToggleFavorite={vi.fn()}
      />
    )
    expect(screen.getByText('Phnom Penh, KH')).toBeInTheDocument()
  })

  it('displays temperature with correct unit', () => {
    render(
      <CurrentWeather
        city={mockCity}
        unit="C"
        isFavorite={false}
        onToggleFavorite={vi.fn()}
      />
    )
    expect(screen.getByText('33°')).toBeInTheDocument()
  })

  it('displays humidity and wind info', () => {
    render(
      <CurrentWeather
        city={mockCity}
        unit="C"
        isFavorite={false}
        onToggleFavorite={vi.fn()}
      />
    )
    expect(screen.getByText(/Humidity: 65%/)).toBeInTheDocument()
    expect(screen.getByText(/Wind: 8 km\/h/)).toBeInTheDocument()
  })
})
