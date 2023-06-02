import { render, screen } from '@testing-library/react'
import CheckHeadingText from '../pages/check-heading-text'

describe('CheckHeadingText', () => {
  it('renders a heading with the text "Welcome to unit testing with Jest"', () => {
    render(<CheckHeadingText />);
    const headingElement = screen.getByRole('heading', { name: 'Welcome to unit testing with Jest' });
    expect(headingElement).toBeInTheDocument();
  })

  it('do nothing', () => { })
})
