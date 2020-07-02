import React from 'react';
import { PageHeading } from '../components/PageHeading/src';

export const Home: React.FC<{}> = () => {
	document.title = 'Highworth Physiotherapy Clinic';
	return (
		<div className="page-home">
			<PageHeading heading="Home page" />
			<div className="insurance">
				{/* TODO: Reword */}
				We work with several insurance providers. If you would like to take
				advantage of this, please check with your insurance provider to see if
				we are an approved provider.
			</div>
		</div>
	);
};
