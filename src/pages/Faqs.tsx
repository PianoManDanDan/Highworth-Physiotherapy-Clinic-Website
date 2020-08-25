import React from 'react';
import { PageHeading } from '../components/PageHeading/src';
import { faqData } from './data';
import { FaqQuestion } from '../components/FaqQuestion/src';

export const Faqs: React.FC<{}> = () => {
	document.title = 'FAQs | Highworth Physiotherapy Clinic';
	return (
		<div className="page">
			<div className="page-faqs">
				<div className="app-content-container">
					<PageHeading heading="Frequently Asked Questions" />
					<div className="faqs">
						{faqData.map((faq) => (
							// eslint-disable-next-line react/jsx-key
							<FaqQuestion {...faq} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
