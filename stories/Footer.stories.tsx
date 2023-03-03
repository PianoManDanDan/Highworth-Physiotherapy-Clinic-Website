import { StoryObj, Meta } from '@storybook/react';
import { Footer } from '../components/Footer';

export default { component: Footer } as Meta;

export const footer: StoryObj<typeof Footer> = {
  parameters: {
    controls: { hideNoControlsWarning: true },
  }
};
