import React from 'react';
import './PageHeading.scss';
import { PageHeadingProps } from './types';

export const PageHeading: React.FC<PageHeadingProps> = ({ heading }) => {
	return (
		<div className="page-heading">
			<h1>{heading}</h1>
		</div>
	);
};
