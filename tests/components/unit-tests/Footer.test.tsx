import React from 'react';
import { render, screen } from '@testing-library/react';
import { Footer } from '../../../components/Footer';

const mockNextImage = jest.fn(() => <img data-testid='mockNextImage' />);
jest.mock('next/image', () => ({
  __esModule: true,
  default: () => mockNextImage(),
}));

describe('Footer Component', () => {
  test('renders the social media links correctly', () => {
    // Arrange
    render(
      <Footer />
    );

    // Assert
    expect(screen.getByText(/Facebook/)).toBeInTheDocument();
    expect(mockNextImage).toHaveBeenCalledTimes(1);
  });
  test.each`
    bodyAbbreviation | bodyName
    ${'CSP'}         | ${'Chartered Society of Physiotherapists'}
    ${'HCPC'}        | ${'Health and Care Professions Council'}
    ${'AACP'}        | ${'Acupuncture Association of Chartered Physiotherapists'}
    ${'ACPAT'}       | ${'Association of Chartered Physiotherapists in Animal Therapy'}
    ${'RAMP'}        | ${'Register of Animal Musculoskeletal Practitioners'}
  `('shows the full name of $bodyAbbreviation as $bodyName', ({bodyAbbreviation, bodyName}) => {
    // Arrange
    render(
      <Footer />
    );

    // Assert
    expect(screen.getByText(bodyAbbreviation)).toHaveAttribute('title', bodyName);
  });
});
