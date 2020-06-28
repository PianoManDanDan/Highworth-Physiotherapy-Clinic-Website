import React from 'react';
import { Link } from 'react-router-dom';
import { NavbarProps } from './types';
import './Navbar.scss';

export const Navbar: React.FC<NavbarProps> = ({ links }) => {
	return (
		<div className="navbar">
			{links.map((link) => (
				<Link to={link.href} key={link.text}>
					{link.text}
				</Link>
			))}
		</div>
	);
};
