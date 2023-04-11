import { StoryObj, Meta } from '@storybook/react';
import { ImageWithFallback } from 'components/ImageWithFallback';
import { ImageProps } from 'next/image';
import fallbackImage from 'public/assets/people/placeholder.png'

export default { 
  component: ImageWithFallback,
} as Meta;

const sharedProps: Partial<ImageProps> = {
  alt: 'default alt text',
  width: 250,
  height: 250,
};

export const validImageSrc: StoryObj<typeof ImageWithFallback> = {
  args: {
    src: 'https://picsum.photos/250',
    fallbackSrc: fallbackImage,
    ...sharedProps,
  },
};

export const brokenImageSrc: StoryObj<typeof ImageWithFallback> = {
  args: {
    src: 'some-broken-image-src',
    fallbackSrc: fallbackImage,
    ...sharedProps,
  },
};
