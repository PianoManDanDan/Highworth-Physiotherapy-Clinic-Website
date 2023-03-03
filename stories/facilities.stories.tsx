import { StoryObj, Meta } from '@storybook/react';
import { Facilities } from 'pages/facilities';

export default { component: Facilities } as Meta;

export const facilities: StoryObj<typeof Facilities> = {
  parameters: {
    controls: { hideNoControlsWarning: true },
  }
};
