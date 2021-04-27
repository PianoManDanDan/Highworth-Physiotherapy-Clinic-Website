import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Header } from '../components/Header';

export default {
  title: 'Page/Header',
  component: Header,
} as Meta;

const Template: Story<{}> = () => <Header />;

export const header = Template.bind({});
header.parameters = {
  controls: { hideNoControlsWarning: true },
};
