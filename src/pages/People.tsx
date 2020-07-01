import React from 'react';
import { Profile } from '../components/Profile/src';
import { peopleData } from './data';

export const People: React.FC<{}> = () => {
	return (
		<div className="people">
			<div className="app-content-container">
				<div className="page-heading">Meet the Team</div>

				{peopleData.map((person) => (
					<Profile {...person} key={person.name} />
				))}
			</div>
		</div>
	);
};
