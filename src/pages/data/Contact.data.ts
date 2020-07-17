import {
	OpeningHoursProps,
	DailyOpeningHours,
} from '../../components/OpeningHours/src';

const openingHours: DailyOpeningHours[] = [
	{
		day: 'Monday',
		openingTime: '9:00',
		closingTime: '17:00',
	},
	{
		day: 'Tuesday',
		openingTime: '9:00',
		closingTime: '16:00',
	},
	{
		day: 'Wednesday',
		openingTime: '9:00',
		closingTime: '15:00',
	},
	{
		day: 'Thursday',
		openingTime: '9:00',
		closingTime: '16:30',
	},
	{
		day: 'Friday',
		openingTime: '9:00',
		closingTime: '16:00',
	},
];

export const openingHoursData: OpeningHoursProps = {
	openingHours,
	closedAtWeekend: true,
};
