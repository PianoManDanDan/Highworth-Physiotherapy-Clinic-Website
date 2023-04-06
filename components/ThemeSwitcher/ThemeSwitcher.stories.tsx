import { StoryObj, Meta } from '@storybook/react';
import { ThemeProvider } from 'next-themes';
import { ThemeSwitcher } from 'components/ThemeSwitcher';

export default { component: ThemeSwitcher } as Meta;

export const themeSwitcher: StoryObj<typeof ThemeSwitcher> = {
  render: () => (
    <ThemeProvider disableTransitionOnChange>
      <ThemeSwitcher />
    </ThemeProvider>
  ),
  parameters: {
    controls: { hideNoControlsWarning: true },
  }
};
