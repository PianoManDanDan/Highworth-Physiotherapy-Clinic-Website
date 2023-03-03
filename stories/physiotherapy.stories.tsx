import { StoryObj, Meta } from '@storybook/react';
import { Physiotherapy } from 'pages/physiotherapy';

export default { component: Physiotherapy } as Meta;

export const physiotherapy: StoryObj<typeof Physiotherapy> = {
  parameters: {
    controls: { hideNoControlsWarning: true },
  }
};
