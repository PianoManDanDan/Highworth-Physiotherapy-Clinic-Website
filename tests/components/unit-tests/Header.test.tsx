import { render, screen } from '@testing-library/react';
import { Header } from '../../../components/Header';

const mockNavMenu = jest.fn(() => <div data-testid='mockNavMenu' />);
const mockNavMenuItem = jest.fn(() => <div data-testid="mockNavMenuItem" />);

jest.mock('../../../components/NavMenu', () => ({
  __esModule: true,
  NavMenu: () => mockNavMenu(),
  NavMenuItem: () => mockNavMenuItem(),
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
