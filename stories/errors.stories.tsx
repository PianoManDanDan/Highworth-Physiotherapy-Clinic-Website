import { StoryObj, Meta } from '@storybook/react';
import { PageNotFound } from 'pages/404';

export default { component: PageNotFound, title: "Error" } as Meta;

export const _404: StoryObj<typeof PageNotFound> = {
  parameters: {
    controls: { hideNoControlsWarning: true },
  }
};
