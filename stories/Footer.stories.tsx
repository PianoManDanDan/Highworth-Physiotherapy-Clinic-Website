import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Footer } from '../components/Footer';

export default {
  title: 'Page/Footer',
  component: Footer,
} as Meta;

const Template: Story<{}> = () => <Footer />;

export const footer = Template.bind({});
footer.parameters = {
  controls: { hideNoControlsWarning: true },
};
