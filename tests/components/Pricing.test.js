/**
 * @jest-environment jsdom
 */

import { render, screen, fireEvent } from '@testing-library/react';
import Pricing from '../../components/Pricing';

describe('Pricing Component', () => {
  it('should change prices to annual prices on click of annual prices button', () => {
    render(<Pricing />);
    const buttonElement = screen.getByRole('button', { name: /Annually/i });
    fireEvent.click(buttonElement);

    const spanElement = screen.getAllByTestId('span-yearly');
    expect(spanElement.length).toBe(3);
  });

  it('should change prices back to monthly prices when annual prices button is clicked and then monthly prices button is clicked', () => {
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
