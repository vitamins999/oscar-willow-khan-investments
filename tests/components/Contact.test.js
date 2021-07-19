/**
 * @jest-environment jsdom
 */

import { render, screen, fireEvent } from '@testing-library/react';
import Contact from '../../components/Contact';

const changeInputBoxValue = (placeholderText, newValue) => {
  const inputElement = screen.getByPlaceholderText(placeholderText);
  fireEvent.change(inputElement, {
    target: {
      value: newValue,
    },
  });

  return inputElement;
};

describe('Contact Component', () => {
  it('should be able to type in name input', () => {
    render(<Contact />);
    const inputElement = changeInputBoxValue('Name', 'Jim Morrison');
    expect(inputElement.value).toBe('Jim Morrison');
  });

  it('should be able to type in email input', () => {
    render(<Contact />);
    const inputElement = changeInputBoxValue('Email', 'jmorrison@example.com');
    expect(inputElement.value).toBe('jmorrison@example.com');
  });

  it('should be able to type in message input', () => {
    render(<Contact />);
    const inputElement = changeInputBoxValue(
      'Message',
      'Come on baby, light my fire'
    );
    expect(inputElement.value).toBe('Come on baby, light my fire');
  });

  it('should render form successfully submitted text on submit', async () => {
    render(<Contact />);
    changeInputBoxValue('Name', 'Jim Morrison');
    changeInputBoxValue('Email', 'jmorrison@example.com');
    changeInputBoxValue('Message', 'Come on baby, light my fire');
    const buttonElement = screen.getByRole('button', {
      name: /Send/i,
    });
    fireEvent.click(buttonElement);
    const successText = await screen.findByTestId('form-submit-message');
    expect(successText.textContent).toBe(
      "Thanks, Jim Morrison. We'll be in touch!"
    );
  });

  it('should have empty name input after button is clicked', async () => {
    render(<Contact />);
    changeInputBoxValue('Name', 'Jim Morrison');
    changeInputBoxValue('Email', 'jmorrison@example.com');
    changeInputBoxValue('Message', 'Come on baby, light my fire');
    const buttonElement = screen.getByRole('button', {
      name: /Send/i,
    });
    fireEvent.click(buttonElement);

    const inputElement = await screen.findByPlaceholderText(/Name/i);

    expect(inputElement.value).toBe('');
  });

  it('should have empty email input after button is clicked', async () => {
    render(<Contact />);
    changeInputBoxValue('Name', 'Jim Morrison');
    changeInputBoxValue('Email', 'jmorrison@example.com');
    changeInputBoxValue('Message', 'Come on baby, light my fire');
    const buttonElement = screen.getByRole('button', {
      name: /Send/i,
    });
    fireEvent.click(buttonElement);

    const inputElement = await screen.findByPlaceholderText(/Email/i);

    expect(inputElement.value).toBe('');
  });

  it('should have empty message input after button is clicked', async () => {
    render(<Contact />);
    changeInputBoxValue('Name', 'Jim Morrison');
    changeInputBoxValue('Email', 'jmorrison@example.com');
    changeInputBoxValue('Message', 'Come on baby, light my fire');
    const buttonElement = screen.getByRole('button', {
      name: /Send/i,
    });
    fireEvent.click(buttonElement);

    const inputElement = await screen.findByPlaceholderText(/Message/i);

    expect(inputElement.value).toBe('');
  });

  it('should not submit form if fields are empty', async () => {
    render(<Contact />);
    changeInputBoxValue('Name', '');
    changeInputBoxValue('Email', '');
    changeInputBoxValue('Message', '');
    const buttonElement = screen.getByRole('button', {
      name: /Send/i,
    });
    fireEvent.click(buttonElement);
    const successText = await screen.findByTestId('form-submit-message');
    expect(successText.textContent).toBe(
      'All queries responded to within 24 hours.'
    );
  });
});
