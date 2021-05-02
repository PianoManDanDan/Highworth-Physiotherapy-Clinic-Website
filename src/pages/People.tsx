import React from 'react';
import { Profile } from '../components/Profile/src';
import { PageHeading } from '../components/PageHeading/src';
import { peopleData } from './data';

export const People: React.FC<{}> = () => {
	document.title = 'Meet the Team | Highworth Physiotherapy Clinic';
	return (
		<div className="page">
			<div className="page-people">
				<div className="app-content-container">
					<PageHeading heading="Meet the Team" />
					<div className="page-content">
						{peopleData.map((person) => (
							<Profile {...person} key={person.name} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
