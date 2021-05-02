import React from 'react';
import { PageHeading } from '../components/PageHeading/src';
import { PageSubHeading } from '../components/PageSubHeading/src';
import { OpeningHours } from '../components/OpeningHours/src';
import { Map } from '../components/Map/src';
import { openingHoursData } from './data';

export const Contact: React.FC<{}> = () => {
	document.title = 'Contact Us | Highworth Physiotherapy Clinic';
	return (
		<div className="page">
			<div className="page-contact">
				<div className="app-content-container">
					<PageHeading heading="Contact Us" />
					{/* TODO: Add images */}
					<div className="page-content">
						<div className="location">
							<PageSubHeading text="Our Location" />
							We are located at 13 High Street, Highworth, just down from the
							main square, located between the King and Queen pub and the old
							bakery.
							<Map />
						</div>
						<div className="opening-hours-section">
							<PageSubHeading text="Opening Hours" />
							<OpeningHours {...openingHoursData} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
