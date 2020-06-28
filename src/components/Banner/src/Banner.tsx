import React from 'react';
import { BannerProps } from './types';
import { Navbar } from './subcomponents/Navbar/src';
import './Banner.scss';
import spineLogo from '../../../../assets/logos/spine_logo.png';

export const Banner: React.FC<BannerProps> = ({
	name,
	address,
	telephone,
	navbarLinks,
}) => {
	return (
		<div className="banner">
			<div className="app-content-container">
				<div className="banner__logo">
					<img src={spineLogo} alt="Highworth Physiotherapy Clinic logo" />
				</div>
				<div className="banner__title">{name}</div>
				<div className="banner__address">{address}</div>
				<div className="banner_telephone">
					<a href={telephone.href}>{telephone.text}</a>
				</div>
				<Navbar {...navbarLinks} />
			</div>
		</div>
	);
};
