import React from 'react';
import { FaqQuestion, FaqQuestionProps } from '../src';

export default {
	title: 'FAQ Question',
	component: FaqQuestion,
};

export const Story = (args: FaqQuestionProps) => {
	return <FaqQuestion {...args} />;
};
Story.args = {
	question: 'This is a question?',
	answer: 'This is an answer',
};
