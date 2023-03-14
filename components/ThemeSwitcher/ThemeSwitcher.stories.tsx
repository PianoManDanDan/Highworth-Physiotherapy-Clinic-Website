import { StoryObj, Meta } from '@storybook/react';
import { ThemeSwitcher } from 'components/ThemeSwitcher';

export default { component: ThemeSwitcher } as Meta;

export const themeSwitcher: StoryObj<typeof ThemeSwitcher> = {
  parameters: {
    controls: { hideNoControlsWarning: true },
  }
};
