import React from 'react';
import { FaqQuestionProps } from './types';
import './FaqQuestion.scss';

export const FaqQuestion: React.FC<FaqQuestionProps> = ({
	question,
	answer,
}) => {
	return (
		<div className="faq__section">
			<div className="faq__question">{question}</div>
			<div className="faq__answer">{answer}</div>
		</div>
	);
};
