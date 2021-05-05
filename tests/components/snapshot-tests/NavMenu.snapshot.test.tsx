import React from 'react';
import { render } from '@testing-library/react';
import { NavMenu } from '../../../components/NavMenu';

describe('NavMenu Component snapshot test', () => {
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
