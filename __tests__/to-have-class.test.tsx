import { render, screen } from '@testing-library/react'
import ToHaveClass from '../pages/to-have-class'

describe('ToHaveClass', () => {
  test('div should have class hidden', () => {
    render(<ToHaveClass />)
    const div = screen.getByText('ToHaveClass')
    expect(div).toHaveClass('hidden')
  })
})
