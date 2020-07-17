import React from 'react';
import { ProfileProps } from './types';
import './Profile.scss';
import defaultImage from '../../../../assets/staff/staff_default.jpg';

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
				<img
					src={image?.src || defaultImage}
					alt={image?.altText || 'Image not yet available'}
				/>
			</div>
			<div className="profile__heading">
				<div className="profile__name">
					{name} {qualification ? qualification + '.' : null}
				</div>
				{yearQualified ? (
					<div className="profile__qualification-year">
						Qualified {yearQualified}
					</div>
				) : null}
			</div>
			<div className="profile__body">
				{specialities ? (
					<div className="profile__specialities">
						<span className="profile__specialities-title">Speciality:</span>{' '}
						{specialities.join(', ')}
					</div>
				) : null}
				<div className="profile__bio">
					{bio.map((paragraph) => (
						// eslint-disable-next-line react/jsx-key
						<p>{paragraph}</p>
					))}
				</div>
			</div>
		</div>
	);
};
