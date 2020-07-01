import React from 'react';
import { text } from '@storybook/addon-knobs';
import { Banner, BannerProps } from '../src';

const getBannerProps = (): BannerProps => ({
	name: text('Company Name', 'Highworth Physiotherapy Clinic'),
	address: text(
		'Company Address',
		'13 High Street, Highworth, Swindon, SN6 7AG'
	),
	telephone: {
		text: text('Telephone Number', '01793 763814'),
		href: '/',
	},
	navbarLinks: {
		links: [
			{
				text: text('Navbar Link 1', 'Navbar Link 1'),
				href: '/',
			},
			{
				text: text('Navbar Link 2', 'Navbar Link 2'),
				href: '/',
			},
			{
				text: text('Navbar Link 3', 'Navbar Link 3'),
				href: '/',
			},
		],
	},
});

export default {
	title: 'Banner',
	component: Banner,
};

export const Story = () => {
	return <Banner {...getBannerProps()} />;
};
