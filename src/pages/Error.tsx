import React from 'react';
import { PageHeading } from '../components/PageHeading/src';

export const Error: React.FC<{}> = () => {
	document.title = 'Error | Highworth Physiotherapy Clinic';
	return (
		<div className="page">
			<div className="page-error">
				<div className="app-content-container">
					<PageHeading heading="Oops..." />
					<div className="page-content">
						<div className="error-message">
							We can&apos;t find the page you are looking for. Why not try one
							of the links above.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
