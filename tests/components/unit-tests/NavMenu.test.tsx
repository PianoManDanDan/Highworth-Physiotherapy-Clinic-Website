import React from 'react';
import { render, screen } from '@testing-library/react';
import { NavMenu } from '../../../components/NavMenu';

describe('NavMenu Component', () => {
  describe('When passed children', () => {
    test('it renders the children', () => {
      // Arrange
      render(
        <NavMenu>
          <p>Child element</p>
        </NavMenu>
      );

      // Assert
      expect(screen.getByRole('navigation')).not.toBeEmptyDOMElement();
      expect(screen.getByText('Child element')).toBeInTheDocument();
    });
  });
  describe('When passed no children', () => {
    test('it renders an empty nav block', () => {
      // Arrange
      render(
        <NavMenu />
      );

      // Assert
      expect(screen.getByRole('navigation')).toBeEmptyDOMElement();
    });
  });
});
