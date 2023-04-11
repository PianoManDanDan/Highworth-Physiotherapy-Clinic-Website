import { StoryObj, Meta } from '@storybook/react';
import { Map } from 'components/Map';

export default { component: Map } as Meta;

export const map: StoryObj<typeof Map> = {
  parameters: {
    controls: { hideNoControlsWarning: true },
  }
};
