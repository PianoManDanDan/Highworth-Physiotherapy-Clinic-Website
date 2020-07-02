import React from 'react';
import { PageSubHeadingProps } from './types';
import './PageSubHeading.scss';

export const PageSubHeading: React.FC<PageSubHeadingProps> = ({ text }) => {
	return (
		<div className="subheading" role="heading" aria-level={2}>
			{text}
		</div>
	);
};
