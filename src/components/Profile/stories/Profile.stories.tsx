import React from 'react';
import { Profile, ProfileProps } from '../src';

export default {
	title: 'Profile',
	component: Profile,
};

export const Story = (args: ProfileProps) => {
	return <Profile {...args} />;
};
Story.args = {
	name: 'John Doe',
	image: {
		src: '',
		altText: 'image alt text',
	},
	bio: [
		'This is a biography',
		'You can create a new paragraph by typing a comma',
	],
	qualification: 'BSc',
	yearQualified: 1995,
	specialities: ['Physiotherapy'],
};

// TODO: Disable editing of image src
