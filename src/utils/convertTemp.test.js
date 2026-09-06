import { describe, it, expect } from 'vitest'
import { celsiusToFahrenheit, convertTemp } from './convertTemp'

describe('convertTemp utils', () => {
  it('converts 0°C to 32°F', () => {
    expect(celsiusToFahrenheit(0)).toBe(32)
  })

  it('converts 100°C to 212°F', () => {
    expect(celsiusToFahrenheit(100)).toBe(212)
  })

  it('convertTemp returns Celsius unchanged when unit is C', () => {
    expect(convertTemp(25, 'C')).toBe(25)
  })

  it('convertTemp returns Fahrenheit when unit is F', () => {
    expect(convertTemp(25, 'F')).toBe(77)
  })
})
