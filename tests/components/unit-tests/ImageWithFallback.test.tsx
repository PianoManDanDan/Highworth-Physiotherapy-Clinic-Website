import { render, screen, fireEvent } from '@testing-library/react';
import { ImageWithFallback, ImageWithFallbackProps } from 'components/ImageWithFallback';

describe('ImageWithFallback Component', () => {
  let testProps: ImageWithFallbackProps;
  beforeAll(() => {
    testProps = {
      src: '/valid-url',
      fallbackSrc: '/fallback-url',
      width: 100,
      height: 100,
      alt: 'test alt text',
    };
  });

  describe('When the image src is valid', () => {
    test('then the original image src is used', () => {
      render(
        <ImageWithFallback {...testProps} />
      );

      // next/image adds it's own prefix around provided URL hence stringContaining
      // next/image URL encodes '/' to %2F, hence slicing off the first character
      expect(screen.getByAltText(testProps.alt))
        .toHaveAttribute('src', expect.stringContaining(testProps.src.toString().slice(1)));
    });
  });

  describe('When the image src is invalid', () => {
    test('then the fallback image src is used', () => {
      render(
        <ImageWithFallback {...testProps} />
      );
      
      const imageElement = screen.getByAltText(testProps.alt);

      fireEvent.error(imageElement);

      // next/image adds it's own prefix around provided URL hence stringContaining
      // next/image URL encodes '/' to %2F, hence slicing off the first character
      expect(imageElement)
        .toHaveAttribute('src', expect.stringContaining(testProps.fallbackSrc.toString().slice(1)));
    });
  });
});
