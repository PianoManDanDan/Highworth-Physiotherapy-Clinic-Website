import React from 'react';
import { FooterProps } from './types';
import './Footer.scss';
import facebookLogo from '../../../../assets/logos/f_logo.png';

// TODO: Put telephone link in bottom
export const Footer: React.FC<FooterProps> = ({ regulatoryBodyLinks }) => {
	return (
		<div className="footer">
			<div className="app-content-container">
				<div className="row">
					<div className="col-md-4 col-sm-12">
						<div className="footer__social-media">
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
					<div className="col-md-4 col-sm-12">
						<div className="footer__heading">
							All of our physios are registered with at least one of the
							following regulatory bodies:
						</div>
						<div className="footer__regulatory-bodies">
							<ul>
								{regulatoryBodyLinks.map((regulatoryBody) => (
									<a
										href={regulatoryBody.href}
										target="_blank"
										rel="noopener noreferrer"
										key={regulatoryBody.name}
									>
										<li>
											{regulatoryBody.abbrTitle ? (
												<abbr title={regulatoryBody.abbrTitle}>
													{regulatoryBody.name}
												</abbr>
											) : (
												regulatoryBody.name
											)}
										</li>
									</a>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="footer__copyright">
				<div className="app-content-container">
					&copy; Highworth Physiotherapy Clinic 2020
				</div>
			</div>
		</div>
	);
};
