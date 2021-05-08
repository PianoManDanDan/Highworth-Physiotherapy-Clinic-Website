import React from 'react';
import { Story, Meta } from '@storybook/react';
import {
  NavMenuItem,
  NavMenuItemProps,
} from '../components/NavMenu/subcomponents/NavMenuItem';

export default {
  title: 'Page/Nav Menu/Nav Menu Item',
  component: NavMenuItem,
} as Meta;

const Template: Story<NavMenuItemProps> = (args) => <NavMenuItem {...args} />;

export const navMenuItem = Template.bind({});
navMenuItem.args = {
  text: 'Nav Menu Item',
  href: '/test-href',
};
