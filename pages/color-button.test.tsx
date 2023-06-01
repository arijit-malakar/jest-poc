import { render, screen, fireEvent } from '@testing-library/react'
import ColorButtonPage from './color-button'

describe('ColorButtonPage', () => {
  test('button should toggle between Crimson and MidnightBlue when clicked', () => {
    render(<ColorButtonPage />)
    const button = screen.getByRole('button', {
      name: 'Change to Midnight Blue',
    })

    expect(button).toHaveStyle({ backgroundColor: 'Crimson' })
    expect(button).toHaveTextContent('Change to Midnight Blue')

    fireEvent.click(button)
    expect(button).toHaveStyle({ backgroundColor: 'MidnightBlue' })
    expect(button).toHaveTextContent('Change to Crimson')

    fireEvent.click(button)
    expect(button).toHaveStyle({ backgroundColor: 'Crimson' })
    expect(button).toHaveTextContent('Change to Midnight Blue')
  })
})
