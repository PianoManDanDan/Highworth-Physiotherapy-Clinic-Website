import React from 'react';
import { PageHeading } from '../components/PageHeading/src';

export const Facilities: React.FC<{}> = () => {
	document.title = 'Our Facilities | Highworth Physiotherapy Clinic';
	return (
		<div className="page-facilities">
			<div className="app-content-container">
				<PageHeading heading="Our Facilities" />
				{/* TODO: Add images */}
				<div>
					We have three fully equipped treatment rooms including one on the
					ground floor for patients unable to use the stairs.
				</div>
				<div>
					For the convenience of our patients, the clinic also has separate
					reception area, waiting room and toilet facilities. We have a small
					kitchen and can provide refreshments for patients if they are
					required. At the front of the clinic there is a small shop stocking
					common rehabilitation items such as: TENS machines; knee, elbow, thumb
					and wrist braces; Orthaheel insoles and wedges; orthopaedic pillows
					and glucosamine. We are also happy to order specialist braces for
					patients if required.
				</div>
				<div>
					Rehabilitation equipment available at the clinic includes: back swing,
					gym balls, Fitter exerciser, wobble boards.
				</div>
				<div>
					{/* TODO: Check and possibly reword */}
					Treatment equipment available includes: ultrasound, laser, megapulse,
					infra-red, interferential. The physiotherapists will use the most
					appropriate equipment for your treatment if they believe it is
					required.
				</div>
				<div>
					We also operate a free loan system for our patients where we will loan
					out equipment such as TENS machines, pillows, seat wedges, wobble
					boards and home traction kits for patients to try before they buy.
				</div>
			</div>
		</div>
	);
};
