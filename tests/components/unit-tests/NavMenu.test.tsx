import { render, screen } from '@testing-library/react';
import { NavMenu } from '../../../components/NavMenu';

describe('NavMenu Component', () => {
  describe('When passed a single child element', () => {
    test('it renders the child element', () => {
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
  describe('When passed multiple children', () => {
    test('it renders the children', () => {
      // Arrange
      render(
        <NavMenu>
          <p>Child element</p>
          <p>Another child element</p>
        </NavMenu>
      );

      // Assert
      expect(screen.getByRole('navigation')).not.toBeEmptyDOMElement();
      expect(screen.getAllByText('child element', {exact: false})).toHaveLength(2);
    });
  });
});
