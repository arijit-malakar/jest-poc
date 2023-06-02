import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Form from '../pages/form';

describe('Form', () => {
  test('renders form with input field and submit button', () => {
    render(<Form />);
    expect(screen.getByLabelText('Input Field')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
  });

  test('displays error message when submitting an empty form', () => {
    render(<Form />);
    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));
    expect(screen.getByText('Please enter a value')).toBeInTheDocument();
  });

  test('clears error message when entering a value', () => {
    render(<Form />);
    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));
    expect(screen.getByText('Please enter a value')).toBeInTheDocument();

    const input = screen.getByLabelText('Input Field') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'Test' } });
    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));

    expect(screen.queryByText('Please enter a value')).not.toBeInTheDocument();
  });

  test('handles form submission when input value is provided', () => {
    jest.spyOn(window, 'alert').mockImplementation(() => { });
    render(<Form />);
    const inputValue = 'Test';

    const input = screen.getByLabelText('Input Field') as HTMLInputElement;
    fireEvent.change(input, { target: { value: inputValue } });

    const submitButton = screen.getByRole('button', { name: 'Submit' });
    fireEvent.click(submitButton);

    expect(window.alert).toHaveBeenCalledWith(`Form submitted with value: ${inputValue}`);
    expect(input.value).toBe('');
  });
});
