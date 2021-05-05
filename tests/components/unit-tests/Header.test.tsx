import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from '../../../components/Header';

const mockNavMenu = jest.fn(() => <div data-testid='mockNavMenu' />);
jest.mock('../../../components/NavMenu', () => ({
  __esModule: true,
  NavMenu: () => mockNavMenu(),
}));
const mockNextImage = jest.fn(({ src, alt }) => <img src={src} alt={alt} data-testid='mockNextImage' />);
jest.mock('next/image', () => ({
  __esModule: true,
  default: (args) => mockNextImage(args),
}));

describe('Header Component unit test', () => {
  test('renders correctly with an image, Heading, telephone link and NavMenu', () => {
    // Arrange
    render(
      <Header />
    );

    // Assert
    expect(screen.getByAltText('Highworth Physiotherapy Clinic')).toBeInTheDocument();
    expect(screen.getByRole('heading', {name: 'Highworth Physiotherapy Clinic'})).toBeInTheDocument();
    expect(screen.getByRole('link', {name: '01793 763814'})).toHaveAttribute('href', 'tel:+441793763814');
    expect(screen.getByTestId('mockNavMenu')).toBeInTheDocument();
  });
});
