import { StoryObj, Meta } from '@storybook/react';
import { NavMenuItem } from '../components/NavMenu/subcomponents/NavMenuItem';

export default { component: NavMenuItem } as Meta;

export const navMenuItem: StoryObj<typeof NavMenuItem> = {
  args: {
    text: 'Nav Menu Item',
    href: '/test-href',
  },
};
