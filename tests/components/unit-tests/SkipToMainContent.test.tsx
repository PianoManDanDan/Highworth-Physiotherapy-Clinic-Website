import { render, screen } from '@testing-library/react';
import { SkipToMainContent } from 'components/SkipToMainContent';

describe('SkipToMainContent Component', () => {
  test('renders without crashing', () => {
    render(<SkipToMainContent />);

    expect(screen.getByText('Skip to main content')).toBeInTheDocument();
  });
});
