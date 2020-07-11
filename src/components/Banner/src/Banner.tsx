import React from 'react';
import { Link } from 'react-router-dom';
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
				<div className="col-xs-12">
					<div className="row">
						<div className="banner__logo">
							<Link to="/">
								<img
									src={spineLogo}
									alt="Highworth Physiotherapy Clinic logo"
								/>
							</Link>
						</div>
						<div className="banner__details">
							<div className="banner__title">{name}</div>
							<div className="banner__address">{address}</div>
							<div className="banner__telephone">
								tel: <a href={telephone.href}>{telephone.text}</a>
							</div>
						</div>
					</div>
				</div>
				<Navbar {...navbarLinks} />
			</div>
		</div>
	);
};
