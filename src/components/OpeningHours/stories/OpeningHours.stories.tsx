import React from 'react';
import { text, boolean } from '@storybook/addon-knobs';
import { OpeningHours, OpeningHoursProps } from '../src';

const getOpeningHoursProps = (): OpeningHoursProps => ({
	openingHours: [
		{
			day: text('Day', 'Monday'),
			openingTime: text('Opening Time', '9:00'),
			closingTime: text('Closing Time', '17:00'),
		},
	],
	closedAtWeekend: boolean('Closed at weekends?', true),
});

export default {
	title: 'OpeningHours',
	component: OpeningHours,
};

export const Story = () => {
	return <OpeningHours {...getOpeningHoursProps()} />;
};
