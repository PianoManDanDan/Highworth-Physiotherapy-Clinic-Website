import React from 'react';
import { text, number, array } from '@storybook/addon-knobs';
import { Profile, ProfileProps } from '../src';

const getProfileProps = (): ProfileProps => ({
	name: text('Name', 'John Doe'),
	image: {
		src: '',
		altText: text('Image Alt text', 'image alt'),
	},
	bio: array(
		'Biography',
		['This is a biography', 'You can create a new paragraph by typing a comma'],
		','
	),
	qualification: text('Qualification', 'BSc'),
	yearQualified: number('Year Qualified', 1995),
	specialities: array('Specialities', ['Physiotherapy'], ','),
});
export default {
	title: 'Profile',
	component: Profile,
};

export const Story = () => {
	return <Profile {...getProfileProps()} />;
};
