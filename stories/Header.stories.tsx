import { StoryObj, Meta } from '@storybook/react';
import { Header } from '../components/Header';

export default { component: Header } as Meta;

export const header: StoryObj<typeof Header> = {
  parameters: {
    controls: { hideNoControlsWarning: true },
  }
};
