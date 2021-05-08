import React from 'react';
import { Story, Meta } from '@storybook/react';
import { NavMenu, NavMenuItem } from '../components/NavMenu';

export default {
  title: 'Page/Nav Menu',
  component: NavMenu,
  subcomponents: { NavMenuItem }
} as Meta;

const Template: Story<{}> = () => (
  <NavMenu>
    <a>Nav Menu Item 1</a>
    <a>Nav Menu Item 2</a>
    <a>Nav Menu Item 3</a>
  </NavMenu>
);

export const navMenu = Template.bind({});
navMenu.parameters = {
  controls: { hideNoControlsWarning: true },
};
