import React from 'react';
import { FooterProps } from './types';
import './Footer.scss';
import facebookLogo from '../../../../assets/logos/f_logo.png';

export const Footer: React.FC<FooterProps> = ({
	insuranceProviders,
	affiliateLinks,
}) => {
	return (
		<div className="footer">
			<div className="app-content-container">
				<div className="row">
					<div className="footer__facebook">
						Find us on Facebook
						<a
							href="https://www.facebook.com/HighworthPhysio/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img src={facebookLogo} alt="Find us on Facebook" />
						</a>
					</div>
				</div>
				<div className="row">
					<div className="col-md-3 col-sm-12">
						<div className="footer__heading">
								Approved by all major insurance companies:
						</div>
						<div>
							<ul>
								{insuranceProviders.map((provider) => (
									<li key={provider}>{provider}</li>
								))}
							</ul>
						</div>
					</div>
					<div className="col-md-3 col-sm-12">
						<div className="footer__heading">
								Affiliated with:
						</div>
						<div>
							<ul>
								{affiliateLinks.map((affiliate) => (
									<li key={affiliate.name}>
										<a
											href={affiliate.href}
											target="_blank"
											rel="noopener noreferrer"
										>
											{affiliate.abbrTitle ? (
												<abbr title={affiliate.abbrTitle}>
													{affiliate.name}
												</abbr>
											) : (
												affiliate.name
											)}
										</a>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
