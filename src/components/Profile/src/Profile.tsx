import React from 'react';
import { ProfileProps } from './types';
import './Profile.scss';

export const Profile: React.FC<ProfileProps> = ({
	image,
	name,
	qualification,
	yearQualified,
	specialities,
	bio,
}) => {
	return (
		<div className="profile">
			<div className="profile__image">
				<img src={image.src} alt={image.altText} />
			</div>
			<div className="profile__heading">
				<div className="profile__name">
					{name} {qualification || null}
				</div>
				{yearQualified ? (
					<div className="profile__qualification-year">{yearQualified}</div>
				) : null}
			</div>
			<div className="profile__body">
				{specialities ? (
					<div className="profile__specialities">
						Speciality: {specialities.join(', ')}
					</div>
				) : null}
				<div className="profile__bio">
					{bio.map((paragraph) => (
						// eslint-disable-next-line react/jsx-key
						<div>{paragraph}</div>
					))}
				</div>
			</div>
		</div>
	);
};
