import { render, screen } from '@testing-library/react';
import Home from '../pages/index';

describe('Home component', () => {
  it('renders links with correct href attributes', () => {
    render(<Home />);

    const links = screen.getAllByRole('link');

    const hrefs = [
      'check-heading-text',
      'check-by-test-id',
      'color-button',
      'checkbox-button',
      'to-have-class',
      'form',
    ];

    links.forEach((link, index) => {
      expect(link).toHaveAttribute('href', hrefs[index]);
    });
  });
});
