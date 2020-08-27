import React from 'react';
import { PageSubHeadingProps } from './types';
import './PageSubHeading.scss';

{
	/* TODO: Change level of heading with props. e.g.

		export const PageSubHeading = ({text, level}) => {
			return (
				<div className="page-subheading">
					<h{level}>{text}</h{level}>
				</div>
			);
		}

		So <PageSubHeading text="blah" level={3} /> returns:
		<div class="page-subheading">
			<h3>blah</h3>
		</div>
	*/
}

export const PageSubHeading: React.FC<PageSubHeadingProps> = ({ text }) => {
	return (
		<div className="page-subheading">
			<h2 className="page-subheading__text">{text}</h2>
		</div>
	);
};
