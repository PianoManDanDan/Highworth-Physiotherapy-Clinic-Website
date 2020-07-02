import React from 'react';
import { PageHeading } from '../components/PageHeading/src';
import { PageSubHeading } from '../components/PageSubHeading/src';

export const Contact: React.FC<{}> = () => {
	document.title = 'Contact Us | Highworth Physiotherapy Clinic';
	return (
		<div className="page-contact">
			<div className="app-content-container">
				<PageHeading heading="Contact Us" />
				{/* TODO: Add images */}
				<div className="location">
					<PageSubHeading text="Our Location" />
					We are located at 13 High Street, Highworth, just down from the main
					square, located between the King and Queen pub and the old bakery.
					<div className="location__map">
						<iframe
							title="Map to Highworth Physiotherapy Clinic"
							// eslint-disable-next-line max-len
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d619.1503644021743!2d-1.710772826512844!3d51.630509387569745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487148625caf79a5%3A0xfd8b60c3a023fce!2sHighworth%20Physiotherapy%20Clinic!5e0!3m2!1sen!2suk!4v1593645052277!5m2!1sen!2suk"
							allowFullScreen
							frameBorder={0}
							aria-hidden={false}
							tabIndex={0}
						/>
					</div>
				</div>
				<div className="opening-hours">
					<PageSubHeading text="Opening Hours" />
					<div className="opening-hours__table">
						<div className="row">
							<div className="col-sm-6">Monday</div>
							<div className="col-sm-6">9:00 - 17:00</div>
						</div>
						<div className="row">
							<div className="col-sm-6">Tuesday</div>
							<div className="col-sm-6">9:00 - 16:00</div>
						</div>
						<div className="row">
							<div className="col-sm-6">Wednesday</div>
							<div className="col-sm-6">9:00 - 15:00</div>
						</div>
						<div className="row">
							<div className="col-sm-6">Thursday</div>
							<div className="col-sm-6">9:00 - 16:30</div>
						</div>
						<div className="row">
							<div className="col-sm-6">Friday</div>
							<div className="col-sm-6">9:00 - 16:00</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
