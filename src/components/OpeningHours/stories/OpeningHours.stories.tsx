import React from 'react';
import { OpeningHours, OpeningHoursProps } from '../src';

export default {
	title: 'OpeningHours',
	component: OpeningHours,
};

export const Story = (args: OpeningHoursProps) => {
	return <OpeningHours {...args} />;
};
Story.args = {
	openingHours: [
		{
			day: 'Monday',
			openingTime: '9:00',
			closingTime: '17:00',
		},
	],
	closedAtWeekend: true,
};
