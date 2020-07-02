import React from 'react';
import { PageHeading } from '../components/PageHeading/src';

export const Physiotherapy: React.FC<{}> = () => {
	document.title = 'Physiotherapy | Highworth Physiotherapy Clinic';
	return (
		<div className="page-physiotherapy">
			{/* TODO: Add images */}
			<div className="app-content-container">
				<PageHeading heading="Physiotherapy" />
			</div>
		</div>
	);
};
