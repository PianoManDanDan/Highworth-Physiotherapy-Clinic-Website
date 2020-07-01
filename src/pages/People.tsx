import React from 'react';
import { Profile } from '../components/Profile/src';
import { PageHeading } from '../components/PageHeading/src';
import { peopleData } from './data';

export const People: React.FC<{}> = () => {
	return (
		<div className="people">
			<div className="app-content-container">
				<PageHeading heading="Meet the Team" />

				{peopleData.map((person) => (
					<Profile {...person} key={person.name} />
				))}
			</div>
		</div>
	);
};
