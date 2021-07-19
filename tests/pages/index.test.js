/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import Home from '../../pages/index';

describe('Home Page', () => {
  it('should render the Hero component', () => {
    render(<Home />);
    const heroElement = screen.getByTestId('hero');
    expect(heroElement).toBeInTheDocument();
  });

  it('should render the Services component', () => {
    render(<Home />);
    const servicesElement = screen.getByTestId('services');
    expect(servicesElement).toBeInTheDocument();
  });

  it('should render the Tech component', () => {
    render(<Home />);
    const techElement = screen.getByTestId('tech');
    expect(techElement).toBeInTheDocument();
  });

  it('should render the Team component', () => {
    render(<Home />);
    const teamElement = screen.getByTestId('team');
    expect(teamElement).toBeInTheDocument();
  });

  it('should render the Testimonials component', () => {
    render(<Home />);
    const testimonialsElement = screen.getByTestId('testimonials');
    expect(testimonialsElement).toBeInTheDocument();
  });

  it('should render the Pricing component', () => {
    render(<Home />);
    const pricingElement = screen.getByTestId('pricing');
    expect(pricingElement).toBeInTheDocument();
  });

  it('should render the Contact component', () => {
    render(<Home />);
    const contactElement = screen.getByTestId('contact');
    expect(contactElement).toBeInTheDocument();
  });

  it('should render the Footer component', () => {
    render(<Home />);
    const footerElement = screen.getByTestId('footer');
    expect(footerElement).toBeInTheDocument();
  });

  it('should render the Navbar component', () => {
    render(<Home />);
    const navbarElement = screen.getByTestId('navbar');
    expect(navbarElement).toBeInTheDocument();
  });
});
