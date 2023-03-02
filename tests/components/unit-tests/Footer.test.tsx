import { render, screen } from '@testing-library/react';
import { Footer } from '../../../components/Footer';

const mockFacebookIcon = jest.fn(() => <svg data-testid='mockFacebookIcon' />);
jest.mock('react-feather', () => ({
  __esModule: true,
  Facebook: () => mockFacebookIcon(),
}));

describe('Footer Component', () => {
  test('renders the social media links correctly', () => {
    // Arrange
    render(
      <Footer />
    );

    // Assert
    expect(screen.getByText(/Social Media/)).toBeInTheDocument();
    expect(mockFacebookIcon).toHaveBeenCalledTimes(1);
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
