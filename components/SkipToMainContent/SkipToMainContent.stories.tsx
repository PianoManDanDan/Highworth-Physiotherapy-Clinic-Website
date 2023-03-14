import { StoryObj, Meta } from '@storybook/react';
import { SkipToMainContent } from 'components/SkipToMainContent';

export default { component: SkipToMainContent } as Meta;

export const skipToMainContent: StoryObj<typeof SkipToMainContent> = {
  render: () => (
    <>
      <SkipToMainContent />
      <p>Press 'Tab' to focus the skip link component</p>
      <div id='main-content' />
    </>
  ),
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};
