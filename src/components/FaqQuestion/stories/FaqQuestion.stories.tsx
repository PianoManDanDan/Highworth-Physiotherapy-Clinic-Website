import React from 'react';
import { FaqQuestion, FaqQuestionProps } from '../src';

const getFaqQuestionProps = (): FaqQuestionProps => ({
	question: 'This is a question?',
	answer: 'This is an answer',
});

export default {
	title: 'FaqQuestion',
	component: FaqQuestion,
};

export const Story = () => {
	return <FaqQuestion {...getFaqQuestionProps()} />;
};
