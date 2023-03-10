import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import { NavMenu, NavMenuItem } from 'components/NavMenu';

export default {
  component: NavMenu,
  subcomponents: { NavMenuItem }
} as Meta;

export const desktopView: StoryObj<typeof NavMenu> = {
  render: () => (
    <NavMenu>
      <NavMenuItem text='Test 1' href='/test-1' />
      <NavMenuItem text='Test 2' href='/test-2' />
      <NavMenuItem text='Test 3' href='/test-3' />
    </NavMenu>
  ),
}

export const mobileView: StoryObj<typeof NavMenu> = {
  render: () => (
    <NavMenu>
      <NavMenuItem text='Test 1' href='/test-1' />
      <NavMenuItem text='Test 2' href='/test-2' />
      <NavMenuItem text='Test 3' href='/test-3' />
    </NavMenu>
  ),
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
}
