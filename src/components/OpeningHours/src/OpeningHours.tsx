import React from 'react';
import { OpeningHoursProps } from './types';
import './OpeningHours.scss';

export const OpeningHours: React.FC<OpeningHoursProps> = ({
	openingHours,
	closedAtWeekend,
}) => {
	return (
		<div className="opening-hours">
			<div className="opening-hours__table">
				{openingHours.map((dailyHours) => (
					<div className="row" key={dailyHours.day}>
						<div className="col-sm-6">{dailyHours.day}</div>
						<div className="col-sm-6">
							{dailyHours.openingTime} - {dailyHours.closingTime}
						</div>
					</div>
				))}
			</div>
			{closedAtWeekend ? (
				<div className="weekend">
					<div className="row">
						<div className="col-sm-6">Saturday</div>
						<div className="col-sm-6">Closed</div>
					</div>
					<div className="row">
						<div className="col-sm-6">Sunday</div>
						<div className="col-sm-6">Closed</div>
					</div>
				</div>
			) : null}
		</div>
	);
};
