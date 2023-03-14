import { fireEvent, render, screen } from '@testing-library/react';
import { ThemeSwitcher } from 'components/ThemeSwitcher';

const mockSunIcon = jest.fn(() => <svg data-testid='mockSunIcon' />);
const mockMoonIcon = jest.fn(() => <svg data-testid='mockMoonIcon' />);
jest.mock('react-feather', () => ({
  __esModule: true,
  Sun: () => mockSunIcon(),
  Moon: () => mockMoonIcon(),
}));

const mockSetTheme = jest.fn();
const mockUseTheme = jest.fn(() => ({resolvedTheme: 'light', setTheme: () => mockSetTheme()}));
jest.mock('next-themes', () => ({
  useTheme: () => mockUseTheme(),
}));

describe('ThemeSwitcher Component', () => {
  test('renders without crashing', () => {
    render(<ThemeSwitcher />);

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(mockSetTheme).not.toHaveBeenCalled();
  });

  test('changes theme when clicked', () => {
    render(<ThemeSwitcher />);

    const themeSwitcher = screen.getByRole('button');
    fireEvent.click(themeSwitcher);

    expect(mockSetTheme).toHaveBeenCalled();
  });
});
