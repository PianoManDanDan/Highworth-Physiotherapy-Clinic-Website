import { StoryObj, Meta } from '@storybook/react';
import { ThemeProvider } from 'next-themes';
import { Header } from 'components/Header';

export default { component: Header } as Meta;

export const header: StoryObj<typeof Header> = {
  render: () => (
    <ThemeProvider disableTransitionOnChange>
      <Header />
    </ThemeProvider>
  ),
  parameters: {
    controls: { hideNoControlsWarning: true },
  }
};
