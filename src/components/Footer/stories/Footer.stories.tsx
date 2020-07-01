import React from 'react';
import { text } from '@storybook/addon-knobs';
import { Footer, FooterProps } from '../src';

const getFooterProps = (): FooterProps => ({
	insuranceProviders: [
		text('Insurance Provider 1', 'Insurance Provider 1'),
		text('Insurance Provider 2', 'Insurance Provider 2'),
		text('Insurance Provider 3', 'Insurance Provider 3'),
	],
	affiliateLinks: [
		{
			name: text('Affiliate 1', 'Affiliate 1'),
			href: '/',
		},
		{
			name: text('Affiliate 2', 'Affiliate 2'),
			href: '/',
		},
		{
			name: text('Affiliate 3', 'Affiliate 3'),
			href: '/',
		},
	],
});

export default {
	title: 'Footer',
	component: Footer,
};

export const Story = () => {
	return <Footer {...getFooterProps()} />;
};
