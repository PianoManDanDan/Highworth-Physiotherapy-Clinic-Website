import React from 'react';
import { text } from '@storybook/addon-knobs';
import { Navbar, NavbarProps } from '../src';

const getNavbarProps = (): NavbarProps => ({
	links: [
		{
			text: text('Link 1 text', 'Link 1 text'),
			href: '/',
		},
		{
			text: text('Link 2 text', 'Link 2 text'),
			href: '/',
		},
		{
			text: text('Link 3 text', 'Link 3 text'),
			href: '/',
		},
	],
});

export default {
	title: 'Navbar',
	component: Navbar,
};

export const Story = () => {
	return <Navbar {...getNavbarProps()} />;
};
