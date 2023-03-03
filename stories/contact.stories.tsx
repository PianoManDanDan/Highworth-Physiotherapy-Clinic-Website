import { StoryObj, Meta } from '@storybook/react';
import { ContactUs } from 'pages/contact';

export default { component: ContactUs } as Meta;

export const contact: StoryObj<typeof ContactUs> = {
  parameters: {
    controls: { hideNoControlsWarning: true },
  }
};
