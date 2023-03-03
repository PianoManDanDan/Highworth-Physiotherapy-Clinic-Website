import { StoryObj, Meta } from '@storybook/react';
import { HomePage } from 'pages/index';

export default { component: HomePage } as Meta;

export const homepage: StoryObj<typeof HomePage> = {
  parameters: {
    controls: { hideNoControlsWarning: true },
  }
};
