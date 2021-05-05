import React from 'react';
import { render } from '@testing-library/react';
import { Footer } from '../../../components/Footer';

describe('Footer Component snapshot test', () => {
  test('it renders all of the social media links and regulatory bodies correctly', () => {
    // Arrange
    const { asFragment } = render(
      <Footer />
    );

    // Act
    const renderedFooter = asFragment();

    // Assert
    expect(renderedFooter).toMatchSnapshot();
  });
});
