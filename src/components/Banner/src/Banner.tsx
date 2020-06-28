import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.scss';
import spineLogo from '../../../../assets/logos/spine_logo.png';

export const Banner: React.FC<{}> = () => {
	return (
		<div className="banner">
			<div className="app-content-container">
				<div className="banner__logo">
					<img src={spineLogo} alt="Highworth Physiotherapy Clinic logo" />
				</div>
				<div className="banner__title">Highworth Physiotherapy Clinic</div>
				<div className="banner__address">
					13 High Street, Highworth, Swindon, SN6 7AG
				</div>
				<div className="banner_telephone">
					<a href="tel:+441793763814">01793 763814</a>
				</div>
			</div>
		</div>
	);
};
