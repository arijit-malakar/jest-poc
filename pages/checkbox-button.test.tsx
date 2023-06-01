import { render, screen, fireEvent } from '@testing-library/react';
import CheckboxButton from './checkbox-button';

describe('CheckboxButton', () => {
  test('when checkbox is checked, button should be disabled', () => {
    render(<CheckboxButton />);

    const checkbox = screen.getByRole('checkbox', {
      name: 'Disable button',
    });
    const button = screen.getByRole('button', { name: 'Button' });

    // Before checkbox is checked
    expect(checkbox).not.toBeChecked()
    expect(button).toBeEnabled()

    // After checkbox is checked
    fireEvent.click(checkbox)
    expect(checkbox).toBeChecked()
    expect(button).toBeDisabled()
    expect(button).toHaveStyle({
      backgroundColor: 'black',
      color: 'gray',
      border: 0,
      cursor: 'not-allowed'
    })

    // After checkbox is unchecked
    fireEvent.click(checkbox)
    expect(checkbox).not.toBeChecked()
    expect(button).toBeEnabled()
  })
})
