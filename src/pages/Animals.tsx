import React from 'react';
import { PageHeading } from '../components/PageHeading/src';

export const Animals: React.FC<{}> = () => {
	document.title = 'Animals | Highworth Physiotherapy Clinic';
	return (
		<div className="page-animals">
			<div className="app-content-container">
				{/* TODO: Add images */}
				<PageHeading heading="Animals" />
			</div>
		</div>
	);
};
