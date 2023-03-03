import { StoryObj, Meta } from '@storybook/react';
import { Faq } from 'pages/faq';

export default { component: Faq } as Meta;

export const FAQ: StoryObj<typeof Faq> = {
  parameters: {
    controls: { hideNoControlsWarning: true },
  }
};
