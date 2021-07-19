/**
 * @jest-environment jsdom
 */

import { render, screen, fireEvent } from '@testing-library/react';
import Tech from '../../components/Tech';

const clickStepButton = (stepNum) => {
  const buttonElement = screen.getByRole('button', {
    name: `STEP ${stepNum}`,
  });
  fireEvent.click(buttonElement);
};

describe('Tech Component', () => {
  it('should render Step 1 on initial render', () => {
    render(<Tech />);
    const headingElement = screen.getByRole('heading', {
      name: /STEP 1: Web Scraping/i,
    });
    expect(headingElement).toBeInTheDocument();
  });

  it('should render Step 2 on button click', () => {
    render(<Tech />);
    clickStepButton(2);

    const headingElement = screen.getByRole('heading', {
      name: /STEP 2: Modeling/i,
    });
    expect(headingElement).toBeInTheDocument();
  });

  it('should render Step 3 on button click', () => {
    render(<Tech />);
    clickStepButton(3);

    const headingElement = screen.getByRole('heading', {
      name: /STEP 3: AI Data Analysis/i,
    });
    expect(headingElement).toBeInTheDocument();
  });

  it('should render Step 4 on button click', () => {
    render(<Tech />);
    clickStepButton(4);

    const headingElement = screen.getByRole('heading', {
      name: /STEP 4: Re-invest or Cash Out/i,
    });
    expect(headingElement).toBeInTheDocument();
  });

  it('should re-render Step 1 on button click after clicking another step button', () => {
    render(<Tech />);
    clickStepButton(2);
    clickStepButton(1);

    const headingElement = screen.getByRole('heading', {
      name: /STEP 1: Web Scraping/i,
    });
    expect(headingElement).toBeInTheDocument();
  });
});
