import React from 'react';
import { render } from '@testing-library/react';
import { NavMenu, NavMenuItem } from '../../../components/NavMenu';

describe('NavMenu Component snapshot test', () => {
  describe('When passed NavMenuItem components as children', () => {
    test('it renders the NavMenu element with all of its\' children', () => {
      // Arrange
      const { asFragment } = render(
        <NavMenu>
          <NavMenuItem text='Child NavMenuItem 1' href='/child-1-href' />
          <NavMenuItem text='Child NavMenuItem 2' href='/child-2-href' />
          <NavMenuItem text='Child NavMenuItem 3' href='/child-3-href' />
        </NavMenu>
      );

      // Act
      const renderedNavMenu = asFragment();

      // Assert
      expect(renderedNavMenu).toMatchSnapshot();
    });
  });
  describe('When passed ordinary html elements as children', () => {
    test('it renders the NavMenu element with all of its\' children', () => {
      // Arrange
      const { asFragment } = render(
        <NavMenu>
          <p>Child 1</p>
          <div>Child 2</div>
          <p>Child 3</p>
        </NavMenu>
      );
  
      // Act
      const renderedNavMenu = asFragment();
  
      // Assert
      expect(renderedNavMenu).toMatchSnapshot();
    });
  });
});
