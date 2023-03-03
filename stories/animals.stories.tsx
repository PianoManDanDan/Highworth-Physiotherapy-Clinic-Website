import { StoryObj, Meta } from '@storybook/react';
import { Animals } from 'pages/animals';

export default { component: Animals } as Meta;

export const animals: StoryObj<typeof Animals> = {
  parameters: {
    controls: { hideNoControlsWarning: true },
  }
};
