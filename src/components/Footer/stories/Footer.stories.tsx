import React from 'react';
import { Footer, FooterProps } from '../src';

export default {
	title: 'Footer',
	component: Footer,
};

export const Story = (args: FooterProps) => {
	return <Footer {...args} />;
};
Story.args = {
	regulatoryBodyLinks: [
		{
			name: 'Affiliate 1',
			href: '/',
		},
		{
			name: 'Affiliate 2',
			href: '/',
		},
		{
			name: 'Affiliate 3',
			href: '/',
		},
	],
};
