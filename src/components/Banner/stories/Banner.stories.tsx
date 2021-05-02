import React from 'react';
import { Banner, BannerProps } from '../src';

export default {
	title: 'Banner',
	component: Banner,
};

export const Story = (args: BannerProps) => {
	return <Banner {...args} />;
};
Story.args = {
	name: 'Highworth Physiotherapy Clinic',
	address: '13 High Street, Highworth, Swindon, SN6 7AG',
	telephone: {
		text: '01793 763814',
		href: '/',
	},
	navbarLinks: {
		links: [
			{
				text: 'Navbar Link 1',
				href: '/',
			},
			{
				text: 'Navbar Link 2',
				href: '/',
			},
			{
				text: 'Navbar Link 3',
				href: '/',
			},
		],
	},
};
