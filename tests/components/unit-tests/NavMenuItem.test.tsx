import React from 'react';
import { render, screen } from '@testing-library/react';
import { 
  NavMenuItem,
  NavMenuItemProps,
} from '../../../components/NavMenu/subcomponents/NavMenuItem';

describe('NavMenuItem Component', () => {
  test('renders without crashing, with the correct text and href attribute', () => {
    // Arrange
    const navMenuItemData: NavMenuItemProps = {
      text: 'navMenuItem text test',
      href: '/navMenuItem-href-test',
    };

    render(
      <NavMenuItem {...navMenuItemData} />
    );

    // Assert
    expect(screen.getByText(navMenuItemData.text)).toHaveAttribute('href', navMenuItemData.href);
  });
});
