import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import { NavMenu, NavMenuItem } from '../components/NavMenu';

export default {
  component: NavMenu,
  subcomponents: { NavMenuItem }
} as Meta;

export const navMenu: StoryObj<typeof NavMenu> = {
  render: () => (
    <NavMenu>
      <a>Nav Menu Item 1</a>
      <a>Nav Menu Item 2</a>
      <a>Nav Menu Item 3</a>
    </NavMenu>
  ),
  parameters: {
    controls: { hideNoControlsWarning: true },
  }
}
