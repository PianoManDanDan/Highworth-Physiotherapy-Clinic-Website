import React from 'react';
import { render } from '@testing-library/react';
import { Header } from '../../../components/Header';

describe('Header Component snapshot test', () => {
  test('Header should render the text \'Highworth Physiotherapy Clinic\', the logo, a telephone link and the NavMenu with links to all pages in the app', () => {
    // Arrange
    const { asFragment } = render(
      <Header />
    );

    // Act
    const renderedHeader = asFragment();

    // Assert
    expect(renderedHeader).toMatchSnapshot();
  });
});
