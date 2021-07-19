/**
 * @jest-environment jsdom
 */

import { render, screen, fireEvent } from '@testing-library/react';
import Pricing from '../../components/Pricing';

describe('Pricing Component', () => {
  it('should change prices to annual prices', () => {
    render(<Pricing />);
    const buttonElement = screen.getByRole('button', { name: /Annually/i });
    fireEvent.click(buttonElement);

    const spanElement = screen.getAllByTestId('span-yearly');
    expect(spanElement.length).toBe(3);
  });

  it('should change prices to back monthly prices after selecting annual prices', () => {
    render(<Pricing />);
    const buttonElementAnnual = screen.getByRole('button', {
      name: /Annually/i,
    });
    fireEvent.click(buttonElementAnnual);

    const buttonElementMonthly = screen.getByRole('button', {
      name: /Monthly/i,
    });
    fireEvent.click(buttonElementMonthly);

    const spanElement = screen.getAllByTestId('span-monthly');
    expect(spanElement.length).toBe(3);
  });
});
