import React from 'react';
import { Navbar, NavbarProps } from '../src';

export default {
	title: 'Navbar',
	component: Navbar,
};

export const Story = (args: NavbarProps) => {
	return <Navbar {...args} />;
};
Story.args = {
	links: [
		{
			text: 'Link 1 text',
			href: '/',
		},
		{
			text: 'Link 2 text',
			href: '/',
		},
		{
			text: 'Link 3 text',
			href: '/',
		},
	],
};

// TODO: Move Navbar story to be subcomponent of Header component
// TODO: Disable editing of href
