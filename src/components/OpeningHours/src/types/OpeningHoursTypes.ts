export type DailyOpeningHours = {
	day: string;
	openingTime: string;
	closingTime: string;
};

export type OpeningHoursProps = {
	openingHours: DailyOpeningHours[];
	closedAtWeekend: boolean;
};
