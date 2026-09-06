import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import SearchBar from './SearchBar'

describe('SearchBar component', () => {
  it('renders input with placeholder', () => {
    render(<SearchBar onSearch={vi.fn()} />)
    expect(
      screen.getByPlaceholderText(/Search city/i)
    ).toBeInTheDocument()
  })

  it('calls onSearch when typing', () => {
    const onSearch = vi.fn()
    render(<SearchBar onSearch={onSearch} />)
    const input = screen.getByPlaceholderText(/Search city/i)
    fireEvent.change(input, { target: { value: 'Tokyo' } })
    expect(onSearch).toHaveBeenCalledWith('Tokyo')
  })
})
